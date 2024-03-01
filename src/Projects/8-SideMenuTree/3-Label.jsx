import { useEffect, useState } from "react";
import Child from "./5-Child";
import LabelButon from "./4-LabelButon";

function Label({ data }) {
    const treeFn = (Data) => {
        const recrusion = (Data) => {
            return (
                <div>
                    <LabelButon Data={Data} />
                    {Data.children && (
                        <div className={` pl-4 h-0 w-0 overflow-hidden`}>
                            {Data.children?.map((child, ind) => (
                                <Child
                                    key={child.label}
                                    child={child}
                                    recrusion={recrusion}
                                />
                            ))}
                        </div>
                    )}
                </div>
            );
        };
        return recrusion(Data);
    };

    return <div>{treeFn(data)}</div>;
}

export default Label;
