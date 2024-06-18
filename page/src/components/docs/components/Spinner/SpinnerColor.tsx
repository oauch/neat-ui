import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner />
      <Spinner color={COLORS.SeaGreen} />
      <Spinner color={COLORS.Red} />
      <Spinner color={COLORS.Blue} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner />
      <Spinner color="#2E8B57" />
      <Spinner color="#FF0000" />
      <Spinner color="#0000FF" />
    </div>
  );
};

export default App;
`;
