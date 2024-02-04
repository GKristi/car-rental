import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <SlArrowUp size={20} label="Arrow up" color={"#121417"} />
      ) : (
        <SlArrowDown size={20} label="Arrow down" color={"#121417"} />
      )}
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
