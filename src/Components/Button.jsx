import "./index.css";
function Button({ value, color, bgClr, fn }) {
    return (
        <button
            className={`btn py-2 px-4 hover:bg-green-200 transition-all rounded-lg`}
            style={{ backgroundColor: bgClr, color: color }}
            onClick={(e) => {
                fn();

                //todo : add click effect
                e.target.classList.add("clickAnimation");
            }}
            onAnimationEnd={(e) => {
                e.target.classList.remove("hoverAnimation");
                e.target.classList.remove("clickAnimation");
            }}
            onMouseEnter={(e) => {
                //todo : add opacitiy to bgClr
                const color = window.getComputedStyle(e.target).backgroundColor;
                const rgba = color.split("(")[0].concat("a");
                const colorCode = color.split("(")[1].replace(")", ", 0.6");
                e.target.style.backgroundColor = rgba + "(" + colorCode;

                //todo : add hovered animation
                e.target.classList.add("hoverAnimation");
            }}
            onMouseLeave={(e) => {
                //todo : remove opacitiy from bgClr
                e.target.style.backgroundColor = bgClr;

                //todo : remove hovered animation
                e.target.classList.remove("hoverAnimation");
            }}
        >
            {value}
        </button>
    );
}

export default Button;
