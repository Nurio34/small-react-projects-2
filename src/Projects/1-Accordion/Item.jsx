import { memo } from "react";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import "./index.css";

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
            <p className=" pointer-events-none flex items-center gap-2">
                {!multipleSelection ? (
                    <span>
                        {showAnswer == question.id ? (
                            <FaCaretSquareUp />
                        ) : (
                            <FaCaretSquareDown />
                        )}
                    </span>
                ) : (
                    <span>
                        {showMultiAnswer.includes(question.id) ? (
                            <FaCaretSquareUp />
                        ) : (
                            <FaCaretSquareDown />
                        )}
                    </span>
                )}

                {question.question}
            </p>

            {!multipleSelection
                ? showAnswer == question.id && (
                      <p className="pointer-events-none grid grid-cols-[auto,auto] gap-2 ml-4">
                          <FaCircleInfo className="text-blue-400  mt-1" />
                          {question.answer}
                      </p>
                  )
                : showMultiAnswer.includes(question.id) && (
                      <p className=" pointer-events-none grid grid-cols-[auto,auto] gap-2 ml-4">
                          <FaCircleInfo className="text-blue-400  mt-1" />
                          {question.answer}
                      </p>
                  )}
        </button>
    );
}

export default memo(Item);
