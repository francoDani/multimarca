import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { ItemList } from "../ItemList/itemList"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Container = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: center;
`

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const URL = "https://api.mercadolibre.com/sites/MLA/search?q=";
    
    const getCategory = (category) => {
        let result;
        switch (category) {
            case "classical":
              result = `guitarra+gracia+clasica`;
              break;
            case "acustic":
              result = `guitarra+gracia+acustica`;
              break;
            case "electric":
              result = `guitarra+electrica+fender`;
              break;
            case "ukelele":
              result = `ukelele`;
              break;
            default:
              result = `guitarra+gracia`;
              break;
          }
          return result;
    }
    /* Aqui tiene que venir el llamado a la API */
    const getProducts = () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        })
    }
    
    useEffect(() => {
        getProducts()
    }, [categoryId])
    return(
        <Container>
            <ItemList products={products} category={categoryId}/>
        </Container>
        /* 
        <Container>
            <ItemList products={products} category={categoryId}/>
        <Container/> */
    )
}