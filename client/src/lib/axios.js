import axios from "axios";

axios.create({
  proxy: "http://localhost:5173/",
});
