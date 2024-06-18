import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip disabled={true}>Chip</Chip>
      <Chip disabled={false}>Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip isDisabled={true}>Chip</Chip>
      <Chip isDisabled={false}>Chip</Chip>
    </div>
  );
};

export default App;
`;
