/// <reference types="react-scripts" />


export type listProps = number[]

export type Data = {
  name: string;
  flavanoids: listProps;
  gamma: listProps;
};


export type FlavanoidTableProps = {
  tableData : Omit<Data, "gamma"> []
}

export type GammaTableProps = {
  tableData : Omit<Data, "flavanoids"> []
}

