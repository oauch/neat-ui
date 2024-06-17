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
      <Alert status="success" style={{ width: "100%", fontSize: "1.8rem" }}>
        success
      </Alert>
      <Alert status="info" style={{ width: "100%", fontSize: "1.8rem" }}>
        info
      </Alert>
      <Alert status="warning" style={{ width: "100%", fontSize: "1.8rem" }}>
        warning
      </Alert>
      <Alert status="error" style={{ width: "100%", fontSize: "1.8rem" }}>
        error
      </Alert>
    </div>
  );
};

export default App;

App.code = `import { Alert } from "@oauch/neat-ui";

const App = () => {
  return (
    <div>
      <Alert status="success">success</Alert>
      <Alert status="info">info</Alert>
      <Alert status="warning">warning</Alert>
      <Alert status="error">error</Alert>
    </div>
  );
};

export default App;`;
