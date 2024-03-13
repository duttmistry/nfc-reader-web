import React, { useEffect, useState } from "react";

const GetAllData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  });

  async function getData() {
    const ndef = new window.NDEFReader();
    await ndef.scan();
    ndef.onreading = async (event) => {
      const decoder = new TextDecoder();
      for (const record of event.message.records) {
        alert("Record type:  " + record.recordType);
        alert("MIME type:    " + record.mediaType);
        alert("=== data ===\n" + decoder.decode(record.data));
        const newData = [...data];
        newData?.push(decoder.decode(record.data));
        setData(newData);
      }
    };
  }

  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default GetAllData;