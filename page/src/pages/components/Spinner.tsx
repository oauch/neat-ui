import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import SpinnerColor from "@/components/docs/components/Spinner/SpinnerColor";
import SpinnerEmptyColor from "@/components/docs/components/Spinner/SpinnerEmptyColor";
import SpinnerSize from "@/components/docs/components/Spinner/SpinnerSize";
import SpinnerSpeed from "@/components/docs/components/Spinner/SpinnerSpeed";
import SpinnerThickness from "@/components/docs/components/Spinner/SpinnerThickness";

const Spinner = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Spinner"}
        description={
          "Spinner is a visual cue that an action is processing awaiting a course of change or a result."
        }
        imports={["Spinner"]}
        src={"Spinner"}
        examples={[
          { title: "size", component: SpinnerSize },
          { title: "speed", component: SpinnerSpeed },
          { title: "thickness", component: SpinnerThickness },
          { title: "color", component: SpinnerColor },
          { title: "emptyColor", component: SpinnerEmptyColor },
        ]}
        props={[
          {
            name: "size",
            type: ["sm", "md", "lg"],
            description: "Spinner Size",
          },
          {
            name: "speed",
            type: ["number"],
            description: "Spinner Speed",
          },
          {
            name: "thickness",
            type: ["number"],
            description: "Spinner Thickness (Empty Children)",
          },
          {
            name: "color",
            type: ["string"],
            description: "Spinner Color (Empty Children)",
          },
          {
            name: "emptyColor",
            type: ["string"],
            description: "Spinner Empty Color (Empty Children)",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Spinner;
