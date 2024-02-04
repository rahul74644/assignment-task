import { useEffect, useState } from "react";
import FlavanoidsTable from "./components/FlavanoidsTable";
import wineData from "./utils/wineData.json";
import { Data } from "./types";
import GammaTable from "./components/GammaTable";

function App() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    let groupData: {
      [index: number]: Data;
    } = {};

    wineData.forEach((item) => {
      const alcoholValue = item.Alcohol;

      const flavoidValue = Number(item.Flavanoids);

      const gammaValue = Number(
        (Number(item.Ash) * Number(item.Hue)) / Number(item.Magnesium)
      );

      if (!groupData[alcoholValue]) {
        groupData[alcoholValue] = {
          name: `Class ${alcoholValue}`,
          flavanoids: [flavoidValue],
          gamma: [gammaValue],
        };
      }

      groupData[alcoholValue].flavanoids.push(flavoidValue);

      groupData[alcoholValue].gamma.push(gammaValue);
    });

    setData(Object.values(groupData));
  }, []);

  return (
    <div>
      <FlavanoidsTable
        tableData={data.map(({ name, flavanoids }) => ({ name, flavanoids }))}
      />

      <GammaTable
        tableData={data.map(({ name, gamma }) => ({ name, gamma }))}
      />
    </div>
  );
}

export default App;
