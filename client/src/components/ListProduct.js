import React, { useEffect, useState } from 'react';
import ListProductCard from './ListProductCard';

function ListProduct(){

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');


    useEffect(() => {
        async function fetchData() {
            const [itemsResponse, categoriesResponse] = await Promise.all([
                fetch('http://localhost:3001/data'),
                fetch('http://localhost:3001/data/category')
            ]);
            const items = await itemsResponse.json();
            const categories = await categoriesResponse.json();
            setItems(items);
            setCategories(categories);
        }
        fetchData();
    }, []);

    function handleCategoryClick(category){
        setSelectedCategory(category === selectedCategory ? '' : category);
    }; 

    const filteredItems = selectedCategory
        ? items.filter(item => item.category === selectedCategory)
        : items;

    return (
        <>
            <main className="listContainer">
                <h1 className="listContainer__title">Tous nos produits</h1>
                <section className='listContainer__mainPage'>
                    <aside className="categoryContainer">
                        <ul className="categoryContainer__list">
                            <li key="all" className={`categoryContainer__list--element ${!selectedCategory && 'selected'}`} onClick={()=>handleCategoryClick('')}>
                                Tous
                            </li>
                            {categories.map(category =>
                                <li key={category.category} className={`categoryContainer__list--element ${category.category === selectedCategory && 'selected'}`} onClick={() => handleCategoryClick(category.category)}>
                                    {category.category}
                                </li>
                            )}
                        </ul>
                    </aside>
                    <div className="productsContainer">
                        {filteredItems.map(item =>
                            <ListProductCard key={item.id} item={item}/>
                        )}
                    </div>
                </section>
            </main>
            
        </>
    );
}

export default ListProduct;
