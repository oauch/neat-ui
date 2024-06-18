import { Button, Flex } from "@oauch/neat-ui";

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

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

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
