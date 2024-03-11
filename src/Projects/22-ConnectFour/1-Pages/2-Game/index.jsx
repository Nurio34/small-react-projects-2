import { useContext } from "react";
import { GlobalContext } from "../../0-GlobalApp";
import GridPiece from "../../2-Components";
function index() {
    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const { settings } = useContext(GlobalContext);
    const { grid, columns, column } = settings;

    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    return (
        <div
            className="grid bg-blue-700"
            style={{
                gridTemplateColumns: `repeat(${column},minmax(50px,1fr))`,
            }}
        >
            {[...Array(grid)].map((_, ind) => {
                return <GridPiece key={ind} columns={columns} ind={ind} />;
            })}
        </div>
    );
}

export default index;
