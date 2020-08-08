import axois from "axios";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-25b6c.firebaseio.com/",
});

export default instance;
