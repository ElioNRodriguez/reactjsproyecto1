import React from 'react';
import ('./Card.css')
import StockComponent from '../StockComponent/StockComponent';
import PrecioComponent from '../PrecioComponent/PrecioComponent';


const CardComponent = () => {
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAEhH32hunkpBO-56VB6Fa71ivWnCHR8-Cw&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Guitarra eléctrica Squier by Fender Affinity Series Stratocaster</h5>
                <p className="card-text">
                    Fabricada en álamo con acabado brillante.
                    Con 6 cuerdas y 21 trastes de tamaño medium jumbo.
                    El largo de escala es de 25.5 ".
                    <br />
                    <StockComponent></StockComponent>
                    <br />
                    <PrecioComponent></PrecioComponent>                  
                </p>
               
                <a href="#" className="btn btn-primary">
                    Comprar
                </a>
            </div>
        </div>

    );
}

export default CardComponent;
