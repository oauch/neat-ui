import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import ChipColorTheme from "@/components/docs/components/Chip/ChipColorTheme";
import ChipDisabled from "@/components/docs/components/Chip/ChipDisabled";
import ChipFontSize from "@/components/docs/components/Chip/ChipFontSize";
import ChipSize from "@/components/docs/components/Chip/ChipSize";

const Chip = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Chip"}
        description={
          "Chips are compact elements that represent an input, attribute, or action."
        }
        imports={["Chip"]}
        src={"Chip"}
        examples={[
          { title: "size", component: ChipSize },
          { title: "colorTheme", component: ChipColorTheme },
          { title: "fs", component: ChipFontSize },
          { title: "isDisabled", component: ChipDisabled },
        ]}
        props={[
          {
            name: "size",
            type: ["xs", "sm", "md", "lg"],
            defaultVal: "md",
          },
          {
            name: "colorTheme",
            type: ["primary", "black", "white"],
            defaultVal: "primary",
          },
          {
            name: "fs",
            type: ["number"],
            defaultVal: "12",
          },
          {
            name: "isDisabled",
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

export default Chip;
