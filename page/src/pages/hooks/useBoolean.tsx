import DocsContent from "@/components/docs/common/DocsContent";
import DocsLayout from "@/components/docs/common/DocsLayout";
import useBooleanHook from "@/components/docs/hooks/useBooleanHook";
import { useTranslation } from "react-i18next";

const useBoolean = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"useBoolean"}
        description={t("useBoolean_Description")}
        imports={["useBoolean"]}
        src={"useBoolean"}
        examples={[{ title: "useBoolean", component: useBooleanHook }]}
        props={[
          {
            name: "isBoolean",
            type: ["boolean"],
            description: "boolean state",
          },
          {
            name: "setTrue",
            type: ["boolean"],
            description: "true",
          },
          {
            name: "setFalse",
            type: ["boolean"],
            description: "false",
          },
          {
            name: "toggle",
            type: ["boolean"],
            description: "true and false",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useBoolean;
