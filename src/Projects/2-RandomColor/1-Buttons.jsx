import Button from "../../Components/Button";

function Buttons({ createOnHex, createOnRgb, createRandomClr }) {
    return (
        <div className=" flex gap-4">
            <Button
                value={"Create Hex Color"}
                color={"white"}
                bgClr={"blue"}
                fn={createOnHex}
            />
            <Button
                value={"Create Rgb Color"}
                color={"white"}
                bgClr={"green"}
                fn={createOnRgb}
            />
            <Button
                value={"Generate Random Color"}
                color={"black"}
                bgClr={"yellow"}
                fn={createRandomClr}
            />
        </div>
    );
}

export default Buttons;
