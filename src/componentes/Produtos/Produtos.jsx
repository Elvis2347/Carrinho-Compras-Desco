import React, {useEffect, useContext} from "react";
import './Produtos.css';
import fetchProduto from "../../api/fetchProduto";
import ProdutoCard from "../ProdutoCard/ProdutoCard";
import Loading from "../Loading/Loading.jsx";
import AppContext from "../../context/AppContext";

function Produtos() {

   const {produtos, setProdutos, loading, setLoading} = useContext(AppContext);

    useEffect(() => {
        fetchProduto('iphone').then((response) => {
            setProdutos(response);
            setLoading(false);
        });
    },);

    return(
        (loading && <Loading /> ) || (
            <section className="produto container">
                {produtos.map((produto) => <ProdutoCard key={produto.id} data={produto} />)}
            </section>
        )
    );
}

export default Produtos;
