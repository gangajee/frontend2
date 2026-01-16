import { Search as SearchIcon } from "lucide-react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <input placeholder="여러 플랫폼의 상품을 한 번에 검색해보세요" />
      <button>검색</button>
    </div>
  );
}

export default Search;
