import nfc from "./nfc.svg";
import "./App.css";
import Scan from "./containers/Scan";
import Write from "./containers/Write";
import { useState } from "react";
import { ActionsContext } from "./contexts/context";
import Format from "./containers/FormatCard";
import GetAllData from "./containers/GetAllData";

function App() {
  const [actions, setActions] = useState(null);
  const [getAllData, setGetAllData] = useState(false);
  const [data, setData] = useState([]);

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
        <button onClick={() => setGetAllData(!getAllData)} className="btn">
          Get All Data
        </button>
      </div>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan setData={setData} />}
        {write && <Write setData={setData} />}
        {format && <Format setData={setData} />}
      </ActionsContext.Provider>
      {getAllData && <GetAllData setData={setData} data={data} />}
    </div>
  );
}

export default App;
