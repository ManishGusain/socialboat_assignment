import { useState } from 'react';
import axios from 'axios';

export default function Header({ setData, setDataLoading }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        videoApi(value);
    };

    const videoApi = async (search_string) => {
        setDataLoading(true);
        let config = {
            method: 'get',
            url: `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search_string}&numResults=6`,
        };

        axios.request(config)
            .then((response) => {
                setData(response?.data?.results);
                setDataLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setData([]);
                setDataLoading(false);
            });
    }


    return (
        <header className="header">
            <div className="logo" />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="avatar" />
        </header>
    );
};