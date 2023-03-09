import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: (build) => ({
        getCharacters: build.query({
            query: (params) => `/character?name=${params.search}&page=${params.page}`,
        }),
        getCharacterInfo: build.query({
            query: (id) => `/character/${id}`
        })
    })
});

export const { useGetCharactersQuery, useGetCharacterInfoQuery } = fetchApi;