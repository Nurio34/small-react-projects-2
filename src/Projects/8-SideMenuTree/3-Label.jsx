function Label({ data }) {
    const treeFn = () => {
        const label = data.children?.map((item, ind) => {
            return item;
        });

        const recrusion = (param) => {
            if (param) {
                const mapped = param.map((item, ind) => {
                    if (item.children) {
                        recrusion(item.children);
                    }
                    return item;
                });
                console.log(mapped);
            }
        };

        recrusion(label);

        // console.log(label);
    };

    treeFn();

    return <div></div>;
}

export default Label;
