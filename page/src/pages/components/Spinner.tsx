import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import SpinnerSize from "@/components/docs/components/Spinner/SpinnerSize";
import SpinnerSpeed from "@/components/docs/components/Spinner/SpinnerSpeed";

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
        ]}
        props={[
          {
            name: "size",
            type: ["xs", "sm", "md", "lg"],
            defaultVal: "md",
          },
          {
            name: "speed",
            type: ["number"],
            defaultVal: "1",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Spinner;
