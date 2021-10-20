import axios from "axios";

const BASE_URL = "https://pixabay.com/api/?q=";
const API_KEY = "23162659-e31e220340403b8018b25f991";

const fetchImages = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data.hits;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export default fetchImages;
