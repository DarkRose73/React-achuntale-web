import React from "react";

const OpcionesRegion = ({ datos }) => {
  return (
    <>
      {datos.map((region) => (
        <option value={region.value} key={region.value}>
          {region.option}
        </option>
      ))}
    </>
  );
};

export default OpcionesRegion;
