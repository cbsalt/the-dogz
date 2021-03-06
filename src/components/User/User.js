import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => (
  <section className="container">
    <UserHeader />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post" element={<UserPhotoPost />} />
      <Route path="/statistics" element={<UserStats />} />
    </Routes>
  </section>
);

export default User;
