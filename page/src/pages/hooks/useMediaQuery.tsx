import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useMediaQueryHook from "@/components/docs/hooks/useMediaQueryHook";
import { useTranslation } from "react-i18next";

const useMediaQuery = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"useMediaQuery"}
        description={t("useMediaQuery_Description")}
        imports={["useMediaQuery"]}
        src={"useMediaQuery"}
        examples={[
          {
            title: "useMediaQuery",
            component: useMediaQueryHook,
          },
        ]}
        props={[
          {
            name: "variable",
            type: ["boolean"],
            description: "hovered over or not boolean value",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useMediaQuery;
