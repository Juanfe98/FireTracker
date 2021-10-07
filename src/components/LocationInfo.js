const LocationInfo = ({info}) => {
  return (
    <div>
      <ul>
        <li> {info.id} </li>
        <li> {info.title} </li>
      </ul>
    </div>
  );
}

export default LocationInfo;
