

export default function ComponentOne({count, onClickHandler}){


    return (
        <div>
            <p>{count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </div>
    )
}