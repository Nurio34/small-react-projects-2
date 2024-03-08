import React from "react";

function index({ apiKey, resetApiKey, searchFn }) {
    return (
        <form onSubmit={searchFn} className="grid gap-2 p-4 relative">
            {!apiKey && (
                <input
                    className=" px-2 py-1 border border-black rounded-[100vw]"
                    type="text"
                    name="apiKey"
                    id="apiInp"
                    placeholder="Enter your Weather API key..."
                />
            )}
            <div className="flex gap-4">
                <input
                    className=" px-4 py-1 border border-black rounded-[100vw] grow"
                    type="search"
                    name="search"
                    id="searchInp"
                    placeholder="Search city..."
                />
                <input
                    className="py-1 px-2 bg-green-500 text-white font-semibold rounded-lg"
                    type="submit"
                    value="Search"
                />
            </div>
            {apiKey && (
                <button
                    className=" absolute top-0 right-0 bg-red-500 text-white font-semibold p-1 rounded-md text-xs"
                    onClick={resetApiKey}
                >
                    R
                </button>
            )}
        </form>
    );
}

export default index;
