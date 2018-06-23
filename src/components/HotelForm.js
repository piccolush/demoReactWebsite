import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';


class HotelForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            hotelName: '',
            locality: '',
            stateName: ''
        };
    }

    // getValidationState() {
    //   const length = this.state.value.length;
    //   if (length > 10) return 'success';
    //   else if (length > 5) return 'warning';
    //   else if (length > 0) return 'error';
    //   return null;
    // }

    handleSubmit = (e) => {
        console.log('HotelFormSubmit data', e, this.state.hotelName, this.state.locality, this.state.stateName);
        e.preventDefault();
        var body = {
            "hotelName": this.state.hotelName,
            "locality": this.state.locality,
            "stateName": this.state.stateName,
        }

        // this.props.HotelFormSubmit(body)
            fetch(`https://foodpoint-1b02b.firebaseio.com/.json`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body)
            })
            .then(
              response => {
                console.log('HotelFormSubmit response', response);
                response.json();
              }
            )
            .then(
            json => {
                console.log("response json", json);
                alert(json)
                debugger;
                if (json.code !== 200) {
                    "Not Done"
                } else if (json.code === 200) {
                    "Done"
                    //   window.location.reload(true)
                }
            }
            )
    }

    handleChange = (e) => {
        this.setState({
            hotelName: e.target.value,
        });
        console.log("HotelName", e.target.value)
    }

    handleChange1 = (e) => {
        this.setState({
            locality: e.target.value,
        });
        console.log("locality", e.target.value)
    }

    handleChange2 = (e) => {
        this.setState({
            stateName: e.target.value,
        });
        console.log("Statename", e.target.value)
    }

    render() {
        return (
            <form style={{ marginTop: '10px' }}>
                <FormGroup
                    controlId="formBasicText"
                // validationState={this.getValidationState()}
                >
                    <ControlLabel style={{ marginTop: '10px' }}>Enter Hotel Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.hotelName}
                        placeholder="Hotel Name"
                        onChange={this.handleChange}
                    />
                    <ControlLabel style={{ marginTop: '10px' }} >Locality</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Locality"
                        value={this.state.locality}
                        onChange={this.handleChange1}
                    />
                    <ControlLabel style={{ marginTop: '10px' }} >State</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.stateName}
                        placeholder="State"
                        onChange={this.handleChange2}
                    />
                    {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                    <Button id="submit" type="submit"
                        onClick={this.handleSubmit}>Submit
          </Button>
                </FormGroup>
            </form>
        );
    }
}

export default HotelForm;