import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import FlexDirection from "@/components/docs/components/Flex/FlexDirection";
import FlexGap from "@/components/docs/components/Flex/FlexGap";

const Flex = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Flex"}
        description={
          "Flex is Box with display set to flex and comes with helpful style shorthand."
        }
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
            defaultVal: "row",
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
            defaultVal: "normal",
          },
          {
            name: "align",
            type: ["start", "end", "center", "stretch", "baseline", "normal"],
            defaultVal: "normal",
          },
          {
            name: "wrap",
            type: ["nowrap", "end", "center", "stretch", "baseline", "normal"],
            defaultVal: "normal",
          },
          {
            name: "grow",
            type: ["number"],
            defaultVal: "null",
          },
          {
            name: "shrink",
            type: ["number"],
            defaultVal: "null",
          },
          {
            name: "gap",
            type: ["number"],
            defaultVal: "null",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Flex;
