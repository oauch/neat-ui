import AlertIcon from "@/components/docs/components/Alert/AlertIcon";
import AlertStatus from "@/components/docs/components/Alert/AlertStatus";
import AlertVariants from "@/components/docs/components/Alert/AlertVariants";
import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";

const Alert = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Alert"}
        description={"Alert is used to display information on the screen."}
        imports={["Alert"]}
        src={"Alert"}
        examples={[
          { title: "Status", component: AlertStatus },
          { title: "Variants", component: AlertVariants },
          { title: "Custom Icon", component: AlertIcon },
        ]}
        props={[
          {
            name: "status",
            type: ["success", "info", "warning", "error"],
            defaultVal: "success",
          },
          {
            name: "variants",
            type: ["fille", "outline"],
            defaultVal: "fille",
          },
          {
            name: "customIcon",
            type: ["string"],
            defaultVal: "null",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Alert;
