import styles from "./styles.css";

const Client = ({ client }) => {
  return (
    <div className="client">
      <div className="name">{client.name}</div>
      <div className="amount">
        Amount: {"\u20b9"}
        <strong>{client.amount}</strong>
      </div>
    </div>
  );
};

export default Client;
