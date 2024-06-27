import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useDeviceTypeHook from "@/components/docs/hooks/useDeviceTypeHook";
import { useTranslation } from "react-i18next";

const useDeviceType = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"useDeviceType"}
        description={t("useDeviceType_Description")}
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
