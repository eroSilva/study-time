export interface CardProps {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  link?: {
    href: string;
    label: string;
  };
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={image?.src} alt={image?.alt} />
      <p>{description}</p>
      <a href={link?.href}>{link?.label}</a>
    </>
  );
};

export default Card;
