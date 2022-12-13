import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Idata } from '../type/data'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<Idata[], number>({
      query: (limit) => `todos?_limit=${limit}`,
      providesTags: (result: any) =>
        result
          ? [
            ...result.map(({ id } : {id:string}) => ({ type: 'Todos', id })),
            { type: 'Todos', id: 'LIST' },
          ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteDo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    })
  }),
})

export const { useGetTodosQuery, useDeleteDoMutation } = todoApi