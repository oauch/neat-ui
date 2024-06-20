import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";

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
        examples={[]}
        props={[]}
      />
    </DocsLayout>
  );
};

export default useWindowSize;
