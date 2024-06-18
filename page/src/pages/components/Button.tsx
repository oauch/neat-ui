import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import ButtonColorTheme from "@/components/docs/components/Button/ButtonColorTheme";
import ButtonFs from "@/components/docs/components/Button/ButtonFs";
import ButtonIsDisabled from "@/components/docs/components/Button/ButtonIsDisabled";
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
          { title: "font-size", component: ButtonFs },
          { title: "colorTheme", component: ButtonColorTheme },
          { title: "variants", component: ButtonVariants },
          { title: "isDisabled", component: ButtonIsDisabled },
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
