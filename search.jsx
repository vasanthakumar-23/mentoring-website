import React, { useState } from 'react';
import "./search.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const data = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredResults = data.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div className='search'>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='result'>
                {results.map((result, index) => (
                    <div key={index}>{result}</div>
                ))}
            </div>
        </div>
    );
};

export default Search;
