import React, { useCallback, useContext, useEffect, useState } from "react";
import Scanner from "../components/Scanner/Scanner";
import { ActionsContext } from "../contexts/context";

const Scan = () => {
  const [message, setMessage] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const { actions, setActions } = useContext(ActionsContext);

  const scan = useCallback(async () => {
    if ("NDEFReader" in window) {
      try {
        const ndef = new window.NDEFReader();
        await ndef.scan();

        alert("Scan started successfully.");
        ndef.onreadingerror = () => {
          alert("Cannot read data from the NFC tag. Try another one?");
        };

        ndef.onreading = (event) => {
          alert("NDEF message read.");
          onReading(event);
          setActions({
            scan: "scanned",
            write: null,
          });
        };
      } catch (error) {
        alert(`Error! Scan failed to start: ${error}.`);
        setActions(null);
      }
    }
  }, [setActions]);

  const onReading = ({ message, serialNumber }) => {
    setSerialNumber(serialNumber);
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          setMessage(textDecoder.decode(record.data));
          break;
        case "url":
          // Handle URL record with record data
          const urlDecoder = new TextDecoder(record.encoding);
          const url = urlDecoder.decode(record.data);
          alert(url);
          setMessage(url);
          window.location.href = url; // Redirect to the URL
          break;
        case "mime":
          // Handle MIME type record with record data
          const mimeDecoder = new TextDecoder(record.encoding);
          const mimeType = record.mediaType;
          const content = mimeDecoder.decode(record.data);
          // Do something with the content based on the MIME type
          break;
        // Add cases for other record types as needed
        default:
          // Handle other record types with record data
          const dataDecoder = new TextDecoder(record.encoding);
          const rawData = dataDecoder.decode(record.data);
        // Do something with the raw data

        // TODO: Handle other records with record data.
      }
    }
  };

  useEffect(() => {
    scan();
  }, [scan]);

  return (
    <>
      {actions.scan === "scanned" ? (
        <div>
          <p>Serial Number: {serialNumber}</p>
          <p>Message: {message}</p>
        </div>
      ) : (
        <Scanner status={actions.scan}></Scanner>
      )}
    </>
  );
};

export default Scan;
