import { useEffect, useRef } from "react";
import { useGlobalContext } from "../0-GlobalApp";
import { FaRegCircleXmark } from "react-icons/fa6";

function Modal() {
    const { isModalOpen, adjustTimer, setFormData } = useGlobalContext();
    const FirstInput = useRef();

    useEffect(() => {
        if (FirstInput.current) {
            FirstInput.current.focus();
        }
    }, [isModalOpen]);

    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData);
        setFormData(formObject);
        e.currentTarget.reset();
        FirstInput.current.focus();
    }

    return (
        <>
            {isModalOpen && (
                <dialog
                    className=" p-4 aspect-square absolute z-20
                                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                grid"
                    id="modal"
                    open
                >
                    <FaRegCircleXmark
                        className=" justify-self-end cursor-pointer "
                        onClick={adjustTimer}
                    />
                    <form
                        action="#"
                        className="grid gap-2"
                        onSubmit={submitForm}
                    >
                        <h2 className=" text-lg font-semibold">
                            Add New Transaction
                        </h2>
                        <label htmlFor="descInp" className="grid">
                            Description
                            <input
                                className=" border border-gray-400 rounded-sm py-1 px-2 outline-none"
                                type="text"
                                name="description"
                                id="descInp"
                                ref={FirstInput}
                            />
                        </label>
                        <label htmlFor="amoInp" className="grid">
                            Amount
                            <input
                                className=" border border-gray-400 rounded-sm py-1 px-2 outline-none"
                                type="number"
                                name="amount"
                                id="amoInp"
                            />
                        </label>
                        <div className="flex gap-4">
                            <label
                                htmlFor="incRad"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="radio"
                                    name="type"
                                    id="incRad"
                                    value="income"
                                />
                                Income
                            </label>
                            <label
                                htmlFor="expRad"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="radio"
                                    name="type"
                                    id="expRad"
                                    value="expense"
                                />
                                Expense
                            </label>
                        </div>
                        <div className="flex flex-row-reverse gap-4 justify-self-end">
                            <button
                                type="submit"
                                className=" py-1 px-2 bg-green-600 text-sm rounded-sm "
                                style={{ fontVariant: "all-small-caps" }}
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className=" py-1 px-2 bg-red-600 text-sm rounded-sm "
                                style={{ fontVariant: "all-small-caps" }}
                                onClick={adjustTimer}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </>
    );
}

export default Modal;
