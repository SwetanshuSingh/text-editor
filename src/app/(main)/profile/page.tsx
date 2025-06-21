const ProfilePage = async () => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  await sleep(1000);

  return (
    <main className="w-full h-full bg-[#F8F8F8] flex justify-center items-center rounded-md outline outline-[#E4E4E4]">
      <p>this is profile page</p>
    </main>
  );
};

export default ProfilePage;
