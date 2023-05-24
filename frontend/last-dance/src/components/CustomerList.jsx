import { useEffect } from "react";
import { CustomerItem } from "./CustomerItem";
import { useState } from "react";
import axios from "axios";

export const CustomerList = () => {
  const [custPosts, setCustPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/post")
      .then((response) => {
        setCustPosts(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("custPosts", custPosts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {custPosts.map((custPost) => (
        <CustomerItem post={custPost} />
      ))}
    </ul>
  );
};

export default CustomerList;
{
  /* <CustomerItem /> */
}
