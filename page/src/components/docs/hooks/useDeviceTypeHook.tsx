import Text from "@/components/common/Text";
import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { COLORS } from "@/styles/colors";
import { useDeviceType } from "@oauch/neat-ui";

const App = () => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <ComponentWrapper
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {isMobile && (
        <Text fs={2} fw={800} color={COLORS.SeaGreen}>
          Mobile
        </Text>
      )}
      {isTablet && (
        <Text fs={2} fw={800} color={COLORS.SeaGreen}>
          Tablet
        </Text>
      )}
      {!isMobile && !isTablet && (
        <Text fs={2} fw={800} color={COLORS.SeaGreen}>
          PC
        </Text>
      )}
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { useDeviceType } from "@oauch/neat-ui";

const App = () => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <div>
      {isMobile && <p>Mobile</p>}
      {isTablet && <p>Tablet</p>}
      {!isMobile && !isTablet && <Text>PC</Text>}
    </div>
  );
};

export default App;
`;
