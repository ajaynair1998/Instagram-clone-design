import { createApi } from "unsplash-js";


const getProfilesByName = async (name) => {
  const unsplash = await createApi({
    accessKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  let users = await unsplash.search.getUsers({
    query: name,
    count: 100 ,
  });
  return users
};

export default getProfilesByName;
