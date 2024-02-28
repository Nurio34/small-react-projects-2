function Image({ data, trans }) {
    return (
        <img
            src={data?.download_url}
            alt=""
            className="block -z-10"
            style={{
                transition: "0.4s ease-in-out",
                transform: `translateX(${trans}px)`,
            }}
        />
    );
}

export default Image;
