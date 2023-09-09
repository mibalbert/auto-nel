/* eslint-disable @next/next/no-async-client-component */
"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react'

const Providers = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
};

export default Providers;