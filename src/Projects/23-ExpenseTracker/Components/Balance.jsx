import { useEffect, useState } from "react";
import { useGlobalContext } from "../0-GlobalApp";
import { goodLookingNum } from "../../../Functions/goodLookingNum";

function Balance() {
    const { transactions, Income, setIncome, Expense, setExpense } =
        useGlobalContext();

    let income = 0;
    let expense = 0;

    useEffect(() => {
        transactions.forEach((obj) => {
            if (obj.type === "income") {
                income = income + parseInt(obj.amount);
            }
        });
        setIncome(income);

        transactions.forEach((obj) => {
            if (obj.type === "expense") {
                expense = expense + parseInt(obj.amount);
            }
        });
        setExpense(expense);
    }, [transactions]);

    goodLookingNum(Income);

    return (
        <div
            className=" bg-blue-300 grid p-4 m-4 grow"
            style={{ fontVariant: "all-small-caps" }}
        >
            <div className=" justify-self-center">
                <h3 className=" font-bold">Total Income</h3>
                <p className=" font-semibold px-2">${goodLookingNum(Income)}</p>
            </div>
            <div className=" justify-self-center">
                <h3 className=" font-bold">Total Expense</h3>
                <p className=" font-semibold px-2">
                    ${goodLookingNum(Expense)}
                </p>
            </div>
            <div className=" justify-self-end">
                <h3 className=" font-bold">Balance</h3>
                <p className="px-2">{goodLookingNum(Income - Expense)}$</p>
            </div>
        </div>
    );
}

export default Balance;
