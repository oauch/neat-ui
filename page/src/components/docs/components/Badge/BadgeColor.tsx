import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Badge>Badge</Badge>
      <Badge color={COLORS.SeaGreen}>Badge</Badge>
      <Badge color={COLORS.Khaki}>Badge</Badge>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Badge } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Badge>Badge</Badge>
       <Badge color={"#2E8B57"}>Badge</Badge>
      <Badge color={"#F0E68C"}>Badge</Badge>
    </div>
  );
};`;
