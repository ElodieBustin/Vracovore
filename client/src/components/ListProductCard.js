import { Link } from 'react-router-dom';

function ListProductCard({item}) {
    return(
        <Link to={`/product/${item.id}`} className="productCard">
            <div className="productCard__name">{item.name}</div>

            <div className="productCard__imgContainer">
                <img src={item.image} alt="" />
            </div>

            

            <div className="productCard__infos">
                <span className="productCard__infos--priceKilo">{item.priceKilo}/kilo</span>
                <span className="productCard__infos--category">{item.category}</span>
                
            </div>
        </Link>
    )
}

export default ListProductCard;
