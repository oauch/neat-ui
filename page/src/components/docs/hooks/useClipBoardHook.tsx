import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Button, useClipBoard } from "@oauch/neat-ui";

const App = () => {
  const { copyValue, setCopyValue, onCopy, isCopy, setIsCopy } =
    useClipBoard("");

  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        style={{ width: "200px", border: "1px solid #000" }}
        value={copyValue}
        onChange={(e) => setCopyValue(e.target.value)}
      />
      <Button onClick={onCopy}>Copy</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Button, useClipBoard } from "@oauch/neat-ui";

const App = () => {
  const { copyValue, isCopy, onCopy, setCopyValue, setIsCopy } = useClipBoard("");
  return (
    <div>
      <input value={copyValue} onChange={(e) => setCopyValue(e.target.value)} />
      <Button onClick={onCopy}>Copy</Button>
    </div>
  );
};

export default App;
`;
