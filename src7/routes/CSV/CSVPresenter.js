import React from "react";
import CSVReader from "react-csv-reader";

const papaparseOptions = {
  header: false,
  delimiter: ",",
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

export default ({ handleDataUpload, loading, data }) => (
  <>
    <div className="container">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleDataUpload}
        parserOptions={papaparseOptions}
      />
      <p>and then open the console</p>
    </div>
    <>
      {loading ? "loading..." : data.map((e, idx) => <div key={idx}>{e}</div>)}{" "}
    </>
  </>
);
