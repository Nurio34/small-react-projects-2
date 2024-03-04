import { useCallback, useEffect, useState } from "react";
import { url } from "../13-Tabs/API_Url";
import ModalButtons from "./3-ModalButtons";
import Modal from "./4-Modal";

function Main() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [modal, setModal] = useState(false);

    const fetchData = useCallback(async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData((pre) => [...pre, ...data.filter((_, ind) => ind < 3)]);
    }, []);

    useEffect(() => {
        if (!data.length) fetchData();
    }, []);

    const openModal = (id) => {
        setCurrent(id);
        setModal(true);
    };

    const handleModal = () => {
        setModal(!modal);
    };

    return (
        <div>
            {data.length && <ModalButtons data={data} openModal={openModal} />}{" "}
            {data.length && modal && (
                <Modal
                    current={current}
                    data={data}
                    handleModal={handleModal}
                />
            )}
        </div>
    );
}

export default Main;
