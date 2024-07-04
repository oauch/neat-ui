import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Text, useWindowSize } from "@oauch/neat-ui";

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <ComponentWrapper
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};
`;
