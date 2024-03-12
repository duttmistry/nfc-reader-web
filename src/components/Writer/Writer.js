import React, { useContext } from "react";
import "./Writer.css";
import Save from "../SVGs/save";
import { ActionsContext } from "../../contexts/context";

const Writer = ({ writeFn }) => {
  const [message, setMessage] = React.useState("");
  const { actions, setActions } = useContext(ActionsContext);
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
