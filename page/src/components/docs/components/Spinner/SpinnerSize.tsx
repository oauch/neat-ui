import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
};

export default App;
`;
