import Card from "./Card";
function CardList({ friends }) {
  const CardArray = friends.map((friend, i) => {
    return (
      <Card
        id={friends[i].id}
        name={friends[i].name}
        email={friends[i].email}
      />
    );
  });
  return <div>{CardArray}</div>;
}

export default CardList;
