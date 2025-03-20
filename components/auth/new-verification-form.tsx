"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ClipLoader } from "react-spinners";

export const NewVerificationForm = () => {
  return (
    <CardWrapper
      headingLabel="Confirm your email!"
      descriptionLabel=""
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        <ClipLoader />
      </div>
    </CardWrapper>
  );
};
