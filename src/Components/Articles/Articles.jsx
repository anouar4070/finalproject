import React, { useState, useEffect } from "react";

import axios from "axios";
import Swal from 'sweetalert2';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const getAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:4000/articles");
      setArticles(response.data);
    } catch (error) {
      console.error({ message: "error", error });
    }
  };

  const deleteArticles = async (id) => {
  // if( !window.confirm("are you sure to delete")) {
  //   return
  // }

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to delete this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async(result) => {

    try {

         if(result.isConfirmed){
          const response = await axios.delete(
            `http://localhost:4000/articles/${id}`
          );
          if (response.status === 200) {
            setArticles(articles.filter((article) => article.id !== id));
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }

            }
          
          }
        } catch (error) {
          console.error(error);
        }
 

   
  });}





  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div>
      <div>List of Products</div>
      {/* <button className='btn btn-info' onClick={getAllArticles}>Get All</button> */}
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <button
            onClick={() => deleteArticles(article.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Articles;
