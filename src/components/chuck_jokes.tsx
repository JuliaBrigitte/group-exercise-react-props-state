// An alternative way of declaring a component is to write it as a function which
// returns a JSX.Element 
import Joke from "../joke";

function ChuckJokes({jokes}: {jokes: Array<Joke>}) : JSX.Element {

    return (
        <>
            <p>
                <p>
                {jokes.map((joke) =>
                (
                    <p>{joke.id}) {joke.joke}</p>
                ))}
                </p>
            </p>

        <h4>Filtered Jokes (shows joke number 3)</h4>
            <p>
                <p>
                    {jokes.filter(joke => (3 === joke.id)).map((joke) =>
                        (
                            <p>{joke.id}) {joke.joke}</p>
                        ))}
                </p>
            </p>
        </>

    )
}

export default ChuckJokes;