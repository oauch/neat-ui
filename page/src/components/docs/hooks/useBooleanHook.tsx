import Text from "@/components/common/Text";
import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button, useBoolean } from "@oauch/neat-ui";

const App = () => {
  const { isBoolean, setTrue, setFalse, toggle, setIsBoolean } = useBoolean();
  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {isBoolean ? <Text fs={2}>Tada!</Text> : <Text fs={2}>Dada</Text>}
      <div style={{ display: "flex" }}>
        <Button onClick={setTrue}>True</Button>
        <Button onClick={setFalse}>False</Button>
        <Button onClick={toggle}>Toggle</Button>
      </div>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Button, useBoolean } from "@oauch/neat-ui";

const App = () => {
  const { isBoolean, setTrue, setFalse, toggle, setIsBoolean } = useBoolean();
  return (
    <div>
      {isBoolean ? <p>Tada!</p> : <p>Dada</p>}
      <Button onClick={setTrue}>True</Button>
      <Button onClick={setFalse}>False</Button>
      <Button onClick={toggle}>Toggle</Button>
    </div>
  );
};

export default App;
`;
