import React, { useEffect, useState } from "react";
import Square from "./Square";

function index({ adjustHeader }) {
    if (adjustHeader) {
        const Logo = "react";
        const Url = "https://react.dev/learn/tutorial-tic-tac-toe";
        const Header = {
            logo: Logo,
            url: Url,
        };
        adjustHeader(Header);
    }

    const [squares, setSquares] = useState([...Array(9)]);
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState("");
    const [history, setHistory] = useState([squares]);
    const [isRearranging, setIsRearranging] = useState(false);
    const [index, setIndex] = useState(null);
    const calcWinner = () => {
        const winStatus = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        winStatus.forEach(([a, b, c]) => {
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                setWinner(`Winner is ${isX ? "X" : "O"}`);
            }
        });
    };

    const handleSquare = (id) => {
        if (!squares[id] && !winner) {
            setSquares(
                squares.map((square, ind) =>
                    ind == id ? (isX ? "X" : "O") : square,
                ),
            );
        }
    };

    const restartGame = () => {
        setSquares([...Array(9)]);
        setIsX(true);
        setWinner("");
        setHistory([history[0]]);
    };

    const rearrangeGame = (ind) => {
        setSquares(history[ind]);
        setIsRearranging(true);
        setIndex(ind);
        setWinner("");
    };

    useEffect(() => {
        if (squares.every((square) => square === undefined)) {
            return;
        }
        calcWinner();
        const X_Arr = [];
        const Y_Arr = [];
        squares.forEach((square) => {
            if (square === "X") X_Arr.push(square);
            else if (square === "O") Y_Arr.push(square);
        });

        X_Arr.length === Y_Arr.length ? setIsX(true) : setIsX(false);

        if (!isRearranging) {
            setHistory((pre) => [...pre, squares]);
        }
    }, [squares]);

    useEffect(() => {
        if (isRearranging) {
            setHistory(
                history
                    .map((arr, ind) => (ind <= index ? arr : ""))
                    .filter((item) => item !== ""),
            );
        }

        const timeOut = setTimeout(() => {
            setIsRearranging(false);
        }, 100);
        return () => {
            clearTimeout(timeOut);
        };
    }, [isRearranging]);

    return (
        <div>
            <div
                className={`border-t border-l border-black grid w-full max-w-[768px] grid-cols-[repeat(3,106px)]`}
            >
                {squares.map((square, ind) => {
                    return (
                        <Square
                            key={ind}
                            id={ind}
                            square={square}
                            handleSquare={handleSquare}
                        />
                    );
                })}
            </div>
            {winner && (
                <div className=" p-4 my-4 bg-pink-300 flex justify-evenly">
                    <p>{winner}</p>
                    <button
                        className=" bg-white px-2 rounded-md "
                        onClick={restartGame}
                    >
                        Restart Game
                    </button>
                </div>
            )}
            <div className="grid gap-2 p-4">
                {history.map((arr, ind) => {
                    return (
                        ind < history.length - 1 && (
                            <button
                                key={ind}
                                className=" bg-gray-300"
                                onClick={(e) => rearrangeGame(ind)}
                            >
                                {ind == 0
                                    ? "Go to Start of the game"
                                    : `Go to Move : ${ind}`}
                            </button>
                        )
                    );
                })}
            </div>
        </div>
    );
}

export default index;
