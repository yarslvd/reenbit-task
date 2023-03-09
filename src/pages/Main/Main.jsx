import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import { useGetCharactersQuery } from "../../store/fetchApi";

import './Main.scss';

const Main = () => {
    const [search, setSearch] = useState(JSON.parse(sessionStorage.getItem('search')) || '');
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetCharactersQuery({page, search});

    console.log(data);

    const results = !isLoading && !error ? [...data.results].sort((a, b) => { if(a.name < b.name) return -1 }) : null;

    const handlePagination = (e, p) => {
        setPage(p);

        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const handleSearch = (e) => {
        sessionStorage.setItem('search', JSON.stringify(e.target.value));
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearch(JSON.parse(sessionStorage.getItem('search')));
    }, [])

    return(
        <Layout>
            <img src="/assets/header.png" alt="Rick and Morty" className="header_img"/>
            <div className="search">
                <input type="text" className="search-field" placeholder="Filter by name..." onChange={handleSearch} defaultValue={search}/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z" fill="black" fillOpacity="0.54"/>
                </svg>
            </div>
            <div className="results">
                {(!isLoading && !error) && 
                results.map(el => (
                    <Card {...el} key={el.id}/>
                ))}
                {error && <h1>{error.data.error}</h1>}
            </div>
            {!error && !isLoading && data.info.pages !== 1 && <Pagination count={data.info.pages} color="primary" onChange={handlePagination} sx={{ mb: '80px' }}/>}
        </Layout>
    );
}

export default Main;