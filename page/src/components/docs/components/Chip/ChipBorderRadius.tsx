import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip borderRadius="5">Chip</Chip>
      <Chip borderRadius="10">Chip</Chip>
      <Chip borderRadius="20">Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip borderRadius="5">Chip</Chip>
      <Chip borderRadius="10">Chip</Chip>
      <Chip borderRadius="20">Chip</Chip>
    </div>
  );
};

export default App;
`;
