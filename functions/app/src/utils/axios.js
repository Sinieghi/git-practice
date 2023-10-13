import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://frapp-4wvtprufuq-uc.a.run.app",
});
export default customFetch;
