import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import AutoCompleteOptions from "@/components/docs/components/AutoComplete/AutoCompleteOptions";

const AutoComplete = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"AutoComplete"}
        description={
          "AutoComplete is a normal text input enhanced by a panel of suggested options."
        }
        imports={["AutoComplete"]}
        src={"AutoComplete"}
        examples={[{ title: "options", component: AutoCompleteOptions }]}
        props={[
          {
            name: "options",
            type: ["Array"],
            description: "Data in array",
          },
          {
            name: "value",
            type: ["string"],
            description: "Input Value",
          },
          {
            name: "onChange",
            type: ["function"],
            description: "Input onChange",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default AutoComplete;
