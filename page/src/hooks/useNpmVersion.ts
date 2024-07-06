import { NPM_VERSION } from "@/constants/url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNpmVersion = () => {
  const getVersion = async () => {
    const res: any = await axios.get(NPM_VERSION);
    const { latest } = res.data["dist-tags"];
    return `ver. ${latest}`;
  };

  const { data: neatUiVer } = useQuery({
    staleTime: 60 * 60 * 1000,
    queryKey: ["neatUiVer"],
    queryFn: getVersion,
  });

  return { neatUiVer };
};

export default useNpmVersion;
