import { useEffect, useState } from "react";
function TitleUpdater() {
    const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
    return (
        <>
            <h1>Counter: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default TitleUpdater;