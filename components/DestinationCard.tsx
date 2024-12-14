import Image from "next/image";

interface DestinationCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const DestinationCard = ({ imageSrc, title, description }: DestinationCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <Image src={imageSrc} alt={title} width={300} height={200} />
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default DestinationCard;