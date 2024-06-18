import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip>Chip</Chip>
      <Chip color={COLORS.Red}>Chip</Chip>
      <Chip color={COLORS.Blue}>Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip>Chip</Chip>
      <Chip color="#FF0000">Chip</Chip>
      <Chip color="#0000FF">Chip</Chip>
    </div>
  );
};

export default App;
`;
