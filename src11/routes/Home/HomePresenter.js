import React from "react";
import { Button, DatePicker, message, version } from "antd";

export default () => {
  return (
    <>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </>
  );
};
