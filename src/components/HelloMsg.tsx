function HelloUser() {
  return (
    <>
      <h1> Hello Welcome to my Website</h1>
      <div>
        <input placeholder="Input your email here" size={30} />
      </div>
      <div>
        <input placeholder="Password" size={30} type="password" />
      </div>
      <div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
      <br />
    </>
  );
}

export default HelloUser;
