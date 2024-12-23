"use client";
import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearch,
  handleReset,
  handleImageUpload,
}) => {
  return (
    <StyledContainer>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <button type="button" className="icon-button search-icon">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && (
          <button type="button" className="icon-button reset-icon" onClick={handleReset}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
        <label htmlFor="image-upload" className="icon-button camera-icon">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 4c-1.11 0-2 .89-2 2h-1c-1.1 0-2 .9-2 2v1H6c-1.66 0-3 1.34-3 3v5a3 3 0 003 3h12a3 3 0 003-3v-5c0-1.66-1.34-3-3-3h-1V8c0-1.1-.9-2-2-2h-1c0-1.11-.89-2-2-2zm0 3a1 1 0 011 1h-2a1 1 0 011-1zm0 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
          </svg>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  padding: 0 20px;

  .search-form {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    border: 2px solid #28a745;
    border-radius: 50px;
    padding: 8px 16px;
    box-shadow: 0 4px 6px rgba(40, 167, 69, 0.1);
  }

  .search-input {
    flex: 1;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: #333333;
    background-color: transparent;
    border: none;
    padding: 8px;
    outline: none;

    &::placeholder {
      color: #999999;
      font-size: 14px;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
    }
  }

  .icon-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;

    svg {
      fill: #28a745;
      transition: fill 0.2s ease;
    }

    &:hover svg {
      fill: #218838;
    }
  }

  .search-icon {
    margin-right: 8px;
  }

  .reset-icon {
    margin-left: 8px;
  }

  .camera-icon {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    .search-form {
      padding: 8px 12px;
    }

    .search-input {
      font-size: 14px;
      padding: 8px 12px;
    }

    .icon-button {
      margin: 0 4px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default SearchBar;