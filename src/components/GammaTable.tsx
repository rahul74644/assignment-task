import React, { useEffect, useState } from "react";
import { GammaTableProps } from "../types";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils/functions";
const GammaTable = ({ tableData }: GammaTableProps) => {
  //   console.log("data", tableData);

  return (
    <div className="table">
      <h1>Gamma Table </h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {tableData.map((item) => (
              <th>{item.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Gamma Mean</th>

            {tableData.map((item) => (
              <td>{calculateMean(item.gamma)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {tableData.map((item) => (
              <td>{calculateMedian(item.gamma)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {tableData.map((item) => (
              <td>{calculateMode(item.gamma)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaTable;
