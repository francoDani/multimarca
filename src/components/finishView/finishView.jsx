import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import { CartContext } from "../../Context/CartContext";

const ClientInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;
const ClientInfo = styled.form`
  width: 60%;
  background-color: var(--white);
  box-shadow: 0 0 10px var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  font-size: 0.7rem;
  margin-top: 1rem;
`;
const ClientInfoInput = styled.input`
  width: 50%;
  border: solid 1px var(--light-gray);
  padding: 5px;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 5px;
  &:focus {
    outline: solid 1px blue;
  }
`;
const SaveButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--light-green);
  color: var(--light-green);
  font-weight: bold;
  background-color: var(--white);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: var(--light-green);
    color: white;
  }
`;



const FinishBuyView = () => {
  const { setBuyer, createOrder, orderId } =
    useContext(CartContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const changehandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
    let newBuyer = {
      name,
      email,
      phone,
    };
    setBuyer(newBuyer);
  };
  const validateBuyer = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      createOrder();
    } else {
      swal({
        title: "debe completar todos los campos",
        icon: "error",
        timer: 2500,
      });
    }
  };
  
  return (
    <ClientInfoContainer>      
        <ClientInfo>
          <h2>Ingresa tus datos para terminar con la compra</h2>
          <Label htmlFor="name">Nombre completo</Label>
          <ClientInfoInput
            type="text"
            autoComplete="none"
            name="name"
            onChange={changehandler}
          />
          <Label htmlFor="email">Email</Label>
          <ClientInfoInput type="email" name="email" onChange={changehandler} />
          <Label htmlFor="phone">Teléfono</Label>
          <ClientInfoInput
            type="text"
            autoComplete="none"
            name="phone"
            onChange={changehandler}
          />          
            <SaveButton onClick={(e) => validateBuyer(e)}>
              Guardar Datos
            </SaveButton>
            {orderId ? <Link to={"/orders"}>
                <SaveButton>Ver resumen</SaveButton>
                </Link> : ""}
            
        </ClientInfo>
    </ClientInfoContainer>
  );
};

export default FinishBuyView;
