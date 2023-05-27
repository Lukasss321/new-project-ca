import { useEffect, useCallback } from "react";
import { CustomerItem } from "./CustomerItem";
import { useState } from "react";
import axios from "axios";

export const CustomerList = () => {
  const [custPosts, setCustPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCustomers = useCallback(() => {
    axios
      .get("http://localhost:5000/post")
      .then((response) => {
        setCustPosts(response.data);
      })
      .catch(() => {
        setCustPosts([]);
      })
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
        .catch(console.log)
        .finally(() => {
          setIsLoading(false);
        });
    },
    [fetchCustomers]
  );

  useEffect(() => {
    if (!custPosts) {
      fetchCustomers();
    }
  }, [fetchCustomers, custPosts]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && !custPosts?.length) return <>No customers found.</>

  return (
    <ul>
      {custPosts.map((custPost, index) => (
        <CustomerItem post={custPost} onDeleteClick={handleDelete} key={index}/>
      ))}
    </ul>
  );
};

export default CustomerList;
