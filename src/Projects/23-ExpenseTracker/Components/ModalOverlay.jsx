import { useGlobalContext } from "../0-GlobalApp";

function ModalOverlay() {
    const { isModalOpen } = useGlobalContext();

    return (
        <>
            {isModalOpen && (
                <div className=" absolute top-0 left-0 w-screen h-screen bg-gray-300 opacity-50 z-10"></div>
            )}
        </>
    );
}

export default ModalOverlay;
