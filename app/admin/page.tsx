"use client"; // Ensures the component is treated as a Client Component

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Candidate from "@/app/admin/recruitment-management/page";
// Ensure that the necessary imports are uncommented
import { Bell, Home, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [selectedKey, setSelectedKey] = useState("1");

  const renderTab = () => {
    switch (selectedKey) {
      case "1":
        return <div>Dashboard Content</div>; // You can replace this with the actual dashboard content
      case "2":
        return <Candidate />; // Render Candidate component when selectedKey is "2"
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {/* Dashboard Card */}
              <div
                className="cursor-pointer gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all"
                onClick={() => setSelectedKey("1")} // Set key to "1" on click
              >
                <Card className="hover:text-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Home className="h-5 w-5" />
                      Dashboard
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

              {/* Candidate Card */}
              <div
                className="cursor-pointer gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all"
                onClick={() => setSelectedKey("2")} // Set key to "2" on click
              >
                <Card className="hover:text-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5" />
                      Candidate
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Render the selected tab based on the key */}
        {renderTab()}
      </div>
    </div>
  );
}
