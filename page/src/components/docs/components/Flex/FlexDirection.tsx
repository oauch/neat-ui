import { Button, Flex } from "@oauch/neat-ui";

const App = () => {
  return (
    <>
      <Flex direction="row">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="row-reverse">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="column">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="column-reverse">
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
      <Flex direction="row">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="row-reverse">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="column">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
      <Flex direction="column-reverse">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Flex>
    </>
  );
};

export default App;
`;
