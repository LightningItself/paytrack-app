import { useDispatch } from "react-redux";
import { jwtloginUser } from "../../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(jwtloginUser({ username, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Username: <input name="username" />
      </div>
      <div>
        Password: <input name="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
