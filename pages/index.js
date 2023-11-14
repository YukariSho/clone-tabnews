import React from 'react';
import imagemRick from 'https://i2.wp.com/lojamundogeek.com.br/wp-content/uploads/2023/11/Recapitulacao-do-episodio-5-da-7a-temporada-de-Rick.jpg';

function Home() {
    return (
        <div>
            <h1>Wubba lubba dub dub!</h1>
            <img src={imagemRick} alt="Descrição da imagem" />
        </div>
    );
}

export default Home;