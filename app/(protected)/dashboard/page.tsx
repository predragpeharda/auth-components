import { auth, signOut } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button typeof="submit">Sign out</button>
      </form>
    </div>
  );
};

export default DashboardPage;
