import DocsContent from "@/components/docs/common/DocsContent";
import DocsLayout from "@/components/docs/common/DocsLayout";
import useWindowSizeHook from "@/components/docs/hooks/useWindowSizeHook";

const useWindowSize = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useWindowSize"}
        description={
          "useWindowSize is track the dimensions of the browser window"
        }
        imports={["useWindowSize"]}
        src={"useWindowSize"}
        examples={[
          {
            title: "useWindowSize",
            component: useWindowSizeHook,
          },
        ]}
        props={[
          {
            name: "width",
            type: ["number"],
            description: "width value",
          },
          {
            name: "height",
            type: ["number"],
            description: "height value",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useWindowSize;
