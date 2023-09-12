import React from 'react'

const Ex5 = () => {
    function handleSubmit(e){
        e.preventDefault();
        alert("You clicked on submit!");
      }
    const css={
        backgroundColor:'black',
        color:'white'
    }
  return (
    <div>
        <form onDoubleClick={handleSubmit}>
            <button type="submit" style={css}>Click Me!</button>
        </form>
    </div>
  )
}

export default Ex5