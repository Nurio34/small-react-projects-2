function Main() {
    const arr = Array(100).fill("item");
    return (
        <ul className="p-4">
            {arr.map((item, ind) => {
                return <li key={ind}>item</li>;
            })}
        </ul>
    );
}

export default Main;
