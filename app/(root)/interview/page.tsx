import Agent from "@/components/Agent";

const Page = async () => {
  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName="Ali Hamza" userId="user1" type="generate" />
    </>
  );
};

export default Page;
