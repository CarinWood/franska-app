import { useEffect, useState } from "react";
import VerbCard from "../components/verbCard/VerbCard";
import "../styles/verb.css";
import { useDrop } from "react-dnd";
import VerbItem from "../components/verbItem/VerbItem";

export const Verb = () => {
  const [table, setTable] = useState([
    { id: 1, subject: "j'", person: "jag har:", verb: "" },
  ]);
  const [table2, setTable2] = useState([
    { id: 2, subject: "tu", person: "du har:", verb: "" },
  ]);
  const [table3, setTable3] = useState([
    { id: 3, subject: "il", person: "han har: ", verb: "" },
  ]);
  const [table4, setTable4] = useState([
    { id: 4, subject: "nous", person: "vi har: ", verb: "" },
  ]);
  const [table5, setTable5] = useState([
    { id: 5, subject: "vous", person: " ni har: ", verb: "" },
  ]);
  const [table6, setTable6] = useState([
    { id: 6, subject: "ils", person: "de har: ", verb: "" },
  ]);

  const [verbList, setVerbList] = useState([
    {
      id: 5,
      verb: "avez",
    },
   
    {
      id: 2,
      verb: "as",
    },
 
    {
      id: 1,
      verb: "ai",
    },
    {
      id: 6,
      verb: "ont",
    },
    {
      id: 4,
      verb: "avons",
    },
    {
      id: 3,
      verb: "a",
    },
   
   
  ]);



  verbList.sort(() => Math.random() - 0.5);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver2 }, drop2] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard2(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver3 }, drop3] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard3(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver4 }, drop4] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard4(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver5 }, drop5] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard5(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver6 }, drop6] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard6(item.id),
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

  const addWordToBoard2 = (id) => {
    if (id !== 2) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable2((prevTable) => {
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

  const addWordToBoard3 = (id) => {
    if (id !== 3) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable3((prevTable) => {
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
  const addWordToBoard4 = (id) => {
    if (id !== 4) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable4((prevTable) => {
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
  const addWordToBoard5 = (id) => {
    if (id !== 5) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable5((prevTable) => {
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

  const addWordToBoard6 = (id) => {
    if (id !== 6) return;
    const selectedVerb = verbList.find((verb) => verb.id === id);

    setTable6((prevTable) => {
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
      <div className="verb-table">
        <h4 className="headline-text">Avoir</h4>
        <div ref={drop} className="row">
          {table.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
        <div ref={drop2} className="row">
          {table2.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
        <div ref={drop3} className="row">
          {table3.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
        <div ref={drop4} className="row">
          {table4.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
        <div ref={drop5} className="row">
          {table5.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
        <div ref={drop6} className="row">
          {table6.map((item) => {
            return (
              <div key={item.id} className="holder">
                <VerbItem
                  person={item.person}
                  subject={item.subject}
                  verb={item.verb}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="verbs">
        {verbList.map((verb) => {
          return <VerbCard id={verb.id} verb={verb.verb} key={verb.id} />;
        })}
      </div>
    </>
  );
};
