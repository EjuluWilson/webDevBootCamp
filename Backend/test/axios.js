import axios from "axios";

async function fetchData(url) {
  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error("Status not 200: success zero!");
  } else {
    return response.data;
  }
}

const url = "http://localhost:8000/sample.json";

fetchData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
