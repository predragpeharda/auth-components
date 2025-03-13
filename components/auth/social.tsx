"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => onClick("google")}
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
        onClick={() => onClick("github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};
