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
            defaultVal: "md",
          },
          {
            name: "speed",
            type: ["number"],
            defaultVal: "1",
          },
          {
            name: "thickness",
            type: ["number"],
            defaultVal: "2",
          },
          {
            name: "color",
            type: ["string"],
            defaultVal: "#000",
          },
          {
            name: "emptyColor",
            type: ["string"],
            defaultVal: "none",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Spinner;
