import React from 'react';

class FriendForm extends React.Component {
  state = {
    friends: [{
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    }]
  }

  componentDidUpdate(){

  }


  getFriends = () => {

  }

  render() {
    return(
      <form>
        <input

        />
        
        <input
          
        />
      </form>
    )
  }
}

export default FriendForm;