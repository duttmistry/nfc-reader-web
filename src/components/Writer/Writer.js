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
          <label
            class="form-check-label"
            for="text"
            onClick={() => setMessage({ ...message, type: "text" })}
          >
            Text
          </label>
          <input class="form-check-input" type="radio" name="text" id="text" />
          <label
            class="form-check-label"
            for="url"
            onClick={() => setMessage({ ...message, type: "url" })}
          >
            Url
          </label>
          <input class="form-check-input" type="radio" name="url" id="url" />
          <input
            type="text"
            placeholder="Enter Message..."
            value={message?.message}
            onChange={(e) =>
              setMessage({ message: e.target.value, ...message })
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
