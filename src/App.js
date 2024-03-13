import nfc from "./nfc.svg";
import "./App.css";
import Scan from "./containers/Scan";
import Write from "./containers/Write";
import { useState } from "react";
import { ActionsContext } from "./contexts/context";
import Format from "./containers/FormatCard";

function App() {
  const [actions, setActions] = useState(null);
  const { scan, write, format } = actions || {};

  const actionsValue = { actions, setActions };

  const onHandleAction = (actions) => {
    setActions({ ...actions });
  };

  return (
    <div className="App">
      <img src={nfc} className="App-logo" alt="logo" />
      <h1>NFC Tool</h1>
      <div className="App-container">
        <button
          onClick={() =>
            onHandleAction({
              scan: "scanning",
              write: null,
              format: null,
            })
          }
          className="btn"
        >
          Scan
        </button>
        <button
          onClick={() =>
            onHandleAction({
              scan: null,
              write: "writing",
              format: null,
            })
          }
          className="btn"
        >
          Write
        </button>
        <button
          onClick={() =>
            onHandleAction({
              scan: null,
              write: "writing",
              format: "formatting",
            })
          }
          className="btn"
        >
          Format Card
        </button>
      </div>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
        {write && <Write />}
        {format && <Format />}
      </ActionsContext.Provider>
    </div>
  );
}

export default App;
