import React from "react"
import { usePage } from "@inertiajs/react"
import MainLayout from "../layouts/MainLayout";
const Profile = () => {
  const userData = usePage().props;
  return(
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="card bg-base-100 shadow-xl p-6 w-full max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          {/* <img
            src={userData.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-primary shadow-md"
          /> */}
          <h2 className="text-2xl font-bold text-black">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-black">
            <span className="font-semibold">userDataname:</span>
            <span>{userData.username}</span>
          </div>
          <div className="flex justify-between text-black">
            <span className="font-semibold">Location:</span>
            {/* <span>{userData.location}</span> */}
          </div>
          <div className="flex justify-between text-black">
            <span className="font-semibold">Joined:</span>
            {/* <span>{userData.joinDate}</span> */}
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
    </>
  )
}
Profile.layout = (page) => <MainLayout children={page} />;

export default Profile;