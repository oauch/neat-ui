import Text from "@/components/common/Text";
import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { useMediaQuery } from "@oauch/neat-ui";
import { useEffect, useState } from "react";

const App = () => {
  const [deviceType, setDeviceType] = useState("");
  const isDeskTop = useMediaQuery("(min-width: 1400px)");
  const isTablet = useMediaQuery("(min-width: 767px)");
  const isMobile = useMediaQuery("(min-width: 479px)");

  useEffect(() => {
    if (isDeskTop) {
      setDeviceType("DeskTop");
    } else if (isTablet) {
      setDeviceType("Tablet");
    } else if (isMobile) {
      setDeviceType("Mobile");
    }
  }, [isDeskTop, isTablet, isMobile]);

  return (
    <ComponentWrapper
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      {deviceType && (
        <Text fs={2} fw={800}>
          {deviceType}
        </Text>
      )}
    </ComponentWrapper>
  );
};

export default App;

App.code = `import Text from "@/components/common/Text";
import { Chip, useHover } from "@oauch/neat-ui";
import { useRef } from "react";

const App = () => {
  const [deviceType, setDeviceType] = useState("");
  const isDeskTop = useMediaQuery("(min-width: 1400px)");
  const isTablet = useMediaQuery("(min-width: 767px)");
  const isMobile = useMediaQuery("(min-width: 479px)");

  useEffect(() => {
    if (isDeskTop) {
      setDeviceType("DeskTop");
    } else if (isTablet) {
      setDeviceType("Tablet");
    } else if (isMobile) {
      setDeviceType("Mobile");
    }
  }, [isDeskTop, isTablet, isMobile]);

  return (
    <div>
      {deviceType && <Text>{deviceType}</Text>}
    </div>
  );
};
`;
