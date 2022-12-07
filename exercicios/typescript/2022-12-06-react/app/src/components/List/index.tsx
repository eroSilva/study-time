import { CardProps } from "../Card";
import Card from "../Card";

interface ListProps {
  title: string;
  cards: CardProps[];
}

const List = ({ title, cards }: ListProps) => {
  return (
    <>
      <h1>{title}</h1>
      {cards.map(({ title, description, image, link }) => (
        <Card
          title={title}
          description={description}
          image={image}
          link={link}
        />
      ))}
    </>
  );
};

export default List;
