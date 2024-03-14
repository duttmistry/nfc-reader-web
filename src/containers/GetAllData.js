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
      const allData = [];
      const decoder = new TextDecoder();
      for (const record of event.message.records) {
        // alert("Record type:  " + record.recordType);
        // alert("MIME type:    " + record.mediaType);
        alert("=== data ===\n" + decoder.decode(record.data));
        allData?.push(decoder.decode(record.data));
      }
      alert("allData: ", allData);
      setData(allData);
    };
  }

  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          {index + 1}. {item}
        </div>
      ))}
    </>
  );
};

export default GetAllData;
