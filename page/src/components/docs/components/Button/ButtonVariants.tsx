import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button variants="none">Button</Button>
      <Button variants="outline">Button</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button variants="none">Button</Button>
      <Button variants="outline">Button</Button>
    </div>
  );
};

export default App;
`;
