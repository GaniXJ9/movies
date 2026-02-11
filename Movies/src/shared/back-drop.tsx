import { IMAGE_URL_1 } from "./constants/constant";

const BackDrop = ({ img }: { img: string }) => {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `url(${IMAGE_URL_1}${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    </div>
  );
};

export default BackDrop;
