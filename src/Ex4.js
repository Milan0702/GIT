import React from 'react'

const Ex4 = () => {
  function handleSubmit(e){
    e.preventDefault();
    alert("You clicked on submit!");
  }
   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Click me!" />
        </form>
    </div>
  )
}

export default Ex4