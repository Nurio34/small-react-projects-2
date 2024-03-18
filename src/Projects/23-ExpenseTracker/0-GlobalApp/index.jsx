import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function index({ children }) {
    //! -------------------------------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timer, setTimer] = useState(false);
    const [count, setCount] = useState(0);

    const adjustTimer = () => {
        setTimer(!timer);
        if (!count) {
            setCount((pre) => pre + 1);
        }
    };

    useEffect(() => {
        if (count) {
            const time = setTimeout(() => {
                setIsModalOpen(!isModalOpen);
            }, 100);
            return () => clearTimeout(time);
        }
    }, [timer]);

    useEffect(() => {
        if (isModalOpen) {
            const focusableElements = document.querySelectorAll(
                "button,a,input,select,textarea",
            );
            focusableElements.forEach((el) => (el.tabIndex = -1));

            const modalElements = document.querySelectorAll(
                "#modal button,#modal a,#modal input,#modal select,#modal textarea",
            );
            modalElements.forEach((el) => (el.tabIndex = 0));

            document.body.style.overflow = "hidden";
        } else {
            const focusableElements = document.querySelectorAll(
                "button,a,input,select,textarea",
            );
            focusableElements.forEach((el) => (el.tabIndex = 0));

            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);

    //!----------------------------------------------------

    //!----------------------------------------------------
    const [formData, setFormData] = useState({});
    const [transactions, setTransactions] = useState([]);

    //** INITIAL LOCALSTORAGE START */
    useEffect(() => {
        if (localStorage.getItem("transactions") == null) {
            localStorage.setItem("transactions", JSON.stringify([]));
            console.log("ok");
        } else {
            setTransactions(JSON.parse(localStorage.getItem("transactions")));
        }
    }, []);
    //** --------------------------- */

    useEffect(() => {
        if (Object.keys(formData).length) {
            setTransactions((pre) => {
                return [...pre, formData];
            });

            //** ADJUST LOCALSTORAGE */
            const local = JSON.parse(localStorage.getItem("transactions"));
            local.push(formData);
            localStorage.setItem("transactions", JSON.stringify(local));
            console.log(local);
        }
    }, [formData]);

    //!----------------------------------------------------

    //!----------------------------------------------------

    const [Income, setIncome] = useState(0);
    const [Expense, setExpense] = useState(0);

    //!----------------------------------------------------

    return (
        <GlobalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                timer,
                adjustTimer,
                formData,
                setFormData,
                transactions,
                Income,
                setIncome,
                Expense,
                setExpense,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default index;
