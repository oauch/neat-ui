import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner speed={2}>🐶</Spinner>
      <Spinner speed={4}>🐶</Spinner>
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
