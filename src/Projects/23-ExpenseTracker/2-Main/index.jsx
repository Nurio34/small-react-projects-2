import React from "react";
import Balance from "../Components/Balance";
import Chart from "../Components/Chart";
import Summary from "../Components/Summary";

function index() {
    return (
        <div>
            <div className="md:flex">
                <Balance />
                <Chart />
            </div>
            <Summary />
        </div>
    );
}

export default index;
