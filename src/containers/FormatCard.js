import React, { useEffect } from "react";
// import Scanner from "../components/Scanner/Scanner";
// import { ActionsContext } from "../contexts/context";

const Format = () => {
  // const [message, setMessage] = useState("");
  // const [serialNumber, setSerialNumber] = useState("");
  // const { actions, setActions } = useContext(ActionsContext);
  useEffect(() => {
    onWrite();
  });
  async function onWrite() {
    const emptyRecord = {
      recordType: "empty",
    };
    const ndef = new window.NDEFReader();
    // This line will avoid showing the native NFC UI reader
    await ndef.scan();
    alert("Scan started successfully.");
    await ndef.write({ records: [emptyRecord] });
    alert("NFC tag data cleared successfully.");
    // console.log("actions: ", actions);
    // const ndef = new window.NDEFReader();
    // await ndef.scan();

    // ndef.onreadingerror = () => {
    //   alert("Cannot read data from the NFC tag. Try another one?");
    // };

    // Check if the browser supports Web NFC
    // ndef.onreading = (event) => {
    //   alert("NDEF message read.");
    //   onReading(event);
    //   setActions({
    //     scan: "scanned",
    //     write: null,
    //   });
    // };
  }

  // const onReading = ({ message, serialNumber }) => {
  //   setSerialNumber(serialNumber);
  //   for (const record of message.records) {
  //     alert(JSON.stringify(record));
  //     switch (record.recordType) {
  //       case "text":
  //         const textDecoder = new TextDecoder(record.encoding);
  //         setMessage(textDecoder.decode(record.data));
  //         break;
  //       case "url":
  //         // Handle URL record with record data
  //         const urlDecoder = new TextDecoder(record.encoding);
  //         const url = urlDecoder.decode(record.data);
  //         alert(url);
  //         setMessage(url);
  //         window.location.href = url; // Redirect to the URL
  //         break;
  //       case "mime":
  //         // Handle MIME type record with record data
  //         // const mimeDecoder = new TextDecoder(record.encoding);
  //         // const mimeType = record.mediaType;
  //         // const content = mimeDecoder.decode(record.data);
  //         // Do something with the content based on the MIME type
  //         break;
  //       // Add cases for other record types as needed
  //       default:
  //       // Handle other record types with record data
  //       // const dataDecoder = new TextDecoder(record.encoding);
  //       // const rawData = dataDecoder.decode(record.data);
  //       // Do something with the raw data

  //       // TODO: Handle other records with record data.
  //     }
  //   }
  //   if ("NDEFWriter" in window) {
  //     const writer = new window.NDEFWriter();

  //     // Create an empty NDEF message
  //     const message = [{ recordType: "empty" }];

  //     // Write the empty message to the NFC tag
  //     writer
  //       .write(message)
  //       .then(() => {
  //         alert("NFC tag data cleared successfully.");
  //         setActions({
  //           scan: null,
  //         });
  //       })
  //       .catch((error) => {
  //         alert("Failed to clear NFC tag data:", error);
  //       });
  //   } else {
  //     alert("Web NFC is not supported by this browser.");
  //   }
  // };
  return (
    <>
      {/* {actions.scan === "scanned" ? (
        <div>
          <p>Serial Number: {serialNumber}</p>
          <p>Message: {message}</p>
        </div>
      ) : (
        <Scanner status={actions.scan}></Scanner>
      )} */}
    </>
  );
};

export default Format;
