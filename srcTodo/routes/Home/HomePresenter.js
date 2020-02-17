import React from "react";
import Name from "../../components/Name";
import Weather from "../../components/Weather";
import ToDo from "../../components/ToDo";
import Time from "../../components/Time";

export default () => {
  return (
    <>
      <div>
        <Name />
        <Weather />
        <ToDo />
        <Time />
      </div>
    </>
  );
};
