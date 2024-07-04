import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Spinner } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Spinner />
      <Spinner thickness={2} />
      <Spinner thickness={3} />
      <Spinner thickness={4} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Spinner />
      <Spinner thickness={2} />
      <Spinner thickness={3} />
      <Spinner thickness={4} />
    </div>
  );
};

export default App;
`;
