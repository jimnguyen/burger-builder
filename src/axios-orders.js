import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-1c865-default-rtdb.firebaseio.com/",
});

export default instance;
