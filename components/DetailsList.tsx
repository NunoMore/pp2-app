import React from "react";
import { DataTable } from "react-native-paper";

const DetailsList = ({ data }: { data: object }) => {
  const headerValues = Object.keys(data);
  const rowValues = Object.values(data);

  return (
    <DataTable>
      {headerValues.map((value, i) => {
        const lowerCaseStringValue = value.toLocaleLowerCase();
        if (lowerCaseStringValue.includes("image")) return;
        let cell;
        switch (typeof rowValues[i]) {
          case "number":
            cell = (
              <DataTable.Cell key={"${i}-numeric"} numeric>
                {rowValues[i]}
              </DataTable.Cell>
            );
            break;
          case "string":
            if (lowerCaseStringValue.includes("pass"))
              rowValues[i] = "xxxxxxxxxxx";
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
            <DataTable.Title>{value}</DataTable.Title>
            {cell}
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default DetailsList;
