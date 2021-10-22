import { createApi } from "unsplash-js";


const getRandomImages = async () => {
  const unsplash = await createApi({
    accessKey: "f2fBmpgyhmP2y9pwKQmW9M3Thqe5VTYhe0SBj6a-9lA",
  });
  unsplash.photos.getRandom({ count: 10 }).then((result) => {
    if (result.type === "success") {
      console.log(result);
    }
  });
};

export default getRandomImages;
