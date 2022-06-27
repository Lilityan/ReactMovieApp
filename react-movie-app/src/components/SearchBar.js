const SearchBar = () => {
    
    return (
        <form action="/" method="get" >
            <input
                type="text"
                id="header-search"
                name="s"
                style={{width: "400px", margin: "5px"}}
            />
            <button type="submit">Search</button>
        </form>)
};

export default SearchBar;