import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
