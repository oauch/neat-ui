import ComponentWrapper from "@/components/docs/ComponentWrapper";
import { Avatar, AvatarGroup } from "@oauch/neat-ui";
import { LuLeafyGreen } from "react-icons/lu";

const App = () => {
  return (
    <ComponentWrapper>
      <AvatarGroup>
        <Avatar icon={<LuLeafyGreen size={40} />} />
        <Avatar />
      </AvatarGroup>
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { Avatar, AvatarGroup } from "@oauch/neat-ui";

const App = () => {
  return (
    <AvatarGroup>
      <Avatar icon={<LuLeafyGreen size={40} />} />
      <Avatar />   // default icon
    </AvatarGroup>
  );
};
`;
