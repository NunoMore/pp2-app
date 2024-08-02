import React, { useEffect, useState } from "react";
import { DataTable, TextInput } from "react-native-paper";

interface DetailsListProps {
  data: object;
  isEditing: boolean;
  onChange: React.SetStateAction<any> | undefined;
}

const DetailsList = ({ data, isEditing, onChange }: DetailsListProps) => {
  const [tempData, setTempData] = useState(data);
  const headerValues = Object.keys(tempData);
  const rowValues = Object.values(tempData);

  useEffect(() => {
    if (onChange && tempData !== data) {
      onChange(tempData);
    }
  }, [tempData]);

  return (
    <DataTable>
      {headerValues.map((label, i) => {
        const lowerCaseLabel = label.toLocaleLowerCase();
        if (lowerCaseLabel.includes("image")) return null;
        let cellContent;
        if (isEditing) {
          cellContent = (
            <DataTable.Cell>
              <TextInput
                key={`${i}-editable`}
                value={rowValues[i].toString()}
                onChangeText={(text) =>
                  setTempData({ ...tempData, [label]: text })
                }
              />
            </DataTable.Cell>
          );
        } else {
          switch (typeof rowValues[i]) {
            case "number":
              cellContent = (
                <DataTable.Cell key={`${i}-numeric`} numeric>
                  {rowValues[i]}
                </DataTable.Cell>
              );
              break;
            case "string":
              if (lowerCaseLabel.includes("pass")) rowValues[i] = "xxxxxxxxxxx";
            default:
              cellContent = (
                <DataTable.Cell key={`${i}-generic`}>
                  {rowValues[i]}
                </DataTable.Cell>
              );
              break;
          }
        }

        return (
          <DataTable.Row key={i}>
            <DataTable.Title>{label}</DataTable.Title>
            {cellContent}
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default DetailsList;
