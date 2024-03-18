import ReactApexChart from "react-apexcharts";
import { useGlobalContext } from "../0-GlobalApp";

function Chart() {
    const { Income, Expense } = useGlobalContext();

    const options = {
        chart: {},
        colors: ["#008000", "#ff0000"],
        labels: ["Income", "Expense"],
    };

    return (
        <div className="grow bg-[rgba(100,32,231,0.3)] py-4 m-4">
            <ReactApexChart
                options={options}
                series={[Income, Expense]}
                type="pie"
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}

export default Chart;
