import Popular from "../components/popular";
const Home = () => {
    return (
        <>
            <div className="h-[100vh] layout">
                <div className="layout absolute h-[100vh] w-full inset-0 layout hidden"></div>
                <Popular />
            </div>
        </>
    )
}

export default Home;