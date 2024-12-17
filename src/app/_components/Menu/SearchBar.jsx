import SearchIcon from "@/app/_icons/SearchIcon";

const SearchBar = () => {
    return (
        <div className="flex justify-start items-center bg-[color:var(--BG-SECONDARY)] mt-8 rounded-xl px-4 py-2">
            <SearchIcon className="text-[color:var(--FT-SECONDARY)] text-xl mr-1"/>
            <input className="bg-inherit w-full outline-none placeholder-[color:var(--FT-SECONDARY)] text-sm" type="text" placeholder="Search..."/>
        </div>
    );
}

export default SearchBar;