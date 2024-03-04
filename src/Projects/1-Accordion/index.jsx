import Button from "../../Components/Button";
import Item from "./Item";
import faqData from "./data";
import { useToogle } from "./useToogle";

function index({ adjustHeader, adjustHeaderPosition }) {
    const Logo = "Accordion";
    const Url = "#";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    adjustHeaderPosition("");

    const {
        multipleSelection,
        showAnswer,
        showMultiAnswer,
        handleClick,
        adjustAnswer,
    } = useToogle();

    return (
        <div className="grid justify-items-center gap-4 p-4 m-4 bg-gray-200">
            <Button
                value={
                    multipleSelection
                        ? "Disable Multiple Selection"
                        : "Enable Multiple Selection"
                }
                color={"white"}
                bgClr={"red"}
                fn={handleClick}
            />
            <div className=" grid gap-4 min-w-full">
                {faqData.map((question) => {
                    return (
                        <Item
                            key={question.id}
                            question={question}
                            adjustAnswer={adjustAnswer}
                            multipleSelection={multipleSelection}
                            showAnswer={showAnswer}
                            showMultiAnswer={showMultiAnswer}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default index;
