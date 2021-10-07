import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, clicked }) => {
  return (
    <div className="location-marker" onClick={clicked}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
