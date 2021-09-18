import Card from '../Card/Card';


const CardList = ({ attractions }: any) => {

  return (
    <div>
      {attractions.map((attraction: any) => (
        <Card key={attraction.id} card={attraction} />
      ))}
    </div>
  );
}

export default CardList;