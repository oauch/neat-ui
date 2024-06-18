import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import ButtonBgColor from "@/components/docs/components/Button/ButtonBgColor";
import ButtonColor from "@/components/docs/components/Button/ButtonColor";

import ButtonDisabled from "@/components/docs/components/Button/ButtonDisabled";
import ButtonFontSize from "@/components/docs/components/Button/ButtonFontSize";

import ButtonSize from "@/components/docs/components/Button/ButtonSize";
import ButtonVariants from "@/components/docs/components/Button/ButtonVariants";

const Button = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Button"}
        description={"Button is button."}
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
            defaultVal: "md",
          },
          {
            name: "fs",
            type: ["number"],
            defaultVal: "12",
          },
          {
            name: "colorTheme",
            type: ["primary", "black", "white"],
            defaultVal: "primary",
          },
          {
            name: "variants",
            type: ["none", "outline"],
            defaultVal: "none",
          },
          {
            name: "isDisabled",
            type: ["boolean"],
            defaultVal: "false",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Button;
