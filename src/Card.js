function Card({ id, name, email }) {
  return (
    <div className="bg-light-yellow pa2 ma2 dib br3 grow shadow-5">
      <img
        alt="human"
        src={`https://robohash.org/set_set5/${id}?size=200x200`}
      />
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
