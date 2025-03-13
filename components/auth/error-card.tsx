import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headingLabel="Oops!"
      descriptionLabel="Something went wrong"
      backButtonHref="/login"
      backButtonLabel="Back to login"
      showSocial={false}
    ></CardWrapper>
  );
};
