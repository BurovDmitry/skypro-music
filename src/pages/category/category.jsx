import React from 'react';
import { useParams } from "react-router-dom";

export const Category = ({ user }) => {


  const params = useParams();

  return (
    <section>
      <h1>CATEGORY №{params.id}</h1>  
    </section>
  );
};

export default Category;