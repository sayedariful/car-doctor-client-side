import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import useAuth from "../../Hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
  const {createUser} = useAuth();

  // const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conform = form.conform.value;
        console.log(name, email, password, conform);

        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error => {
          console.log(error)
        })
      };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-16">
          <div className="mr-16">
            <figure>
              <img src={loginImg} alt="" />
            </figure>
          </div>
        </div>
        <div className="card py-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Conform Password</span>
              </label>
              <input
                type="password"
                name="conform"
                placeholder="Conform Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          <div>
            <p className="my-4 text-center">Already have an account? <Link className="text-[#FF3811] font-bold" to='/Login'>Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
