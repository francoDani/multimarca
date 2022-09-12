import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList"

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    return(
        <>
            <ItemList category={categoryId}/>
        </>
    )
}