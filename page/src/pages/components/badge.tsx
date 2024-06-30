import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import BadgeBgColor from "@/components/docs/components/Badge/BadgeBgColor";
import BadgeColor from "@/components/docs/components/Badge/BadgeColor";
import BadgeFontSize from "@/components/docs/components/Badge/BadgeFontSize";

import { useTranslation } from "react-i18next";

const Badge = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Badge"}
        description={t("Badge_Description")}
        imports={["Badge"]}
        src={"Badge"}
        examples={[
          { title: "bgColor", component: BadgeBgColor },
          { title: "color", component: BadgeColor },
          { title: "fs", component: BadgeFontSize },
        ]}
        props={[
          {
            name: "bgColor",
            type: ["string"],
            description: "Badge Background Color",
          },
          {
            name: "color",
            type: ["string"],
            description: "Badge Color",
          },
          {
            name: "fs",
            type: ["number"],
            description: "Badge font-size",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Badge;
