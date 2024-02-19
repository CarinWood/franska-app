import "./verbCard.css";
import { useDrag } from "react-dnd";

const VerbCard = ({ id, verb }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "word",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} className={isDragging ? "verb-card disappear" : "verb-card"}>
      <p>{verb}</p>
    </div>
  );
};

export default VerbCard;
