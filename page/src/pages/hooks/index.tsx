import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Hooks = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hooks/useBoolean");
  }, []);

  return;
};

export default Hooks;
