import React from "react";
import Footer from "../components/main/Footer/Footer";
import Login from "../components/main/Login/Login";
import Header from "../components/main/header/Header";
import Home from "../components/main/Home/Home";
import Rooms from "../components/rooms/Rooms";

import { Routes, Route, Navigate } from "react-router-dom";
import NotFound404 from "../components/NotFound404/NotFound404.jsx.jsx";
import ChatroomLoader from "../components/chatroom/chatroomLoader";
import UserContextProvider from "../context/userContext";

export default function ChatroomRouter() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="home" index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="chatroom/:roomName" element={<ChatroomLoader />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}
