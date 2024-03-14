import React, { useContext } from "react";
import "./Writer.css";
import Save from "../SVGs/save";
import { ActionsContext } from "../../contexts/context";
import { useFormik } from "formik";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const Writer = ({ writeFn }) => {
  const [message, setMessage] = React.useState("");
  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      message: "",
      type: "text",
    },
    onSubmit: () => {
      setMessage(values);
      // alert("values: ", values);
      // console.log("message: ", message);
      // e.preventDefaultuseFormik();
      writeFn(values);
      setMessage("");
      setActions({
        scan: "scanned",
        write: message,
      });
    },
  });
  const { setActions } = useContext(ActionsContext);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="writer-container">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="text"
              name="type"
            >
              <FormControlLabel
                // value={values?.type}
                value="text"
                control={<Radio />}
                onChange={handleChange}
                label="Text"
                name="type"
              />
              <FormControlLabel
                // value={values?.type}
                // value={values?.type}
                value="url"
                control={<Radio />}
                label="Url"
                name="type"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            type="text"
            placeholder="Enter Message..."
            name="message"
            // value={message?.message}
            onInput={(e) => {
              setValues({ message: e.target.value, type: values?.type });
            }}
          />
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
