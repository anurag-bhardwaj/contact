import React from 'react'
import PropTypes from 'prop-types'

const TextInputItems = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    type
}) => {
    return (
        <div>
            <div className="formchild">
                <label htmlFor={name}>{label}</label><br />
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
            </div><br />
        </div>
    )
}


TextInputItems.propTypes= {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
TextInputItems.defaultProps = {
    type:"text"
}


export default TextInputItems;
