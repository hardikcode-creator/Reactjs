const Welcome=({onGetPost})=>{

    return (
        <center className="welcome-message">
  <h5>There are no posts</h5>
  <button type="button" class="btn btn-primary" onClick={onGetPost}>Get Posts</button>
        </center>
      
    );
};
export default Welcome;