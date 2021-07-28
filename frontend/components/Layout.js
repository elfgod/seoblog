import Header from './Header';
const Layout = ( {children} ) => {
    return (
        <>  
            <Header />
            <p>Header</p>
            {children}
            <footer>Foooter</footer>
        </>
    );
};
export default Layout;