"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useState, useTransition, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError, FormSuccess } from "@/components/form-message";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";
import { SpinnerCircular } from "spinners-react";

const INPUT_FIELDS = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@email.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "******",
  },
] as const;

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use by different provider!"
      : "";

  const [state, setState] = useState<{ error?: string; success?: string }>({});
  const [loading, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: useMemo(() => ({ email: "", password: "" }), []),
  });

  const onSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      if (state.error || state.success) setState({});

      startTransition(async () => {
        const data = await login(values);
        if (data?.error || data?.success) {
          setState({ error: data?.error, success: data?.success });
        }
      });
    },
    [state]
  );

  return (
    <CardWrapper
      headingLabel="Welcome back!"
      descriptionLabel=""
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {INPUT_FIELDS.map(({ name, label, type, placeholder }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">{label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        placeholder={placeholder}
                        type={type}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={state.error || urlError} />
          <FormSuccess message={state.success} />
          <Button
            disabled={loading}
            type="submit"
            className="w-full cursor-pointer"
          >
            {loading ? (
              <SpinnerCircular
                size={35}
                thickness={120}
                speed={150}
                color="#f1f1f1"
              />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
