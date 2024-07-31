function Display()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    console.log(newObject);
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(vowelArray);
    alert("check the console input");
}
function Class()
{
    return(
        <div className="App">
        
            <button onClick={Display}>Click</button><br></br><br></br>
            

        </div>
    )
}
export default Class;