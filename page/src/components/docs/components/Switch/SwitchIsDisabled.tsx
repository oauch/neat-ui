import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Switch } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Switch disabled={true} />
      <Switch disabled={false} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Switch disabled={true} />
      <Switch disabled={false} />
    </div>
  );
};

export default App;
`;
