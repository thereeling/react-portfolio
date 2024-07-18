"use client";

import React from "react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

export default function MotionSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Separator />
    </motion.div>
  );
}
