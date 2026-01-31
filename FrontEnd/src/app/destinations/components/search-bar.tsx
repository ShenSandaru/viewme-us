"use client";
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  handleImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearch,
  handleReset,
  handleImageUpload,
}) => {
  return (
    <div className="w-full max-w-[600px] mx-auto mb-5 px-5">
      <form className="flex items-center relative w-full bg-white border-2 border-[#28a745] rounded-[50px] px-4 py-2 shadow-[0_4px_6px_rgba(40,167,69,0.1)]" onSubmit={(e) => e.preventDefault()}>
        <button type="button" aria-label="Search destinations" className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center mx-2 mr-2 hover:[&>svg]:fill-[#218838]">
          <svg viewBox="0 0 24 24" width="20" height="20" className="fill-[#28a745] transition-[fill] duration-200">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <input
          type="text"
          className="flex-1 font-['Open_Sans'] text-base text-[#333333] bg-transparent border-none p-2 outline-none placeholder:text-[#999999] placeholder:text-sm focus:shadow-[0_0_0_3px_rgba(40,167,69,0.2)]"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && (
          <button type="button" aria-label="Clear search" className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center mx-2 ml-2 hover:[&>svg]:fill-[#218838]" onClick={handleReset}>
            <svg viewBox="0 0 24 24" width="20" height="20" className="fill-[#28a745] transition-[fill] duration-200">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
        {handleImageUpload && (
          <label htmlFor="image-upload" aria-label="Upload image for search" className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center mx-2 ml-2 hover:[&>svg]:fill-[#218838]">
            <svg viewBox="0 0 24 24" width="20" height="20" className="fill-[#28a745] transition-[fill] duration-200">
              <path d="M12 4c-1.11 0-2 .89-2 2h-1c-1.1 0-2 .9-2 2v1H6c-1.66 0-3 1.34-3 3v5a3 3 0 003 3h12a3 3 0 003-3v-5c0-1.66-1.34-3-3-3h-1V8c0-1.1-.9-2-2-2h-1c0-1.11-.89-2-2-2zm0 3a1 1 0 011 1h-2a1 1 0 011-1zm0 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
            </svg>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
