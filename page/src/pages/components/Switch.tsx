import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import SwitchBgColor from "@/components/docs/components/Switch/SwitchBgColor";
import SwitchIsDisabled from "@/components/docs/components/Switch/SwitchIsDisabled";
import SwitchSize from "@/components/docs/components/Switch/SwitchSize";

const Switch = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Switch"}
        description={
          "Switch is used as an alternative for the checkbox component."
        }
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
            defaultVal: "md",
          },
          {
            name: "bgColor",
            type: ["string"],
            defaultVal: "#2E8B57",
          },
          {
            name: "disabled",
            type: ["boolean"],
            defaultVal: "false",
          },
          {
            name: "onClick",
            type: ["function"],
            defaultVal: "() => void",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Switch;
