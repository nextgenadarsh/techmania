import React from "react";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";
import { EMPTY_FUN } from "../../../../shared/utils/constant"

import "./index.css";

const QnA = ({ question, onQuestionSelect }) => {
  const handleOnQuestionSelect = questionId => {
    onQuestionSelect && onQuestionSelect(questionId);
  };

  return (
    <div className="tech-question">
      <div
        className="question-tags"
        onClick={() => handleOnQuestionSelect(question.id)}
      >
        <h3>
          {question.q}
        </h3>
        <div className="tags">
          {question.tags.map((tag, tagIndex) => (
            <sup className="tag" key={tagIndex}>
              #{tag}
            </sup>
          ))}
        </div>
      </div>
      <div className="answer">
        {question.a && <Markdown>{question.a}</Markdown>}
      </div>
    </div>
  );
};

QnA.propTypes = {
  question: PropTypes.object.isRequired,
  onQuestionSelect: PropTypes.func
};

QnA.defaultProps = {
  onQuestionSelect: EMPTY_FUN
}

export default QnA;