import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { useMemo } from 'react';



const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes);
    const filter = useSelector(state => state.filter);

    const filteredAnecdotes = useMemo(() => {
        return anecdotes.filter(anec => anec.content.toLowerCase().includes(filter.toLowerCase()))
    }, [anecdotes, filter])

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteForAnecdote(id))
    }

    return (
        <>
            {filteredAnecdotes
                .sort((a, b) => a.votes >= b.votes ? -1 : 1)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
        </>
    )
}

export default AnecdoteList