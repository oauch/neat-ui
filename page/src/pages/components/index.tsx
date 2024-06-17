import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Components = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/components/Alert");
  }, []);

  return;
};

export default Components;
