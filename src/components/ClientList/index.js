import { useSelector } from "react-redux";
import Client from "./Client";

const ClientList = () => {
  const allClients = useSelector((state) => state.clients);
  return (
    <div>
      {allClients.map((client, index) => (
        <Client key={index} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
