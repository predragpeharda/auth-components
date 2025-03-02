import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headingLabel="Welcome back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
