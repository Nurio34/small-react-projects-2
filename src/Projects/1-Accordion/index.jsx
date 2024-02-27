import { useCallback, useState } from "react";
import Button from "../../Components/Button";
import Item from "./Item";
import faqData from "./data";

function index() {
    const [multipleSelection, setMultipleSelection] = useState(false);
    const [showAnswer, setShowAnswer] = useState(null);
    const [showMultiAnswer, setShowMultiAnswer] = useState([]);

    const handleClick = useCallback(() => {
        setMultipleSelection((preSt) => !preSt);
        setShowMultiAnswer([showAnswer]);
    }, []);

    const adjustAnswer = (id) => {
        switch (multipleSelection) {
            case false:
                showAnswer == id ? setShowAnswer(null) : setShowAnswer(id);
                break;

            case true:
                let copyArr = [...showMultiAnswer];

                if (!copyArr.includes(id)) {
                    copyArr.push(id);
                } else {
                    copyArr = copyArr.filter((num) => num != id);
                }

                setShowMultiAnswer(copyArr);
                setShowAnswer(id);
            default:
                break;
        }
    };
    return (
        <div className="grid justify-items-center gap-4 p-4 m-4 bg-gray-200">
            <Button
                value={
                    multipleSelection
                        ? "Disable Multiple Selection"
                        : "Enable Multiple Selection"
                }
                fn={handleClick}
            />
            <div className=" grid gap-4 min-w-full">
                {faqData.map((question) => {
                    return (
                        <Item
                            key={question.id}
                            question={question}
                            adjustAnswer={adjustAnswer}
                            multipleSelection={multipleSelection}
                            showAnswer={showAnswer}
                            showMultiAnswer={showMultiAnswer}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default index;
