"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { JSX, useState } from "react";
import { SpinnerCircular } from "spinners-react";

interface Provider {
  name: string;
  icon: JSX.Element;
}

const PROVIDERS: Provider[] = [
  { name: "google", icon: <FcGoogle className="size-5" /> },
  { name: "apple", icon: <FaApple className="size-5" /> },
  { name: "github", icon: <FaGithub className="size-5" /> },
];

export const Social = () => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const onClick = (provider: string) => {
    setLoading((prev) => ({ ...prev, [provider]: true }));

    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT }).finally(() => {
      setLoading((prev) => ({ ...prev, [provider]: false }));
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {PROVIDERS.map(({ name, icon }) => (
        <Button
          key={name}
          size="lg"
          className="w-full cursor-pointer"
          variant="outline"
          onClick={() => onClick(name)}
          disabled={loading[name]}
        >
          {loading[name] ? (
            <SpinnerCircular
              size={35}
              thickness={120}
              speed={150}
              color="#000000"
              secondaryColor="background-color"
            />
          ) : (
            icon
          )}
        </Button>
      ))}
    </div>
  );
};
