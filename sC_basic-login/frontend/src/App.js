import './App.css';

function App() {
  return (
    <div className="App bg-secondary py-5 vh-100">
      <div className="modal-dialog" role="document">
    <div className="modal-content rounded-5 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h2 className="fw-bold mb-0">Login</h2>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autocomplete="off"/>
            <label for="floatingInput">username or email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" autocomplete="off" />
            <label for="floatingPassword">password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
