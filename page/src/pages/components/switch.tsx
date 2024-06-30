import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import SwitchBgColor from "@/components/docs/components/Switch/SwitchBgColor";
import SwitchIsDisabled from "@/components/docs/components/Switch/SwitchIsDisabled";
import SwitchSize from "@/components/docs/components/Switch/SwitchSize";
import { useTranslation } from "react-i18next";

const Switch = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Switch"}
        description={t("Switch_Description")}
        imports={["Switch"]}
        src={"Switch"}
        examples={[
          { title: "size", component: SwitchSize },
          { title: "bgColor", component: SwitchBgColor },
          { title: "disabled", component: SwitchIsDisabled },
        ]}
        props={[
          {
            name: "size",
            type: ["sm", "md", "lg"],
            description: "Switch Size",
          },
          {
            name: "bgColor",
            type: ["string"],
            description: "background Color",
          },
          {
            name: "disabled",
            type: ["boolean"],
            description: "disabled setting",
          },
          {
            name: "onClick",
            type: ["() => void"],
            description: "click Event",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Switch;
