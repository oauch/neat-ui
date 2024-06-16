import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const navigate = useRouter();

  return (
    <>
      404 <br />
      Not Found Page.
      <button onClick={() => navigate.back()}>Back page</button>
    </>
  );
};

export default NotFoundPage;
