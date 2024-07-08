import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Button, Tooltip } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Tooltip position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip position="topLeft">
        <Button>TopLeft</Button>
      </Tooltip>
      <Tooltip position="topRight">
        <Button>TopRight</Button>
      </Tooltip>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Tooltip size={"sm"} />
      <Tooltip size={"md"} />
      <Tooltip size={"lg"} />
    </div>
  );
};

export default App;
`;
