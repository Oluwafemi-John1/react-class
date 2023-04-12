import React from 'react'
const Navbar = () => {
    let divStyle = {
        color: "red",
        fontSize: "45px",
        backgroundColor: "green",
    }

    let food = {
        swallow: "Amala",
        soup: "Abula",
        animal: "Ponmo",
        animal2: "Beef"
    }

  return (
    <>
    <div style= {{color:"red",backgroundColor:"yellow"}}>Navbar</div>

    {food.swallow}

    <div style={divStyle}>This is styling</div>
    
    </>
  )
}

export default Navbar