import { useEffect, useCallback } from "react";
import { CustomerItem } from "./CustomerItem";
import { useState } from "react";
import axios from "axios";

export const CustomerList = () => {
  const [custPosts, setCustPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCustomers = useCallback(() => {
    console.log("custPostsHello", custPosts);
    axios
      .get("http://localhost:5000/post")
      .then((response) => {
        setCustPosts(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = useCallback(
    (id) => {
      setIsLoading(true);

      axios
        .delete(`http://localhost:5000/post/delete/${id}`)
        .then(() => {
          fetchCustomers();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    },
    [fetchCustomers]
  );

  useEffect(() => {
    if (!custPosts.length) {
      fetchCustomers();
    }
  }, [fetchCustomers, custPosts]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {custPosts.map((custPost) => (
        <CustomerItem post={custPost} onDeleteClick={handleDelete} />
      ))}
    </ul>
  );
};

export default CustomerList;
