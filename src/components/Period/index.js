import React from "react";
import { Container, Select } from "./styles";

function period(props) {
  const { periods, onChangePeriod } = props;

  const handleSelectChange = (event) => {
    const currentPeriod = event.target.value;
    onChangePeriod(currentPeriod);
  };

  return (
    <Container>
      <Select onChange={handleSelectChange}>
        {periods.map((period, index) => {
          return (
            <option key={index} value={period}>
              {period}
            </option>
          );
        })}
      </Select>
    </Container>
  );
}

export default period;
