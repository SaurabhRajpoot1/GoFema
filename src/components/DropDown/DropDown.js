import React, { useState } from "react";
import Greater from "../../resources/GreaterThan.svg";
import Less from "../../resources/Less.svg";
import "./DropDown.css";
import { Switch } from "@chakra-ui/react";
function DropDown({ titel }) {
  const DropDownData = {
    flooding: [
      "Flood Warning",
      "Flood Watch",
      "Flood Advisory",
      "Flood Statement",
      "Flash Flood Watch",
      "Flash Flood Watch",
      "Flash Flood Watch",
      "Flash Flood Watch",
    ],
  };
  const [DropDownClicked, setDropDownClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleToggleAll = () => {
    setSelectAll(!selectAll);
  };
  const handleAlertToggle = (alert) => {
    const updatedAlerts = [...alerts];
    const alertIndex = updatedAlerts.indexOf(alert);

    if (alertIndex === -1) {
      updatedAlerts.push(alert);
    } else {
      updatedAlerts.splice(alertIndex, 1);
    }

    setAlerts(updatedAlerts);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <div className=" main_dropDownContainer fs-16">
          <div
            className="DropDown"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setDropDownClicked(!DropDownClicked);
            }}
          >
            <div>{titel}</div>
            <div>
              {!DropDownClicked ? <img src={Greater} /> : <img src={Less} />}
            </div>
          </div>
          {showDropdown && (
            <div className="dropdownToggls">
              {DropDownData.flooding.map((alert) => (
                <div className="dropDown_toggles_child" key={alert}>
                  <Switch size="md" />
                  <div>{alert}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropDown;
