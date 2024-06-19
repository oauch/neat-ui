import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import useClipBoardHook from "@/components/docs/hooks/useClipBoardHook";

const useClipBoard = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"useClipBoard"}
        description={"useClipBoard is handles copying content to clipboard."}
        imports={["useClipBoard"]}
        src={"useClipBoard"}
        examples={[{ title: "useClipBoard", component: useClipBoardHook }]}
        props={[
          {
            name: "copyValue",
            type: ["string"],
            description: "string value",
          },
          {
            name: "setCopyValue",
            type: ["Dispatch<SetStateAction<string>>"],
            description: "setState Value",
          },
          {
            name: "onCopy",
            type: ["() => void"],
            description: "copy function",
          },
          {
            name: "isCopy",
            type: ["boolean"],
            description: "copy / not copy boolean value",
          },
          {
            name: "setIsCopy",
            type: ["Dispatch<SetStateAction<boolean>>"],
            description: "setState boolean (isCopy)",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default useClipBoard;
