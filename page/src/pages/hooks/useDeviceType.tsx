import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useDeviceTypeHook from "@/components/docs/hooks/useDeviceTypeHook";

const useDeviceType = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useDeviceType"}
        description={
          "useDeviceType is detects the type of device the user is using and provides the appropriate UI for that device."
        }
        imports={["useDeviceType"]}
        src={"useDeviceType"}
        examples={[{ title: "useDeviceType", component: useDeviceTypeHook }]}
        props={[
          {
            name: "isMobile",
            type: ["boolean"],
            description: "Mobile Size boolean value",
          },
          {
            name: "isTablet",
            type: ["boolean"],
            description: "Tablet Size boolean value",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useDeviceType;
