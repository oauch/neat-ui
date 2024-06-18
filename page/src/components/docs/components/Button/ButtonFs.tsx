import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button fs={12}>Button</Button>
      <Button fs={20}>Button</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button fs={12}>Button</Button>
      <Button fs={20}>Button</Button>
    </div>
  );
};

export default App;
`;
