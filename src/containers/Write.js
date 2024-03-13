import React from "react";
import Writer from "../components/Writer/Writer";

const Write = () => {
  const onWrite = async (message) => {
    try {
      const ndef = new window.NDEFReader();
      // This line will avoid showing the native NFC UI reader
      await ndef.scan();
      if (message?.type === "url") {
        await ndef.write({ records: [{ recordType: "url", data: message }] });
      } else if (message?.type === "text") {
        await ndef.write({ records: [{ recordType: "text", data: message }] });
      }
      alert(`Value Saved!`);
    } catch (error) {
      alert(error);
    }
  };

  return <Writer writeFn={onWrite} />;
};

export default Write;
