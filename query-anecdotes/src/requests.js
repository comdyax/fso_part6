import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
    axios.get(baseUrl).then(re => re.data)

export const createAnecdote = newAnecdote =>
    axios.post(baseUrl, newAnecdote).then(re => re.data)

export const updateAnecdote = updatedAnecdote =>
    axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(re => re.data)