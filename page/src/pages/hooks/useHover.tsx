import DocsContent from "@/components/docs/common/DocsContent";
import DocsLayout from "@/components/docs/common/DocsLayout";
import useHoverHook from "@/components/docs/hooks/useHoverHook";
import { useTranslation } from "react-i18next";

const useHover = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"useHover"}
        description={t("useHover_Description")}
        imports={["useHover"]}
        src={"useHover"}
        examples={[
          {
            title: "useHover",
            component: useHoverHook,
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

export default useHover;
