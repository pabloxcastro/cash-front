import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Header() {
  return (
    <>
      <div id="headerTransaction" className="flex-row">
        <Button variant="warning">+</Button>
        <FormControl id="filtro" placeholder="Filtro" />
      </div>
    </>
  );
}
