import Text from "@/components/common/Text";
import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Chip, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const DivRef = useRef(null);
  const isHover = useHover(DivRef);

  return (
    <ComponentWrapper
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Chip ref={DivRef}>Hover Here</Chip>
      {isHover && <Text fs={2}>Hi Friend</Text>}
    </ComponentWrapper>
  );
};

export default App;

App.code = `import Text from "@/components/common/Text";
import { Chip, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const DivRef = useRef(null);
  const isHover = useHover(DivRef);

  return (
    <div>
      <Chip ref={DivRef}>Hover Here</Chip>
      {isHover && <Text fs={2}>Hi Friend</Text>}
    </div>
  );
};
`;
