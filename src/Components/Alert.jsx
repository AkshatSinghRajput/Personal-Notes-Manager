import React from "react";

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <center><strong>{props.alert.message}</strong></center>
    </div>
  );
}

export default Alert;
