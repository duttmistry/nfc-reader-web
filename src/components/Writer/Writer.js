import React, { useContext } from "react";
import "./Writer.css";
import Save from "../SVGs/save";
import { ActionsContext } from "../../contexts/context";

const Writer = ({ writeFn }) => {
  const [message, setMessage] = React.useState("");
  const { setActions } = useContext(ActionsContext);
  const onSave = (e) => {
    e.preventDefault();
    writeFn(message);
    setMessage("");
    setActions({
      scan: "scanned",
      write: message,
    });
  };

  return (
    <>
      <form onSubmit={onSave}>
        <div className="writer-container">
          <input
            type="text"
            placeholder="Enter Message..."
            value={message?.message}
            onChange={(e) =>
              setMessage({ message: e.target.value, type: "url" })
            }
          ></input>
          <input
            type="text"
            placeholder="Enter Url..."
            value={message?.message}
            onChange={(e) =>
              setMessage({ message: e.target.value, type: "text" })
            }
          ></input>
          <button className="btn" type="submit">
            <Save />
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Writer;
