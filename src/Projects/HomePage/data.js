const flags = {
    showAnimation: false,
    showAccordion: false,
    showRandomColor: true,
    showReviewStars: false,
    showImageSlider: true,
    showLoadMore: false,
    showSideMenuTree: true,
    showQRCodeGenerator: false,
    showThemeChange: true,
    showScrollProgressBar: false,
    showTabs: true,
    showModal: false,
    showGithubUserFinder: true,
    showSearchAutoComplate: false,
    showTicTacToe: true,
};

export const Flags_ServiceCall = () => {
    const res = new Promise((res, rej) => {
        if (res) {
            res(flags);
        } else {
            rej("Rejected...");
        }
    });

    return res;
};
