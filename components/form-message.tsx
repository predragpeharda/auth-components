import { BsExclamationTriangle, BsCheckCircle } from "react-icons/bs";

interface FormMessageProps {
  message?: string;
  variant?: "error" | "success";
}

export const FormMessage = ({
  message,
  variant = "error",
}: FormMessageProps) => {
  if (!message) return null;

  const isError = variant === "error";

  const iconStyles = "size-4";
  const containerStyles = `p-3 rounded-md flex items-center gap-x-2 text-xs ${
    isError
      ? "bg-destructive/15 text-destructive"
      : "bg-emerald-500/15 text-emerald-500"
  }`;

  return (
    <div className={containerStyles}>
      {isError ? (
        <BsExclamationTriangle className={iconStyles} />
      ) : (
        <BsCheckCircle className={iconStyles} />
      )}
      <p>{message}</p>
    </div>
  );
};

// For backward compatibility
export const FormError = ({ message }: { message?: string }) => (
  <FormMessage message={message} variant="error" />
);

export const FormSuccess = ({ message }: { message?: string }) => (
  <FormMessage message={message} variant="success" />
);
