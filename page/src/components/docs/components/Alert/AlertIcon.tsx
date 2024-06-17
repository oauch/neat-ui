import { Alert } from "@oauch/neat-ui";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <Alert customIcon="💻" style={{ width: "100%", fontSize: "1.8rem" }}>
        Custom Icon
      </Alert>
    </div>
  );
};

export default App;

App.code = `import { Alert } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
       <Alert customIcon="💻">
        Custom Icon
      </Alert>
    </div>
  );
};

export default App;`;
