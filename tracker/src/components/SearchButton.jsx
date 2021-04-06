export default function SearchButton({searchBar, query, setQuery}){
    return(
        <form onSubmit={searchBar}>
                <input 
                placeholder="Search Bar"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
                <input id="searching" type="submit" value="Search" />
          </form>
    );
}