import React from "react";
import Writer from "../components/Writer/Writer";

const Format = () => {
  const onWrite = async (message) => {
    try {
      //   if ("NDEFWriter" in window) {
      //     const writer = new window.NDEFWriter();

      // Create an empty NDEF message to overwrite existing data
      //     const emptyMessage = new window.NDEFMessage([]);

      //     // Write the empty message to the NFC tag
      //     writer
      //       .write(emptyMessage)
      //       .then(() => {
      //         console.log("NFC card data cleared successfully.");
      //       })
      //       .catch((error) => {
      //         console.error("Error clearing NFC card data:", error);
      //       });
      //   } else {
      //     console.error("Web NFC is not supported by this browser.");
      //   }
      const ndef = new window.NDEFReader();
      // This line will avoid showing the native NFC UI reader
      await ndef.scan();
      await ndef.write({ records: [] });
      alert(`Value Saved!`);
    } catch (error) {
      alert(error);
    }
  };

  return <Writer onWrite={onWrite} />;
};

export default Format;
