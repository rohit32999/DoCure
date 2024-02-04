import React, { useEffect, useState } from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {

  return (
    <div>
        <html lang="en">
          <body className={`bg-dark-1`}>
            <Navbar />
            <Outlet />
            <Footer />
          </body>
        </html>
    </div>
  );
};

export default Main;