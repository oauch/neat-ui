import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip>Chip</Chip>
      <Chip bgColor={COLORS.Black}>Chip</Chip>
      <Chip bgColor={COLORS.White} color={COLORS.Black}>
        Chip
      </Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip>Chip</Chip>
      <Chip bgColor="#000">Chip</Chip>
      <Chip bgColor="#fff" color="#000">Chip</Chip>
    </div>
  );
};

export default App;
`;
