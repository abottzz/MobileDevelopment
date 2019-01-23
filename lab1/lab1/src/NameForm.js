import React, { Component } from 'react';

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', valid: false, entered: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        var name = this.state.value
        var charachters = /^[A-Za-z]+$/;
        if(name.match(charachters))
        {
          document.write("Weclome to the site, " + " " + name + "!");
          return true;
        }
        else
        {
          alert ('Invalid charachters! Non-ascii charachters were detected!')
          return false
        }

        event.preventDefault();
      }


      render() {
        var name = this.state.value;
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

    export default NameForm;
