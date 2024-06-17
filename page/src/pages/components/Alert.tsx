import AlertIcon from "@/components/docs/components/Alert/AlertIcon";
import AlertStatus from "@/components/docs/components/Alert/AlertStatus";
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
          { title: "Custom Icon", component: AlertIcon },
        ]}
      />
    </DocsLayout>
  );
};

export default Alert;
