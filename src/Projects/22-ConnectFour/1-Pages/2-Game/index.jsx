import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../0-GlobalApp";
import GridPiece from "../../2-Components/GridPiece";
import PointerPiece from "../../2-Components/PointerPiece";
function index() {
    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const { settings } = useContext(GlobalContext);
    const { grid, columns, column, rows } = settings;

    //** ---------------------------------------------------------------- */
    //** ---------------------------------------------------------------- */

    const {
        setGridPosition,
        pointerStartingPosition,
        setPointerStartingPosition,
        setPointerPosition,
    } = useContext(GlobalContext);
    const Grid = useRef();

    useEffect(() => {
        if (Grid.current) {
            const rect = Grid.current.getBoundingClientRect();
            const top = rect.top;
            const left = rect.left;
            const paddingInline = parseInt(
                window.getComputedStyle(Grid.current).padding,
            );
            const gap = parseInt(window.getComputedStyle(Grid.current).gap);
            const width =
                (rect.width - paddingInline * 2 - gap * (column - 1)) / column;
            console.log();
            setGridPosition({ top, left, paddingInline, gap });

            setPointerStartingPosition((pre) => {
                return { ...pre, width: width };
            });
        }
    }, []);

    useEffect(() => {
        setPointerPosition(pointerStartingPosition);
    }, [pointerStartingPosition]);

    return (
        <div
            className="grid bg-blue-700 p-4  gap-1 max-w-[668px]"
            style={{
                gridTemplateColumns: `repeat(${column},1fr)`,
            }}
            ref={Grid}
        >
            {[...Array(grid)].map((_, ind) => {
                return (
                    <GridPiece
                        key={ind}
                        columns={columns}
                        ind={ind}
                        rows={rows}
                    />
                );
            })}
            <PointerPiece />
        </div>
    );
}

export default index;
