import './errorShown.css';

import React from 'react';

const ErrorShown = () => {
  return (
    <div className="es01Container">
      <img
        src={require("../../../assets/images/error.png").default}
        alt="Bad Request"
        className="es01Image"
      />
      Uh Oh! Some Error Occured, please refresh the page.
    </div>
  );
};

export default ErrorShown;
