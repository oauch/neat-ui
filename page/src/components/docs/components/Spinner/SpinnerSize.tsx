import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner size="xs">🐶</Spinner>
      <Spinner size="sm">🐶</Spinner>
      <Spinner size="md">🐶</Spinner>
      <Spinner size="lg">🐶</Spinner>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner size="xs">🐶</Spinner>
      <Spinner size="sm">🐶</Spinner>
      <Spinner size="md">🐶</Spinner>
      <Spinner size="lg">🐶</Spinner>
    </div>
  );
};

export default App;
`;
