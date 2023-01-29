import React from 'react'

function Alert(props) {
    const caplitalize = (type) => {
        let lower = type.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {caplitalize(props.alert.type)} </strong>: {props.alert.msg}
        </div> // this is the special syntax if the alert is null then we will not further execute this piece of code otherwise we will execute  this piece of code.
    )
}

export default Alert
