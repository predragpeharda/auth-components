"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useTransition, useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";
import { SpinnerCircular } from "spinners-react";

const INPUT_FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "First and Last name",
  },
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

export const RegisterForm = () => {
  const [state, setState] = useState<{ error?: string; success?: string }>({});
  const [loading, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: useMemo(() => ({ name: "", email: "", password: "" }), []),
  });

  const onSubmit = useCallback(
    async (values: { name: string; email: string; password: string }) => {
      if (state.error || state.success) setState({});

      startTransition(async () => {
        const data = await register(values);
        if (data?.error || data?.success) {
          setState({ error: data?.error, success: data?.success });
        }
      });
    },
    [state]
  );

  return (
    <CardWrapper
      headingLabel="Create an account!"
      descriptionLabel=""
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
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
                        type={type}
                        placeholder={placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={state.error} />
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
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
