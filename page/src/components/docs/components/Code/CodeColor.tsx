import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Code } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Code>{"<div>Default Color</div>"}</Code>
      <Code color={COLORS.SeaGreen}>{"<div>Green Color</div>"}</Code>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Code } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Code>{'<div>Default Color</div>'}</Code>
      <Code color={'#2E8B57'}>{'<div>Green Color</div>'}</Code>
    </div>
  );
};

export default App;
`;
