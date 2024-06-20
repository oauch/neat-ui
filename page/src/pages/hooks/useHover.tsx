import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useHoverHook from "@/components/docs/hooks/useHoverHook";

const useHover = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useHover"}
        description={
          "useHover is allows you to track whether an element is being hovered over or not."
        }
        imports={["useHover"]}
        src={"useHover"}
        examples={[
          {
            title: "useHover",
            component: useHoverHook,
          },
        ]}
        props={[
          {
            name: "variable",
            type: ["boolean"],
            description: "hovered over or not boolean value",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useHover;
