import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { Chip, Text, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const DivRef = useRef(null);
  const isHover = useHover(DivRef);

  return (
    <ComponentWrapper
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Chip ref={DivRef}>Hover Here</Chip>
      {isHover && <Text fs={20}>Hi Friend</Text>}
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const DivRef = useRef(null);
  const isHover = useHover(DivRef);

  return (
    <div>
      <Chip ref={DivRef}>Hover Here</Chip>
      {isHover && <p>Hi Friend</p>}
    </div>
  );
};
`;
