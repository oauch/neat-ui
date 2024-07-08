import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <ComponentWrapper style={{ display: "flex", gap: "10px" }}>
      <Button>Button</Button>
      <Button bgColor={COLORS.Black}>Button</Button>
      <Button bgColor={COLORS.White} color={COLORS.Black}>
        Button
      </Button>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Button } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Button>Button</Button>
      <Button bgColor={COLORS.Black}>Button</Button>
      <Button bgColor={COLORS.White} color={COLORS.Black}>
        Button
      </Button>
    </div>
  );
};

export default App;
`;
