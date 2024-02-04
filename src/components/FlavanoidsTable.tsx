import React, { useEffect, useState } from "react";
import { FlavanoidTableProps } from "../types";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils/functions";
const FlavanoidsTable = ({ tableData }: FlavanoidTableProps) => {
  //   console.log("data", tableData);

  return (
    <div className="table">
      <h1>Flavanoids Table </h1>
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
            <th>Flavanoids Mean</th>

            {tableData.map((item) => (
              <td>{calculateMean(item.flavanoids)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            {tableData.map((item) => (
              <td>{calculateMedian(item.flavanoids)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            {tableData.map((item) => (
              <td>{calculateMode(item.flavanoids)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsTable;
