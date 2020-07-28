import React from "react";
import Form from "react-bootstrap/Form";

function period(props) {
  const { periods, onChangePeriod } = props;

  const handleSelectChange = (event) => {
    const currentPeriod = event.target.value;
    onChangePeriod(currentPeriod);
  };

  return (
    <div className="period">
      <Form.Control
        onChange={handleSelectChange}
        as="select"
        className="mr-sm-2"
        id="mes-select"
        custom
      >
        {periods.map((period, index) => {
          return (
            <option key={index} value={period}>
              {period}
            </option>
          );
        })}
      </Form.Control>
    </div>
  );
}

export default period;
