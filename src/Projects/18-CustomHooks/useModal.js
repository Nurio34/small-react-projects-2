import { useState } from "react";

export const useModal = (array) => {
    const [modal, setmodal] = useState(false);
    const [modalProduct, setmodalProduct] = useState({});

    const handleModal = (id) => {
        if (id == modalProduct.id && modal) {
            setmodal(false);
            return;
        }
        setmodal(true);
        setmodalProduct(array.filter((prod) => prod.id == id)[0]);
    };

    return { modal, modalProduct, handleModal };
};
