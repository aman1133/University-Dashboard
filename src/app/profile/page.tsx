"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import User from "@/models/userModel";

const Profile = () => {
  const router = useRouter();
  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout seccessfull");
      console.log("Logout successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>Profile</div>
      <div>
        <button
          onClick={onLogout}
          className="bg-blue-500 text-black rounded-lg mt-4 p-2 ml-2 flex items-center justify-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
