import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip size="sm">Chip</Chip>
      <Chip size="md">Chip</Chip>
      <Chip size="lg">Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip size="xs">Chip</Chip>
      <Chip size="sm">Chip</Chip>
      <Chip size="md">Chip</Chip>
      <Chip size="lg">Chip</Chip>
    </div>
  );
};

export default App;
`;
