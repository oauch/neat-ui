import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import AutoCompleteOptions from "@/components/docs/components/AutoComplete/AutoCompleteOptions";
import { useTranslation } from "react-i18next";

const AutoComplete = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"AutoComplete"}
        description={t("AutoComplete_Description")}
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
