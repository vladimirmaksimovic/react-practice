import React from "react";

class Api extends React.Component {
  // state object
  state = {
    data: [],
  };

  // componentDidMount lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;

    const posts = data.map((post, index) => {
      return (
        <div key={index} className='post-container'>
          {/* <h2>{post.id}</h2> */}
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h2>JSONPlaceholder API</h2>
        <div className='api-container'>{posts}</div>
      </div>
    );
  }
}

export default Api;
