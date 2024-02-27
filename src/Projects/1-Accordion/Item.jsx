import { memo } from "react";

function Item({
    question,
    adjustAnswer,
    multipleSelection,
    showAnswer,
    showMultiAnswer,
}) {
    return (
        <button
            className=" text-start bg-orange-800 text-white p-4"
            onClick={(e) => adjustAnswer(question.id)}
        >
            <p className=" pointer-events-none">
                <span>+</span>
                {question.question}
            </p>
            {!multipleSelection
                ? showAnswer == question.id && (
                      <p className=" pointer-events-none">{question.answer}</p>
                  )
                : showMultiAnswer.includes(question.id) && (
                      <p className=" pointer-events-none">{question.answer}</p>
                  )}
        </button>
    );
}

export default memo(Item);
