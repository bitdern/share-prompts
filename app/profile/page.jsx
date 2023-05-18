"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const Profile = () => {
  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <Profile
      name="my"
      desc="Welcome to your profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Profile;
