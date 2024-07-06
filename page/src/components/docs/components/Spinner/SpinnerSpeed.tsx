import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner />
      <Spinner speed={2} />
      <Spinner speed={4} />
      <Spinner speed={6} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner />
      <Spinner speed={2} />
      <Spinner speed={4} />
      <Spinner speed={6} />
    </div>
  );
};

export default App;
`;
