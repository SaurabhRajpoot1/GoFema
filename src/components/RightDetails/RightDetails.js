import React, { useState } from "react";
import "./RightDetails.css"; // Import the CSS file for styling
import serach from "../../resources/serach.svg";
import { Switch } from "@chakra-ui/react";
import Greater from "../../resources/GreaterThan.svg";
import Less from "../../resources/Less.svg";
import DropDown from "../DropDown/DropDown";
import cloudwithSun from "../../resources/cloudwithSun.svg";
import profile from "../../resources/Profile.svg";
import Add from "../../resources/Add.svg";
import BackGroundForLocation from "../../resources/CloudImgeForLocationBackground.jpg";
const AddLocationForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [toggleValue, setToggleValue] = useState(false);
  const [DropDownClicked, setDropDownClicked] = useState(false);

  const handleToggleAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSaveForm = () => {
    // Handle form submission logic here
    // You can use the zipCode, name, and alerts states

    // Create a new location object with the entered data
    const newLocation = {
      name: name,
      alerts: [...alerts],
    };

    // Add the new location to the list of saved locations
    setSavedLocations([newLocation, ...savedLocations]);

    // Reset the form fields and options
    setZipCode("");
    setName("");
    setAlerts([]);
    setSelectAll(false);
    setShowDropdown(false);
    setShowForm(false);
  };

  return (
    <div className="add-location-container">
      <div>
        {savedLocations.map((location, index) => (
          <div key={index} className="saved-location">
            <div className="profile_div">
              <div>
                <img src={profile} alt="img" />
              </div>
              <div className="fs-14">{location.name}</div>
            </div>

            <div className="locationDetails">
              <div className="weatherLogo">
                <img src={cloudwithSun} alt="img" />
              </div>
              <div className="weatherdetails">
                <div className="fs-14">NOHO, New York</div>
                <div className="fs-22">34°F</div>
                <div className="fs-12">Clear with periodic clouds</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showForm && (
        <div className="formButton">
          <span className="add_icon">
            <img src={Add} alt="addImg" />
          </span>
          <div
            className="add-location-button fs-28"
            onClick={() => setShowForm(true)}
          >
            Add Location
          </div>
        </div>
      )}
      {showForm && (
        <div className="add-location-form">
          <h2>Add Location</h2>
          <div id="enter_zip">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="underline-input fs-14"
              placeholder="Enter zipcode"
            />
            <img src={serach} className="serach_icon" />
          </div>
          <div>
            <div className="add_name fs-22">Add Name</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="underline-input"
              placeholder="Type name"
            />
          </div>
          <div>
            <div className="Alert_container">
              <div className="fs-22">Alerts</div>
              <div className="Alert_select_all_div">
                {/* used chakra ui here */}
                <Switch size="md" />
                <div className="fs-16">Select all</div>
              </div>
              <div className="dropDownContainer">
                <DropDown titel="Flooding" />
                <DropDown titel="Winter Weather" />
                <DropDown titel="Avalanches" />
                <DropDown titel="Earthquakes" />
                <DropDown titel="Tsunamis" />
                <DropDown titel="Fire Weather" />
                <DropDown titel="Marine Weather" />
                <DropDown titel="Marine Weather" />
                <DropDown titel="Marine Weather" />
                <DropDown titel="Marine Weather" />
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleSaveForm}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddLocationForm;
