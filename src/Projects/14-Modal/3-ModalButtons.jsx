import Button from "../../Components/Button";

function ModalButtons({ data, openModal }) {
    return (
        <div className="flex gap-4 p-4 shadow-lg">
            {data.map((item, ind) => {
                return (
                    <Button
                        key={ind}
                        value={item.name.split(" ")[0]}
                        bgClr={"green"}
                        fn={() => openModal(item.id)}
                    />
                );
            })}
        </div>
    );
}

export default ModalButtons;
