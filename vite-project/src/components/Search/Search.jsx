import { Search as SearchIcon } from "lucide-react";
import "./Search.css";

function Search({ search, setSearch, setQuery }) {
  const handSearch = () => {
    setQuery(search);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handSearch();
    }
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search">
      <SearchIcon />
      <input
        placeholder="여러 플랫폼의 상품을 한 번에 검색해보세요"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={handSearch}>검색</button>
    </div>
  );
}

export default Search;
