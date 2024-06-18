import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button colorTheme="primary">Button</Button>
      <Button colorTheme="black">Button</Button>
      <Button colorTheme="white">Button</Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button colorTheme="primary">Button</Button>
      <Button colorTheme="black">Button</Button>
      <Button colorTheme="white">Button</Button>
    </div>
  );
};

export default App;
`;
