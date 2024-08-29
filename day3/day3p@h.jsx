import React from "react";
class Name extends React.Component
{
    state={
        name:"Haoiken",
        count:0,
    };
        ChangeName=()=>{
            this.setState({count:this.state.count+1})
            if(this.state.count===3)
            {
                this.setState({count:0})
                if(this.state.name==="Goku")
                    this.setState({name:"Haoiken"})
                else
                    this.setState({name:"Goku"})
                }
                
        }

    render()
    {
        return(
            <div>
                <h2>{this.state.name}</h2>;
                <button onClick={this.ChangeName}>Change</button>
            </div>
        )
    }
}
export default Name;