import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import FlexDirection from "@/components/docs/components/Flex/FlexDirection";
import FlexGap from "@/components/docs/components/Flex/FlexGap";
import { useTranslation } from "react-i18next";

const Flex = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Flex"}
        description={t("Flex_Description")}
        imports={["Flex"]}
        src={"Flex"}
        examples={[
          { title: "direction", component: FlexDirection },
          { title: "gap", component: FlexGap },
        ]}
        props={[
          {
            name: "direction",
            type: ["column", "column-reverse", "row", "row-reverse"],
            description: "flex-direction",
          },
          {
            name: "justify",
            type: [
              "start",
              "end",
              "center",
              "around",
              "between",
              "evenly",
              "stretch",
              "normal",
            ],
            description: "justify-content",
          },
          {
            name: "align",
            type: ["start", "end", "center", "stretch", "baseline", "normal"],
            description: "align-items",
          },
          {
            name: "wrap",
            type: ["nowrap", "end", "center", "stretch", "baseline", "normal"],
            description: "flex-wrap",
          },
          {
            name: "grow",
            type: ["number"],
            description: "flex-grow",
          },
          {
            name: "shrink",
            type: ["number"],
            description: "flex-shrink",
          },
          {
            name: "gap",
            type: ["number"],
            description: "gap",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Flex;
