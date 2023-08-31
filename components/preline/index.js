/**
 * Preline.js
 */

"use client";

import { useEffect } from "react";

const Preline = ({ children }) => {
  useEffect(() => {
    import("preline");
  }, []);
  return null;
};

export default Preline;
