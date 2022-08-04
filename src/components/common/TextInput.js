import React from "react"
import PropTypes from "prop-types"

export default function TextInput(props){

    return(
        <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </div>
    )
}

TextInput.propTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
    }
    TextInput.defaultProps={
        error: " "
    }