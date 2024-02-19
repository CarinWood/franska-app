import { useState } from "react";
import VerbCard from "../components/verbCard/VerbCard";
import "../styles/verb.css";
import { useDrop } from "react-dnd";

export const Verb = () => {
  const [table, setTable] = useState([]);
  const [verbList, setVerbList] = useState([
    {
      id: 1,
      verb: "'ai",
    },
    {
      id: 2,
      verb: "as",
    },
    {
      id: 3,
      verb: "a",
    },
  ]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWordToBoard = (id) => {
    const tableList = verbList.filter((verb) => id === verb.id);
    setTable(table => [...table, tableList[0]]);
   
    setVerbList((prevVerbList) => {
        const newVerbList = prevVerbList.filter((verb) => id !== verb.id);
        return newVerbList;
      });
  };
  return (
    <>
      <div className="verb-table" ref={drop}>
        {table.map((verb) => {
          return <VerbCard id={verb.id} verb={verb.verb} key={verb.id} />;
        })}
      </div>
      <div className="verbs">
        {verbList.map((verb) => {
          return <VerbCard id={verb.id} verb={verb.verb} key={verb.id} />;
        })}
      </div>
    </>
  );
};
