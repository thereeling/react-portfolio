import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from "lucide-react";
import { toast } from "react-hot-toast";

export default function SuccessAlert() {
  toast.custom((t) => (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <Alert>
            <Check className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your Email has been successfully sent. Thanks for reaching out!
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  ));
}
