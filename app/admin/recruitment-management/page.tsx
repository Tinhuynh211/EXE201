"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCV } from "@/utils/actions";
import EmptyList from "@/components/home/EmptyList";
import dynamic from "next/dynamic"; // Sử dụng dynamic import
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // ShadCN table components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // ShadCN Modal components
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

// Dynamic import cho PDF Viewer để tránh lỗi prerender
const PDF = dynamic(() => import('@/components/admin/recruitment/PdfViewer'), {
  ssr: false,
});

interface Profile {
  id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Rental {
  id: string;
  profile: Profile;
  cv: string;
  profileId: string;
}

function Candidate() {
  const [cv, setCv] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Trạng thái loading
  const [isSendingEmail, setIsSendingEmail] = useState(false); // Trạng thái gửi email
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCV, setSelectedCV] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Bắt đầu loading
      const data = await fetchCV();
      setCv(data);
      setIsLoading(false); // Kết thúc loading
    };
    fetchData();
  }, []);

  const handleSendEmail = async (email: string, name: string) => {
    setIsSendingEmail(true); // Bắt đầu trạng thái loading cho email
    const htmlContent = `
      <html>
        <body>
          <h1>Hello, ${name}</h1>
          <p>This is a sample message.</p>
        </body>
      </html>
    `;

    try {
      const response = await axios.post("/api/send-email", {
        to: email,
        subject: "Sample Email",
        html: htmlContent,
      });
      if (response.status === 200) {
        alert("Email sent successfully!");
      } else {
        alert(`Failed to send email: ${response.statusText}`);
      }
    } catch (error: any) {
      console.error("Error sending email:", error);
      alert(`Failed to send email: ${error.message}`);
    } finally {
      setIsSendingEmail(false); // Kết thúc trạng thái loading
    }
  };

  const handleViewCV = (cvUrl: string) => {
    setSelectedCV(cvUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCV(null);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Candidate</CardTitle>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Profile</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? // Hiển thị skeleton khi đang tải
                Array.from({ length: 3 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-9 w-9 rounded-full" />
                        <div>
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-48" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8 w-24" />
                    </TableCell>
                  </TableRow>
                ))
              : cv.map((rental) => (
                  <TableRow key={rental.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage
                            src={rental.profile.profileImage}
                            alt="Avatar"
                          />
                          <AvatarFallback>
                            {rental.profile.firstName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-sm font-semibold">
                            {rental.profile.firstName} {rental.profile.lastName}
                          </h4>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{rental.profile.email}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleViewCV(rental.cv)}
                          className="bg-green-500 hover:bg-green-600"
                        >
                          View CV
                        </Button>
                        <Button
                          onClick={() =>
                            handleSendEmail(
                              rental.profile.email,
                              rental.profile.firstName
                            )
                          }
                          disabled={isSendingEmail} // Cập nhật trạng thái gửi email
                        >
                          {isSendingEmail ? "Sending..." : "Send Email"}
                        </Button>

                        <Button className="bg-red-500 hover:bg-red-600">
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </Card>

      {isModalOpen && selectedCV && (
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="max-w-[40%] max-h-[100%] overflow-auto">
            <DialogHeader>
              <DialogTitle>View CV</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center items-center h-full overflow-auto">
              <div className="w-[80%] h-full">
                <PDF url={selectedCV} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Candidate;
