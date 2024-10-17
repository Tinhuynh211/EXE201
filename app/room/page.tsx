"use client";

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Import ShadCN components with correct paths
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItem } from "@/components/ui/form";
import Scene from "@/components/3d/Scene";
import Modal from "@/components/modal/Modal";// Import Modal

export default function Page() {
  const [token, setToken] = useState(""); // Token
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isChatOpen, setIsChatOpen] = useState(false); // Control live chat modal visibility

  const { register, handleSubmit } = useForm(); // Initialize useForm

  const handleJoinRoom = async (data: any) => {
    setIsLoading(true);

    try {
      const { room, name, role } = data; // Destructure form data
      const resp = await fetch(
        `/api/get-participant-token?room=${room}&username=${name}&role=${role}`
      );
      const respData = await resp.json();
      setToken(respData.token);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (token === "") {
    return (
      <div className="join-room-form max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Check In</h1>

        <form onSubmit={handleSubmit(handleJoinRoom)}>
          <FormItem>
            <Label htmlFor="room">Room:</Label>
            <Input
              id="room"
              type="text"
              {...register("room", { required: true })}
              placeholder="Enter room name"
              className="border-gray-300"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="border-gray-300"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="role">Role:</Label>
            <Input
              id="role"
              type="text"
              {...register("role", { required: true })}
              placeholder="Enter your role"
              className="border-gray-300"
            />
          </FormItem>
          <Button type="submit" disabled={isLoading} className="mt-4">
            {isLoading ? "Checking In..." : "Check In"}
          </Button>
        </form>
        <Scene />
      </div>
    );
  }

  return (
    <>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        data-lk-theme="default"
        style={{ height: "100dvh" }}
      >
        <MyVideoConference />
        <RoomAudioRenderer />
        <ControlBar />
  

        <Button
          className="fixed bottom-4 right-4 z-50"
          onClick={() => setIsChatOpen(true)}
        >
          Live Chat
        </Button>
      </LiveKitRoom>

      <Modal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}>
        <div className="p-4">         
        </div>
      </Modal>
    </>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );

  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      <ParticipantTile />
    </GridLayout>
  );
}