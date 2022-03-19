import PropTypes from "prop-types"

export function Input ({defaultValue, backgroundColor, border = false, inputType = "text", borderRadius = 5}){

  const style = {
    backgroundColor,
    border: `${border === true ? 'solid black 1px': 'none'}`,
    borderRadius: `${borderRadius}px`,
  }

  return(
    <input 
      type={inputType} 
      style={style} 
      defaultValue={defaultValue} 
      //onChange={handleOnChange}
    /> 
  );
}

Input.propTypes = {
  border: PropTypes.bool,
  inputType: PropTypes.oneOf(["text", "number"]),
  defaultValue: PropTypes.string,
  borderRadius: PropTypes.number,
  // handleOnChange: PropTypes.func,
}

Input.defaultProps = {
  inputType: "text",
};
