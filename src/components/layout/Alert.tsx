import React from "react";
import { IAlert } from "../../types/interfaces";

interface IProps {
  alert: IAlert;
}

const Alert: React.FC<IProps> = ({ alert }) => {
  return (
    <>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" />
          {alert.message}
        </div>
      )}
    </>
  );
};

export default Alert;
