const Layout = ( {children} ) => {
    return (
        <>
            <p>Header</p>
            {children}
            <footer>Foooter</footer>
        </>
    );
};
export default Layout;