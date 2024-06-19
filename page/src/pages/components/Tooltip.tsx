import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import TooltipPosition from "@/components/docs/components/Tooltip/TooltipPosition";

const Tooltip = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Tooltip"}
        description={
          "Tooltip is brief, informative message that appears when a user interacts with an element."
        }
        imports={["Tooltip"]}
        src={"Tooltip"}
        examples={[{ title: "position", component: TooltipPosition }]}
        props={[]}
      />
    </DocsLayout>
  );
};

export default Tooltip;
