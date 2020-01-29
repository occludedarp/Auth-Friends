import React from 'react';
import axios from 'axios';

class Login extends React.Component {

  state = {
    credentials: {
      username: ' ',
      password: ' '
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios.post

  }

  render() {
    return(
      <div>
        <form>
          <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={handlechange  }
          />

          <input 
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;