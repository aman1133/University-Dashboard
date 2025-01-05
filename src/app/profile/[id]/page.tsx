import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1>profile</h1>
      <p className="text-3xl">
        {" "}
        user profile <span>{params.id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
