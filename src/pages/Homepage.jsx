import { useState } from "react";
import { Header, Loader } from "../components/atoms";
import Results from "./Results";

export default function Homepage() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Header setData={setSearchResults} setDataLoading={setIsLoading} />
            {
                isLoading ?
                    <Loader />
                    :
                    <Results videos={searchResults} />
            }
        </>
    );
}