import React from "react";
import { DataTable } from "react-native-paper";

const DetailsList = ({ data }: { data: object }) => {
  const headerValues = Object.keys(data);
  const rowValues = Object.values(data);

  return (
    <DataTable>
      {headerValues.map((v, i) => {
        if (v.toLocaleLowerCase().includes("image")) return;

        let cell;
        switch (typeof rowValues[i]) {
          case "number":
            cell = (
              <DataTable.Cell key={"${i}-numeric"} numeric>
                {rowValues[i]}
              </DataTable.Cell>
            );
            break;
          default:
            cell = (
              <DataTable.Cell key={"${i}-generic"}>
                {rowValues[i]}
              </DataTable.Cell>
            );
            break;
        }

        return (
          <DataTable.Row key={i}>
            <DataTable.Title>{v}</DataTable.Title>
            {cell}
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default DetailsList;
