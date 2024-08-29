import React from "react";
class Weather extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          location: 'New York'
        };
      }
    Change=()=>{
        this.setState({location:"Coimbatore"})
    }
    render()
    {
        return(
            <div>
                <center>
                    <h1>Weather Application</h1>
                    <form>
                        <input type="text" placeholder="Enter your loaction"></input>    
                        <button onClick={this.Change}>Update Location</button>
                        <h1>Current Weather in {this.state.location}</h1>
                        <h3>Temperature: 20 C</h3>
                        <h3>Condition: Sunny</h3>
                    </form>
                </center>
            </div>
        )
    }
};
export default Weather;