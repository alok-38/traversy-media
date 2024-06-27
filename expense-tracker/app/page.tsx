import Guest from "@/components/Guest";
import Header from "@/components/Header";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Header />
    </main>
  );
};

export default HomePage;
