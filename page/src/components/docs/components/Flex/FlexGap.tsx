import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Button, Flex } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Flex gap={10}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex gap={30}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <>
      <Flex gap={10}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex gap={30}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
    </>
  );
};

export default App;
`;
