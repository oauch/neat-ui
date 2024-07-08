import ComponentWrapper from "@/components/docs/common/ComponentWrapper";
import { AutoComplete } from "@oauch/neat-ui";
import { useState } from "react";
import Top100Films from "../../../../../public/top100Films.json";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <ComponentWrapper>
      <AutoComplete options={Top100Films} value={value} onChange={setValue} />
    </ComponentWrapper>
  );
};

export default App;

App.code = `import { AutoComplete } from "@oauch/neat-ui";
import { useState } from "react";
import Top100Films from "../../../../public/top100Films.json";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <AutoComplete options={Top100Films} />
  );
};

export default App;`;
