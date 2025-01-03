
export function Hello()
{ 
    let name="Hardik Agrawal";
    let marks=()=>{
        var a=5;
        var b=3;
        return a+b;
    }
    let num=Math.random()*100;

    return <div>
    <h1 style={{'background-color':'#776691'}}>Hello this is the future and my name is {name} and my marks is {marks()}</h1>
    <br/>
    <p>Random Number is:  {Math.round(num)}</p>
    </div>
}