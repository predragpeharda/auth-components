"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => {}}
      >
        <FaApple className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};
