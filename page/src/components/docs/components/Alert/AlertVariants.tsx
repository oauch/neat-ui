import { Alert } from "@oauch/neat-ui";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Alert
        status="success"
        variants="fill"
        style={{ width: "100%", fontSize: "1.8rem" }}
      >
        success
      </Alert>
      <Alert
        status="info"
        variants="outline"
        style={{ width: "100%", fontSize: "1.8rem" }}
      >
        info
      </Alert>
    </div>
  );
};

export default App;

App.code = `import { Alert } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Alert status="success" variants="fill">success</Alert>
      <Alert status="info" variants="outline">info</Alert>
    </div>
  );
};

export default App;`;
