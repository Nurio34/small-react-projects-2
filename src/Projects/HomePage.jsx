function HomePage({ adjustHeader, adjustHeaderPosition }) {
    const Logo = "Small_Projects_2";
    const Url = "http://localhost:5173/";
    const Header = {
        logo: Logo,
        url: Url,
    };
    adjustHeader(Header);

    adjustHeaderPosition("");

    return <div>HomePage</div>;
}

export default HomePage;
