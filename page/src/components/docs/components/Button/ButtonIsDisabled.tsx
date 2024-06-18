import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button isDisabled={true}>Disabled</Button>
      <Button isDisabled={false}>Not Disabled</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button isDisabled={true}>Disabled</Button>
      <Button isDisabled={false}>Not Disabled</Button>
    </div>
  );
};

export default App;
`;
