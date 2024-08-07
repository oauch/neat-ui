import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip fs={12}>Chip</Chip>
      <Chip fs={20}>Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip fs={12}>Chip</Chip>
      <Chip fs={20}>Chip</Chip>
    </div>
  );
};

export default App;
`;
