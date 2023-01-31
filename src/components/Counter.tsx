import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="btn-group mt-4" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
            if (count > 0) {setCount(count- 1);}
        }}
      >
        -
      </button>
      <span data-testid="counter_span" className="px-3 border fs-4 py-1">
        {count}
      </span>
      <button
        type="button"
        name="inc-count"
        className="btn btn-secondary"
        onClick={()=>{setCount(count+1)}}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
