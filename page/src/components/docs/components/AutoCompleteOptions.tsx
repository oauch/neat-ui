import { AutoComplete } from "@oauch/neat-ui";
import { useState } from "react";
import Top100Films from "../../../../public/top100Films.json";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: "100%", zIndex: 5 }}>
      <AutoComplete options={Top100Films} value={value} onChange={setValue} />
    </div>
  );
};

export default App;

App.code = `import { AutoComplete } from "@oauch/neat-ui";
import { useState } from "react";
import Top100Films from "../../../../public/top100Films.json";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <AutoComplete options={Top100Films} />
    </div>
  );
};

export default App;`;
