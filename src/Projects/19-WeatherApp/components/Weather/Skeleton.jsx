function Skeleton() {
    return (
        <section className="grid justify-items-center gap-4">
            <div className=" w-[131.23px] h-[52px] ">
                <div className="flex items-end gap-1 w-[131.23px] h-[52px] skeleton">
                    <p className=" text-2xl font-bold"></p>
                    <p className=" text-xl font-semibold"></p>
                </div>
            </div>

            <div className="flex justify-around w-full h-[64px]">
                <div className=" grid w-[85.27px] h-[64px] skeleton">
                    <p className=" relative justify-self-center"></p>
                    <p></p>
                </div>
                <div className="w-[64px] h-[64px] skeleton"></div>
            </div>
            <div className="flex justify-evenly w-full h-[48px]">
                <div className="grid justify-items-center w-[85.75px] h-[48px] skeleton">
                    <p></p>
                    <p></p>
                </div>
                <div className="grid justify-items-center w-[64.53px] h-[48px] skeleton">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </section>
    );
}

export default Skeleton;
