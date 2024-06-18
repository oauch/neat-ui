import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Switch } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Switch size={"sm"}>d</Switch>
      <Switch size={"md"}>d</Switch>
      <Switch size={"lg"}>d</Switch>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner speed={2}>🐶</Spinner>
      <Spinner speed={6}>🐶</Spinner>
    </div>
  );
};

export default App;
`;
