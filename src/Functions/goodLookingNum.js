export const goodLookingNum = (num) => {
    let Num = num.toString().split("").reverse();
    Num = Num.map((num, ind) => {
        if (Num.length > 3) {
            if (ind % 3 === 0) {
                return num + ".";
            }
        }
        return num;
    })
        .reverse()
        .join("");
    Num = Num.slice(0, -1);
    return Num;
};
