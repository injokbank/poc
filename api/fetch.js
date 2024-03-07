import axios from "axios";

const fetcher = async (uri) => {
  const result = await axios.get(uri);
  return result.data;
};

export default fetcher;
