import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Chip colorTheme="primary">Chip</Chip>
      <Chip colorTheme="black">Chip</Chip>
      <Chip colorTheme="white">Chip</Chip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Chip colorTheme="primary">Chip</Chip>
      <Chip colorTheme="black">Chip</Chip>
      <Chip colorTheme="white">Chip</Chip>
    </div>
  );
};

export default App;
`;
