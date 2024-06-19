import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useBooleanHook from "@/components/docs/hooks/useBooleanHook";

const useBoolean = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useBoolean"}
        description={
          "useBoolean is a custom hook used to manage a boolean value"
        }
        imports={["useBoolean"]}
        src={"useBoolean"}
        examples={[{ title: "useBoolean", component: useBooleanHook }]}
        props={[
          {
            name: "isBoolean",
            type: ["boolean"],
            description: "boolean state",
          },
          {
            name: "setTrue",
            type: ["boolean"],
            description: "true",
          },
          {
            name: "setFalse",
            type: ["boolean"],
            description: "false",
          },
          {
            name: "toggle",
            type: ["boolean"],
            description: "true and false",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useBoolean;
