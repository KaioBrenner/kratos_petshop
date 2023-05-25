import axios from "axios";

async function fetchClients() {
  try {
    const response = await axios.get("http://localhost:3000/clients");
    const dataClients = response.data;
    return dataClients;
  } catch (error) {
    console.log(error);
  }
}

async function deleteClient(clientId) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/cliente/${clientId}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createClient(clientData) {
  try {
    const response = await axios.post("http://localhost:3000/newClient")
    return response;
  } catch (error) {
    console.log(error);
  }
}



export default { fetchClients, deleteClient, createClient };
