import { createApi } from "unsplash-js";

const getProfilesByName = async (name) => {
  const unsplash = await createApi({
    accessKey: "f2fBmpgyhmP2y9pwKQmW9M3Thqe5VTYhe0SBj6a-9lA",
  });
  let users = await unsplash.search.getUsers({
    query: name,
    count: 100 ,
  });
  return users
};

export default getProfilesByName;
