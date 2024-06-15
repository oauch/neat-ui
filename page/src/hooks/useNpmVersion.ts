import { NPM_VERSION } from "@/constants/url";
import axios from "axios";
import { useEffect, useState } from "react";

const useNpmVersion = () => {
  const [version, setVersion] = useState("");

  const getVersion = async () => {
    const res: any = await axios.get(NPM_VERSION);
    const { latest } = res.data["dist-tags"];
    setVersion(`ver. ${latest}`);
  };

  useEffect(() => {
    getVersion();
  }, []);

  return { version };
};

export default useNpmVersion;
