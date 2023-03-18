import { Link } from 'react-router-dom';

function FavoriteCard({favorite}){
    return(
        <>
        
        <div className="favoriteCard">
        <Link to={`/product/${favorite.item_id}`}>
            <div className='favoriteCard__title'>{favorite.name}</div>
            <div className='favoriteCard__imgContainer'>
                <img src={favorite.image} alt="" />
            </div>
            </Link>
        </div>
        
        </>
    )
};

export default FavoriteCard;