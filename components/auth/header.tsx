interface HeaderProps {
  heading: string;
  description: string;
}

export const Header = ({ heading, description }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-balance text-muted-foreground">{description}</p>
    </div>
  );
};
