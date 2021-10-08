import './FireDetail.css';

const FireDetil = (props) => {
  const {eventDetail} = props;
  return (
    <div className="modalContainer">
        <h2>{`ID: ${eventDetail.id}`}</h2>
        <p>{`Title: ${eventDetail.title}`}</p>
    </div>
  )
}

export default FireDetil;