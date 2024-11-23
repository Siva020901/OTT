import React, { createContext, useMemo, useState, useCallback } from "react";

export const SidebarContext = createContext();

function DrawerContext({ children }) {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [progress, setProgress] = useState(0);

  // Stabilize toggleDrawer function with useCallback
  const toggleDrawer = useCallback(() => setMobileDrawer((prev) => !prev), []);

  // Include toggleDrawer in useMemo dependencies
  const value = useMemo(
    () => ({ mobileDrawer, toggleDrawer, progress, setProgress }),
    [mobileDrawer, toggleDrawer, progress]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export default DrawerContext;
