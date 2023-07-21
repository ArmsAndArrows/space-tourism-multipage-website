"use client";

import { createContext, useContext, useState } from "react";

import { usePathname } from "next/navigation";

const ActiveLinkContext = createContext();

export function useActiveLink() {
  return useContext(ActiveLinkContext);
}

export function ActiveLinkProvider({ children }) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname === "/" ? "home" : pathname.slice(1));

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}
