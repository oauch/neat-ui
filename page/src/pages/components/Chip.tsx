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
            description: "Chip Size",
          },
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
          {
            name: "disabled",
            type: ["boolean"],
            description: "false",
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

export default Chip;
