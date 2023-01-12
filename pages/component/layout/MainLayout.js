import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return <div>
      <h1>Main Layout</h1>
      <Outlet/>
  </div>;
}
