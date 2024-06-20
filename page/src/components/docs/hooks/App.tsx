import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { useHover } from "@oauch/neat-ui";
import { useRef } from "react";

export const App = () => {
  const DivRef = useRef(null);
  const isHover = useHover(DivRef);

  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {isHover && <Text></Text>}
      <div ref={DivRef}>하이</div>
    </ComponentWrapper>
  );
};
