import React from "react";
import styled from "styled-components";
import dropdownArrow from "../../img/icons/dropdown-arrow.svg";


const Button = styled.button`
  display: block;
  position: relative;
  top: 3px;

  margin-left: 1em;

  background-color: transparent;
  border: none;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  transform: rotate(90deg);
`;

export default function DropdownButton(props) {
  return (
    <Button onClick={props.onClick}>
      <Icon src={dropdownArrow} alt="dropdown-arrow.svg" />
    </Button>
  )
}