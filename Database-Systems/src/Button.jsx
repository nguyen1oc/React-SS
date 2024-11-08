function Button(){
    const style = {
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }
    // const handleClick =(name) => {
    //     if (count <3){
    //         count++;
    //         console.log(`${name} you click me ${count}`);
    //     }else{
    //         console.log(`Stop ${name} dog`);
    //     }
    // };
    const handleClick = (e) => e.target.textContent = "OUCH!"; 
    //const handleClick2 = (name) => console.log(`${name} stop touching me`);
    return(
        <button onDoubleClick = {(e) => handleClick(e)}>Click Me Bjtch</button>
    );
}
export default Button