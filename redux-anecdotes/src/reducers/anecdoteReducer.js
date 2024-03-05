import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteForAnecdote(state, action) {
      const id = action.payload
      const anecdoteVote = state.find(dote => dote.id === id)
      const updatedVote = {
        ...anecdoteVote,
        votes: anecdoteVote.votes + 1
      }
      return state.map(dote => dote.id !== id ? dote : updatedVote)
    },
    setAnecdotes(state, action) {
      state = action.payload
      return state
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { voteForAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnec = await anecdoteService.createAnec(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export default anecdoteSlice.reducer


/**
 
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.payload.id
      const anecdoteVote = state.find(dote => dote.id === id)
      const updateVote = {
        ...anecdoteVote,
        votes: anecdoteVote.votes + 1
      }
      return state.map(anec => anec.id !== id ? anec : updateVote)
    }
    case 'NEW_ANECDOTE':
      return [...state, action.payload]
    default:
      return state
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content: content,
      votes: 0,
      id: getId()
    }
  }
}


export default reducer
 */