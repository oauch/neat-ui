import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import ChipBgColor from "@/components/docs/components/Chip/ChipBgColor";
import ChipColor from "@/components/docs/components/Chip/ChipColor";
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
          { title: "font-size", component: ChipFontSize },
          { title: "bgColor", component: ChipBgColor },
          { title: "color", component: ChipColor },
          { title: "disabled", component: ChipDisabled },
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
            name: "bgColor",
            type: ["string"],
            defaultVal: "#2E8B57",
          },
          {
            name: "color",
            type: ["string"],
            defaultVal: "#000",
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

export default Chip;
