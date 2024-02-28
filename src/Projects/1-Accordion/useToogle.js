import { useCallback, useEffect, useState } from "react";

export const useToogle = () => {
    const [multipleSelection, setMultipleSelection] = useState(false);
    const [showAnswer, setShowAnswer] = useState(null);
    const [showMultiAnswer, setShowMultiAnswer] = useState([]);

    useEffect(() => {
        if (!multipleSelection) setShowMultiAnswer([showAnswer]);
    }, [showAnswer]);

    const handleClick = useCallback(() => {
        setMultipleSelection((preSt) => !preSt);
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
                break;
            default:
                break;
        }
    };

    return {
        multipleSelection,
        showAnswer,
        showMultiAnswer,
        handleClick,
        adjustAnswer,
    };
};
