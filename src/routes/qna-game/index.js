import React, { useEffect, useState } from "react";
import QnA from "./components/qna";
import { v4 as uuidv4 } from 'uuid';

import data from "./data";

const QnAGame = () => {
  const [AllQnA, setAllQnA] = useState([]);
  useEffect(() => {
    setAllQnA(data.map(qna => {
      return {...qna, id: uuidv4(), tags: []};
    }))
  }, []);

  return (
    <div className="qna-game">
      {
        AllQnA.map(qna => (
          <QnA key={qna.id} question={qna} />
        ))
      }
    </div>
  );
};


export default QnAGame;