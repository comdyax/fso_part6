import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { QueryClientContext, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createAnecdote, getAnecdotes, updateAnecdote } from './requests'
import { useNotificationDispatch } from './components/AnecContext'

const App = () => {
  const queryClient = useQueryClient()

  const voteAnecMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const dispatch = useNotificationDispatch()

  const handleVote = (anecdote) => {
    voteAnecMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({ type: 'VOTE', payload: anecdote.content })
    setTimeout(() => {
      dispatch({ type: 'REMOVE' })
    }, 6000)
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  if (isPending) {
    return <div>loading data...</div>
  }

  if (isError) {
    console.log(error.message)
    return <div>anecdote service not available due to problems with server</div>
  }

  const anecdotes = data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
