import "./index.css";

function Card({ product, handleModal }) {
    const { title, thumbnail, price } = product;

    return (
        <>
            <li
                className=" border border-black p-4 rounded-xl text-center "
                onClick={(e) => handleModal(product.id)}
            >
                <h2>{title}</h2>
                <img
                    src={thumbnail}
                    alt={title}
                    className=" w-full aspect-square"
                />
                <p>{price}$</p>
            </li>
        </>
    );
}

export default Card;
