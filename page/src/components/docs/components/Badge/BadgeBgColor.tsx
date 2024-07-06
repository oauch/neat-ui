import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Badge>Badge</Badge>
      <Badge bgColor={COLORS.Red}>Badge</Badge>
      <Badge bgColor={COLORS.Blue}>Badge</Badge>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Badge>Badge</Badge>
      <Badge bgColor={"#FF0000"}>Badge</Badge>
      <Badge bgColor={"#0000FF"}>Badge</Badge>
    </div>
  );
};`;
