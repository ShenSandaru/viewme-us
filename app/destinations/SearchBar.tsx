import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <StyledWrapper>
      <div className="search-container">
        <BiSearchAlt className="search-icon" />
        <input 
          type="text"
          placeholder="Discover your next adventure..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
    margin: 0 auto 1.5rem;
  }

  .search-container {
    position: relative;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #2E7D32;
    font-size: 1.5rem;
    pointer-events: none;

    @media (max-width: 768px) {
      font-size: 1.25rem;
      left: 12px;
    }
  }

  .input {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(76, 175, 80, 0.1);
    padding: 15px 45px;
    border-radius: 15px;
    outline: none;
    color: #2c3e50;
    font-size: 1rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 12px 40px;
      font-size: 0.9rem;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      padding: 10px 35px;
      font-size: 0.85rem;
      border-radius: 10px;
    }
  }

  .input::placeholder {
    color: #7f8c8d;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  .input:focus {
    animation: glowingShadow 2s infinite linear;
    background-color: rgba(255, 255, 255, 1);
  }

  @keyframes glowingShadow {
    0% {
      box-shadow: -2px -2px 8px 1px rgba(76, 175, 80, 0.3), 2px 2px 8px 1px rgba(46, 125, 50, 0.3);
    }
    25% {
      box-shadow: -2px 2px 8px 1px rgba(76, 175, 80, 0.3), 2px -2px 8px 1px rgba(46, 125, 50, 0.3);
    }
    50% {
      box-shadow: 2px 2px 8px 1px rgba(76, 175, 80, 0.3), -2px -2px 8px 1px rgba(46, 125, 50, 0.3);
    }
    75% {
      box-shadow: 2px -2px 8px 1px rgba(76, 175, 80, 0.3), -2px 2px 8px 1px rgba(46, 125, 50, 0.3);
    }
    100% {
      box-shadow: -2px -2px 8px 1px rgba(76, 175, 80, 0.3), 2px 2px 8px 1px rgba(46, 125, 50, 0.3);
    }
  }
`;

export default SearchBar;