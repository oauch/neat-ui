import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button>Button</Button>
      <Button color={COLORS.Red}>Button</Button>
      <Button color={COLORS.Blue}>Button</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button>Button</Button>
      <Button color="#FF0000">Button</Button>
      <Button color="#0000FF">Button</Button>
    </div>
  );
};

export default App;
`;
