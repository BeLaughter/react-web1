function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="imageofdp" className="image" />
      <p> NAME: {props.name} </p>
      <p> EMAIL: {props.email} </p>
    </div>
  );
}

export default Card;
