import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (href: string) => {
  const router = useRouter();
  useEffect(() => {
    router.push(href);
  }, []);
};

export { useRedirect };
