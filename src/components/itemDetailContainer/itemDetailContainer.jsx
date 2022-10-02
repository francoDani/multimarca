import { getDoc, doc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ItemDetail } from "../itemDetail/itemDetail";

export const ItemDetailbox = styled.div`
  position: absolute;
  background-color: #ededed;
  padding-top: 5rem;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemDetailContainer = () => {  
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  
  const getItem = () => {
    const db = getFirestore();

    const item = doc(db, "items", id);
    getDoc(item).then((snapshot) => {
      setproduct({id: snapshot.id, ...snapshot.data() });
      
    })
  };

  useEffect(() => {
    getItem();
  }, []);
  return (
    <ItemDetailbox>
      <ItemDetail product={product} />
    </ItemDetailbox>
  );
};
