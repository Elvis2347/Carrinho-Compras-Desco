const fetchProduto = async (querry) => {

    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${querry}`);
    const data = await response.json();

    return data.results;
};

export default fetchProduto;
