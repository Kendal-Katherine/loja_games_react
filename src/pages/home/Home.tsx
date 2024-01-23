interface CardProdutoProps {
    imgUrl: string;
    nomeProduto: string;
    descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ imgUrl, nomeProduto, descricao }) => {
    return (
        <div className="flex-shrink-0 justify-between w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={imgUrl} alt={nomeProduto} className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{nomeProduto}</h2>
                <p className="text-gray-700">{descricao}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Comprar</button>
            </div>
        </div>
    );
};

function Home() {
    return (
        <>

            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Lista de Produtos</h2>
                </div>

               
                <div className=" flex justify-center items-center container  w-full mx-auto mt-8 gap-5">
                    <CardProduto
                        imgUrl={"https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Grand_Theft_Auto_V_capa.png/270px-Grand_Theft_Auto_V_capa.png"}
                        nomeProduto={"Grand Theft Auto V"}
                        descricao={"1"}
                    />
                    <CardProduto
                        imgUrl={"https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png"}
                        nomeProduto={"God of War"}
                        descricao={"2"}
                    />
                    <CardProduto
                        imgUrl={"https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/270px-Super-Mario-World.jpg"}
                        nomeProduto={"Super Mario World"}
                        descricao={"3"}
                    />
                    <CardProduto
                        imgUrl={"https://upload.wikimedia.org/wikipedia/pt/thumb/d/dd/Crash_Bandicoot_1_capa.png/220px-Crash_Bandicoot_1_capa.png"}
                        nomeProduto={"Crash Bandicoot"}
                        descricao={"4"}
                    />
                </div>
            </div>

        </>

    )
}

export default Home