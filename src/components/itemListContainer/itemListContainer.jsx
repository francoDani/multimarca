import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ItemList } from "../ItemList/itemList";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;
const LoaderContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid var(--blue);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    top: 4px;
    border: 2px solid var(--blue);
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
      border: 2px solid var(--light-green);
    }
    25% {
      border: 2px solid var(--light-red);
    }
    75% {
      border: 2px solid var(--blue);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  /* Aqui tiene que venir el llamado a la API */
  const getProducts = () => {
    if (categoryId !== undefined) {        
      const db = getFirestore();
      
      const q = query(collection(db, "items"), where("category", "==", categoryId));
      getDocs(q).then((snapshot) => {
        setProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
      })
    } else {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);
  return (
    <Container>
      {products.length === 0 ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ItemList products={products} category={categoryId} />
      )}
    </Container>
    /* 
        <Container>
            <ItemList products={products} category={categoryId}/>
        <Container/> */
  );
};
