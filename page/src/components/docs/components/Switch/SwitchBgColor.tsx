import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Switch } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Switch />
      <Switch bgColor={COLORS.Red} />
      <Switch bgColor={COLORS.Blue} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Switch />
      <Switch bgColor="#FF0000" />
      <Switch bgColor="#0000FF" />
    </div>
  );
};

export default App;
`;
