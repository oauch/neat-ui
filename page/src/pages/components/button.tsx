import DocsContent from "@/components/docs/common/DocsContent";
import DocsLayout from "@/components/docs/common/DocsLayout";
import ButtonBgColor from "@/components/docs/components/Button/ButtonBgColor";
import ButtonColor from "@/components/docs/components/Button/ButtonColor";
import ButtonDisabled from "@/components/docs/components/Button/ButtonDisabled";
import ButtonFontSize from "@/components/docs/components/Button/ButtonFontSize";
import ButtonSize from "@/components/docs/components/Button/ButtonSize";
import ButtonVariants from "@/components/docs/components/Button/ButtonVariants";
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Button"}
        description={t("Button_Description")}
        imports={["Button"]}
        src={"Button"}
        examples={[
          { title: "size", component: ButtonSize },
          { title: "font-size", component: ButtonFontSize },
          { title: "bgColor", component: ButtonBgColor },
          { title: "color", component: ButtonColor },
          { title: "variants", component: ButtonVariants },
          { title: "disabled", component: ButtonDisabled },
        ]}
        props={[
          {
            name: "size",
            type: ["sm", "md", "lg"],
            description: "Button Size",
          },
          {
            name: "fs",
            type: ["number"],
            description: "font Size",
          },
          {
            name: "bgColor",
            type: ["string"],
            description: "Background Color",
          },
          {
            name: "color",
            type: ["string"],
            description: "font Color",
          },
          {
            name: "variants",
            type: ["none", "outline"],
            description: "Existence of border",
          },
          {
            name: "disabled",
            type: ["boolean"],
            description: "disabled setting",
          },
          {
            name: "onClick",
            type: ["() => void"],
            description: "Click event",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Button;
