"use client";

import React, { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/layout.tsx
import { Providers } from "./providers";
import GlobalContext from "./context";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [address, setAddress] = React.useState(null);
  const [web3Instance, setWeb3Instance] = React.useState(null);
  const [web3Auth, setWeb3Auth] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [ profile, setProfile] = React.useState({email: ""})

  let contextData = {
    address,
    setAddress,
    web3Instance,
    setWeb3Instance,
    web3Auth,
    setWeb3Auth,
    isLoggedIn,
    setIsLoggedIn,
    profile,
    setProfile
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalContext.Provider value={contextData}>
          <Providers>
            <Header></Header>
            <Footer></Footer>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "row",
                padding: "60px 15px 65px 0px",
              }}
            >
              {children}
            </div>
          </Providers>
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
