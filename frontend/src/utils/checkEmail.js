import axios from "axios";

export default async function(email) {
  try {
    const res = await axios.get(`/api/v1/users/email/${email}`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
