import { createApi } from "unsplash-js";
import axios from "axios";

const getProfilesByName = async (name) => {
  const unsplash = await createApi({
    accessKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  let users = await unsplash.search.getUsers({
    query: name,
    count: 100,
  });
  return users;
};
const getProfilesByAxios = async (name) => {
  let url = `https://api.unsplash.com/search/users?page=1&query=${name}`;
  let headers = {
    headers: {
      Authorization: "Client-ID " + process.env.NEXT_PUBLIC_API_KEY,
    },
  };
  const users = await axios.get(url, headers);
  console.log(users);
  return { response: { results: users.data.results } };
};
export default getProfilesByAxios;
