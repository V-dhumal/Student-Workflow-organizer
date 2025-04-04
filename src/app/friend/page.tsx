"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/imput";
import { UserPlus, UserCheck, Users } from "lucide-react";

const dummyFriends = [
  { id: 1, name: "Ayesha Khan", status: "online" },
  { id: 2, name: "Rohan Mehta", status: "offline" },
  { id: 3, name: "Priya Sharma", status: "online" },
  { id: 4, name: "Arjun Patel", status: "offline" },
  { id: 5, name: "Meera Joshi", status: "online" }
];

const dummyRequests = [
  { id: 6, name: "Aman Verma" },
  { id: 7, name: "Simran Kaur" }
];

export default function FriendsPage() {
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState(dummyFriends);
  const [requests, setRequests] = useState(dummyRequests);
  const [newRequest, setNewRequest] = useState("");

  const handleAccept = (id: number) => {
    const accepted = requests.find((req) => req.id === id);
    if (accepted) {
      setFriends([...friends, { ...accepted, status: "offline" }]);
      setRequests(requests.filter((req) => req.id !== id));
    }
  };

  const handleSendRequest = () => {
    if (newRequest.trim() !== "") {
      setRequests([...requests, { id: Date.now(), name: newRequest }]);
      setNewRequest("");
    }
  };

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Friends</h1>

      <div className="max-w-xl mx-auto mb-6">
        <Input
          placeholder="Search friends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> Your Friends
            </h2>
            {filteredFriends.length === 0 ? (
              <p className="text-sm text-gray-500">No friends found.</p>
            ) : (
              <ul className="space-y-2">
                {filteredFriends.map((friend) => (
                  <li key={friend.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-base font-medium">{friend.name}</p>
                      <span className={`text-xs ${friend.status === "online" ? "text-green-500" : "text-gray-400"}`}>
                        {friend.status}
                      </span>
                    </div>
                    <UserCheck className="text-blue-500" />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <UserPlus className="w-5 h-5" /> Friend Requests
            </h2>
            {requests.length === 0 ? (
              <p className="text-sm text-gray-500">No friend requests.</p>
            ) : (
              <ul className="space-y-3">
                {requests.map((req) => (
                  <li key={req.id} className="flex justify-between items-center">
                    <p className="text-base font-medium">{req.name}</p>
                    <Button onClick={() => handleAccept(req.id)}>Accept</Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Send Friend Request</h2>
        <Input
          placeholder="Enter friend's name..."
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
        />
        <Button className="w-full mt-3" onClick={handleSendRequest}>Send Request</Button>
      </div>
    </div>
  );
}
