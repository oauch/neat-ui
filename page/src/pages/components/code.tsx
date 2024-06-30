import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import CodeBgColor from "@/components/docs/components/Code/CodeBgColor";
import CodeColor from "@/components/docs/components/Code/CodeColor";
import CodeFs from "@/components/docs/components/Code/CodeFs";
import { useTranslation } from "react-i18next";

const Code = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Code"}
        description={t("Code_Description")}
        imports={["Code"]}
        src="Code"
        examples={[
          { title: "fs", component: CodeFs },
          { title: "bgColor", component: CodeBgColor },
          { title: "color", component: CodeColor },
        ]}
        props={[
          {
            name: "fs",
            type: ["number"],
            description: "font Size",
          },
          {
            name: "bgColor",
            type: ["string"],
            description: "background Color",
          },
          {
            name: "color",
            type: ["string"],
            description: "font Color",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Code;
