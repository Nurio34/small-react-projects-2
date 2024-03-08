function index({ data }) {
    const { location, current } = data;
    const { condition, feelslike_c, wind_kph, humidity } = current;
    const { text, icon } = condition;

    const { name, localtime, country } = location;

    return (
        <section className="grid justify-items-center gap-4">
            <div>
                <div className="flex items-end gap-1">
                    <p className=" text-2xl font-bold">{name},</p>
                    <p className=" text-xl font-semibold">{country}</p>
                </div>
                <p className=" text-sm text-center">{localtime} </p>
            </div>

            <div className=" w-full flex justify-around">
                <div className=" grid">
                    <p className=" relative justify-self-center">
                        {feelslike_c}{" "}
                        <span
                            className=" absolute top-0 right-0 translate-x-full text-xs"
                            style={{ lineHeight: 0.7 }}
                        >
                            o
                        </span>{" "}
                    </p>
                    <p>{text}</p>
                </div>
                <img src={icon} alt="" />
            </div>
            <div className="flex justify-evenly w-full">
                <div className="grid justify-items-center">
                    <p>Wind Speed</p>
                    <p>{wind_kph} kph </p>
                </div>
                <div className="grid justify-items-center">
                    <p>Humidity</p>
                    <p>{humidity}</p>
                </div>
            </div>
        </section>
    );
}

export default index;
