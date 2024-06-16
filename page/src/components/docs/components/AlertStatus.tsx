import { Alert } from "@oauch/neat-ui";

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
