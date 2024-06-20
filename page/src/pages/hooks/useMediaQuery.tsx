import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useMediaQueryHook from "@/components/docs/hooks/useMediaQueryHook";

const useMediaQuery = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useMediaQuery"}
        description={"useMediaQuery is matches to a CSS media query"}
        imports={["useMediaQuery"]}
        src={"useMediaQuery"}
        examples={[
          {
            title: "useMediaQuery",
            component: useMediaQueryHook,
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

export default useMediaQuery;
