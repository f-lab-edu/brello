"use client";

import { useEffect, useState } from "react";

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(!isMockingMode);

  useEffect(() => {
    const init = async () => {
      const initMsw = await import("./index").then((res) => res.initMsw);
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) return null;

  return <>{children}</>;
};

export default MSWComponent;
