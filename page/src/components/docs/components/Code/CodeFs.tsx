import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Code } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Code>{"<div>Default Size</div>"}</Code>
      <Code fs={20}>{"<div>20px Size</div>"}</Code>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Code } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Code>{'<div>Default Size</div>'}</Code>
      <Code fs={20}>{'<div>20px Size</div>'}</Code>
    </div>
  );
};

export default App;
`;
