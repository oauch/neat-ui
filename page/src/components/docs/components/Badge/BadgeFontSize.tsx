import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Badge>Badge</Badge>
      <Badge fs={15}>Badge</Badge>
      <Badge fs={20}>Badge</Badge>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Badge>Badge</Badge>
      <Badge fs={15}>Badge</Badge>
      <Badge fs={20}>Badge</Badge>
    </div>
  );
};`;
