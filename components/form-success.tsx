import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-xs text-emerald-500">
      <BsCheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  );
};
