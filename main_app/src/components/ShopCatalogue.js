import React from "react";
import ShopComponent from 'shop/ShopComponent';

function ShopCatalogue({numberOfShops}) {

    const renderShops = () => {
        const allShops = [];
        for(let i = 0; i < numberOfShops; i++) {
            const shopName = `Shop #${i+1}`;
            allShops.push(<ShopComponent key={i} name={shopName}/>)
        }
        return allShops;
    }
    return (
        <>
            {renderShops()}
        </>
    )
}

export default ShopCatalogue;