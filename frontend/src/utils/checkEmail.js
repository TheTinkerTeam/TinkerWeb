import axios from "axios";
export default async email => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v2",
      {
        query: `query CheckEmail($email: String!) {
          checkEmail(email: $email)
        }`,
        variables: {
          email: email
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const exists = res.data.data.checkEmail;
    return exists;
  } catch (err) {
    console.log("ERRROR");
    return false;
  }
};
