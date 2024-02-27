function Button({ value, fn }) {
    return (
        <button
            className={`bg-green-500 py-2 px-4 hover:bg-green-200 transition-colors`}
            onClick={fn}
        >
            {value}
        </button>
    );
}

export default Button;
