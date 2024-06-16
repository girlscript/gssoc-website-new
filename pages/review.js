import React, { useState } from "react";
import {
    Spinner,
  } from "@chakra-ui/react";
import UserData from "../components/review/UserData";
import UserForm from "../components/review/UserForm";
import { getUserData, updateUser } from "./api/review";
function review() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedDate = `${date.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return `${formattedDate} ${formattedTime}`;
  }
  const handleGetData = async (username) => {
    const data = await getUserData(username, setLoading);
    setUser(data);
  };

  const handleUpdate = async () => {
    const date = getCurrentDateTime();
    await updateUser(user.username, date, setLoading);
    await handleGetData(user.username);
  };

  return (
    <div className="min-h-screen">
      <UserForm onSubmit={handleGetData} />
      {loading && (
        <div className="loader-div">
          <div className="overlay dark:bg-darkmode_gray-0"></div>
          <div className="loader-group-container">
            <div className="loader-group dark:bg-black">
              <Spinner
                className="loader"
                thickness="6px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.500"
                size="xl"
              />
              <span className="loading-msg dark:text-white">Getting data Please wait</span>
            </div>
          </div>
        </div>
      )}
      {user && !loading && <UserData user={user} onUpdate={handleUpdate} />}
    </div>
  );
}

export default review;
