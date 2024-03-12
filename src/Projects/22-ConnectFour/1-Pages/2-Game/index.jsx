import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../0-GlobalApp";
import GridPiece from "../../2-Components/GridPiece";
import PointerPiece from "../../2-Components/PointerPiece";
function index() {
    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const { settings } = useContext(GlobalContext);
    const { grid, columns, column } = settings;

    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const { setGridPosition, setPointerWidth } = useContext(GlobalContext);
    const Grid = useRef();

    useEffect(() => {
        if (Grid.current) {
            const rect = Grid.current.getBoundingClientRect();
            const top = rect.top;
            const left = rect.left;
            setGridPosition({ top, left });

            const width = rect.width / column;
            setPointerWidth(width);
        }
    }, []);

    return (
        <div
            className="grid bg-blue-700"
            style={{
                gridTemplateColumns: `repeat(${column},minmax(50px,1fr))`,
            }}
            ref={Grid}
        >
            {[...Array(grid)].map((_, ind) => {
                return <GridPiece key={ind} columns={columns} ind={ind} />;
            })}
            <PointerPiece />
        </div>
    );
}

export default index;
