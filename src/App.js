import ClientList from "./components/ClientList";
import { useEffect } from "react";
import { loadClients } from "./reducers/clientsReducer";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(loadClients(user.token));
    }
  }, [dispatch, user]);
  return (
    <div>
      <h1>Payment Tracker App</h1>
      {user && <ClientList />}
      {!user && <Login />}
    </div>
  );
};

export default App;
