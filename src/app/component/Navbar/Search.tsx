import Image from "next/image";

const Search = ({ isSearchOpen, searchQuery, searchResults, searchInputRef, handleSearchChange, toggleSearch }:any) => (
    <div className="flex">
      {isSearchOpen ? (
        <div className="relative w-full" ref={searchInputRef}>
          <input
            type="text"
            className="border border-[#EEEEEE] bg-[#FFF7F4] text-[#1E1E1E] rounded-full py-2 px-4 w-full lg:w-[500px] pr-10 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
  
          {(searchResults.length > 0 && searchQuery.length > 1) && (
            <div className="absolute top-full mt-5 w-full lg:w-[500px] bg-[#FFF7F4] shadow-lg lg:px-5 lg:py-10 rounded-lg z-[99]">
              {searchResults.map((result:any) => (
                <div key={result.id} className="flex items-center p-2">
                  <div className="flex-shrink-0 border border-[#EEEEEE] p-2">
                    <Image
                      src={result.image}
                      width={50}
                      height={50}
                      alt={result.title}
                    />
                  </div>
                  <div className="ml-2 flex-grow">
                    <p className="text-sm text-gray-800">
                      {result.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/right-arrow.svg"
                      width={10}
                      height={10}
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
  
          <button
            className="absolute inset-y-0 right-0 px-4 flex items-center focus:outline-none"
            onClick={toggleSearch}
          >
            <Image
              src="/images/cross.svg"
              width={9}
              height={9}
              alt="Close"
            />
          </button>
        </div>
      ) : (
        <button
          className="flex items-center gap-1.5"
          onClick={toggleSearch}
        >
          <Image
            src="/images/search.svg"
            width={20}
            height={20}
            alt="Search"
          />
          <span>Search</span>
        </button>
      )}
    </div>
  );

export default Search;
