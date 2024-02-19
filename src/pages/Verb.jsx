import { useState } from "react";
import VerbCard from "../components/verbCard/VerbCard";
import "../styles/verb.css";
import { useDrop } from "react-dnd";

export const Verb = () => {
  const [table, setTable] = useState([
    {
      id: 1,
      subject: "j'",
      person: "jag har: ",
      verb: "",
    },
  ]);
  const [verbList, setVerbList] = useState([
    {
      id: 1,
      verb: "ai",
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
    if (id !== 1) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable((prevTable) => {
      return prevTable.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            verb: selectedVerb ? selectedVerb.verb : "",
          };
        }
        return item;
      });
    });

    setVerbList((prevVerbList) => {
      return prevVerbList.filter((verb) => verb.id !== id);
    });
  };

  return (
    <>
      <div className="verb-table" ref={drop}>
        <h4 className="headline-text">Avoir</h4>
        {table.map((item) => {
          return (
            <div key={item.id} className="holder">
              <p className="person">{item.person}</p>
              <p className="subject">{item.subject}</p>
              <div className="verb-border">
              <p className="verb-item">{item.verb}</p>
              </div>
            </div>
          );
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
