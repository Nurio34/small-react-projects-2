import { useRef } from "react";

function Modal({ current, data, handleModal }) {
    const context = data.filter((item) => item.id == current)[0];
    console.log(context);
    const Modal_El = useRef();

    return (
        <div
            className="modal_modal_open grid text-center p-4 shadow-md capitalize relative"
            ref={Modal_El}
        >
            <button
                className=" absolute top-0 right-0 mx-2 z-10 bg-red-500 text-white w-6 rounded-full"
                onClick={(e) => {
                    Modal_El.current.classList.remove("modal_modal_open");
                    Modal_El.current.classList.add("modal_modal_close");

                    setTimeout(() => {
                        handleModal();
                    }, 200);
                }}
            >
                X
            </button>
            <h1 className=" bg-gray-500">{context.name}</h1>
            <p className=" bg-gray-200">{context.body}</p>
            <p className=" bg-gray-800 text-white">{context.email}</p>
        </div>
    );
}

export default Modal;
