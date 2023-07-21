

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { ActiveLinkProvider } from "../components/ActiveLinkContext/ActiveLinkContext";
import "../../src/app/globals.scss";


export const metadata = {
  title: "Space Tourism Multi-page Website",
  description: "Frontend Mentor Challenge by Maksim Shchetkov",
};

export default function RootLayout({ children, }) {
  return (
    <ActiveLinkProvider >
    <html lang="en">
      <body>
        
        <Navbar />
        
        {children}
      </body>
    </html>
    </ActiveLinkProvider>
  );
}

