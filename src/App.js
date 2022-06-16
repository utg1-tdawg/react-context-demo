import { createContext, useContext } from "react";

const AppContext = createContext();
const ChildContext = createContext();

function App() {
  const appColor = "yellow";

  return (
    <AppContext.Provider value={appColor}>
      <div style={{ padding: 20 }}>
        <div>{`appColor from App: ${appColor}`}</div>
        <Child />
      </div>
    </AppContext.Provider>
  );
}

function Child() {
  const childColor = "green";

  return (
    <ChildContext.Provider value={childColor}>
      <AppContext.Consumer>
        {(appColor) => (
          <>
            <div>{`appColor from Child: ${appColor}`}</div>
            <GrandChild />
          </>
        )}
      </AppContext.Consumer>
    </ChildContext.Provider>
  );
}

function GrandChild() {
  return (
    <AppContext.Consumer>
      {(appColor) => (
        <ChildContext.Consumer>
          {(childColor) => (
            <>
              <div>{`childColor from GrandChild: ${childColor}`}</div>
              <div>{`appColor from GrandChild: ${appColor}`}</div>
            </>
          )}
        </ChildContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}

export default App;
