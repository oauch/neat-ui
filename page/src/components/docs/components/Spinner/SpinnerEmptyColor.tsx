import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner />
      <Spinner color={COLORS.SeaGreen} emptyColor={COLORS.HotPink} />
      <Spinner color={COLORS.Red} emptyColor={COLORS.Yellow} />
      <Spinner color={COLORS.Blue} emptyColor={COLORS.Coral} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner />
      <Spinner color="#2E8B57" emptyColor="#FF69B4" />
      <Spinner color="#FF0000" emptyColor="#FFFF00" />
      <Spinner color="#0000FF" emptyColor="#FF7F50" />
    </div>
  );
};

export default App;
`;
