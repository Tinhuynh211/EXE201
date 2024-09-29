import { formatQuantity } from "@/utils/format";

type PropertyDetailsProps = {
  details: {
    guests: number;
  };
};

function PropertyDetails({ details: { guests } }: PropertyDetailsProps) {
  return (
    <p className="text-md font-light">
      <span>{formatQuantity(guests, "guest")} &middot;</span>
    </p>
  );
}
export default PropertyDetails;
