import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="disabled:scale-100 disabled:bg-opacity-55"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-border"></div>
      ) : (
        <>Submit</>
      )}
    </Button>
  );
}
