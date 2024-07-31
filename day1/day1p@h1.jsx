
function Show()
{
    alert("Check the console output");
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
}
function Check()
{
    return(
        <div className="App">
            
            <button onClick={Show}>Click</button><br></br><br></br>
     

        </div>
    )
}
export default Check;
