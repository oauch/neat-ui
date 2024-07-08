import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { Text, useMediaQuery } from "@oauch/neat-ui";
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
        <Text fs={20} fw={800} color={COLORS.SeaGreen}>
          {deviceType}
        </Text>
      )}
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Chip, useHover } from "@oauch/neat-ui";
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
      {deviceType && <p>{deviceType}</p>}
    </div>
  );
};
`;
