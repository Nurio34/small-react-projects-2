function Screen({ isHex, color }) {
    return (
        <div
            className={`h-full grid place-content-center`}
            style={{ backgroundColor: color }}
        >
            <div className="p-4 text-center font-extrabold bg-white text-3xl grid gap-8">
                <p>{isHex ? "HEX Color" : "RGB Color"}</p>
                <p>{color}</p>
            </div>
        </div>
    );
}

export default Screen;
