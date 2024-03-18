import React from "react";
import { useGlobalContext } from "../0-GlobalApp";
import { goodLookingNum } from "../../../Functions/goodLookingNum";

function Summary() {
    const { transactions } = useGlobalContext();

    return (
        <div className="p-4 m-4 bg-[rgba(12,90,132,0.4)] flex justify-between gap-[5vw]">
            <div className="p-2 grow bg-[rgba(0,128,0,0.3)]">
                <h3
                    className=" font-semibold text-lg"
                    style={{ fontVariant: "all-small-caps" }}
                >
                    Incomes
                </h3>
                {transactions.map((obj, ind) => {
                    if (obj.type === "income") {
                        return (
                            <div
                                key={ind}
                                className="flex justify-between bg-[rgba(255,255,255,0.3)] p-1 rounded-sm"
                            >
                                <p className=" capitalize">{obj.description}</p>
                                <p>+${goodLookingNum(obj.amount)}</p>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="p-2 grow bg-[rgba(255,0,0,0.3)]">
                <h3
                    className=" font-semibold text-lg"
                    style={{ fontVariant: "all-small-caps" }}
                >
                    Expenses
                </h3>
                {transactions.map((obj, ind) => {
                    if (obj.type === "expense") {
                        return (
                            <div
                                key={ind}
                                className="flex justify-between bg-[rgba(255,255,255,0.3)] p-1 rounded-sm"
                            >
                                <p className=" capitalize">{obj.description}</p>
                                <p>-${goodLookingNum(obj.amount)}</p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Summary;
