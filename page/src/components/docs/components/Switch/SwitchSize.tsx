import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Switch } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Switch size={"sm"} />
      <Switch size={"md"} />
      <Switch size={"lg"} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Switch size={"sm"} />
      <Switch size={"md"} />
      <Switch size={"lg"} />
    </div>
  );
};

export default App;
`;
