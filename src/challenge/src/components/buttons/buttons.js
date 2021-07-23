import React from 'react';
import './buttons.css';
import { DropDown, DropdownButton } from 'react-bootstrap';

const Buttons = () => {
  return (
    <div className='button'>
      <DropdownButton key='Success' id="dropdown-basic-button" title="Item">
        <Dropdown.Item as="button" onSelect={() => onChange("carrot")}>
          carrot
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("apple")}>
          apple
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("grapes")}>
          grapes
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("cake")}>
          cake
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("tv")}>
          tv
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("crackers")}>
          crackers
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("chips")}>
          chips
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("ham")}>
          ham
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("beef")}>
          beef
        </Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default Buttons;