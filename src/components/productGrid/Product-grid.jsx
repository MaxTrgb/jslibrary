import React from 'react';
import ProductsItem from './Products-item';
import './Product.css';
import ProductAdd from './Product-add';


const ProductGrid = () => {
    return (
        <div className="product">
            <ProductAdd />
            <div className='gridContainer'>
                <div className="gridItems">
                    <ProductsItem
                        imgSrc="https://content2.rozetka.com.ua/goods/images/big_tile/446854857.jpg"
                        title="Моноблок Lenovo 24 AIO V50a-24"
                        price="20 999₴"
                        details={"Екран 23.8 IPS (1920x1080) Full HD / Intel Core i5-10400T (2.0 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ /"+
                             "Intel UHD Graphics 630 / без ОД / LAN / веб-камера / Windows 10 Pro (upgrade to Windows 11)"}
                        items={50} />
                    <ProductsItem
                        imgSrc="https://content.rozetka.com.ua/goods/images/big_tile/320078659.jpg"
                        title="Компютер ARTLINE Gaming X47"
                        price="26 999₴"
                        details={"AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / "+
                            "nVidia GeForce RTX 3060, 12 ГБ / без ОД / LAN / без ОС"}
                        items={10} />
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/176926071.jpg"
                        title="Моноблок Apple iMac 24 М1 4.5К"
                        price="44 999₴"
                        details={"Екран 23.5 (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (7 ядер)"+
                            "/ без ОД / Wi-Fi / Bluetooth / вебкамера / macOS Big Sur / 4.46 кг / синій / клавіатура + миша"}
                        items={0} />
                    <ProductsItem
                        imgSrc="https://content2.rozetka.com.ua/goods/images/big_tile/446854857.jpg"
                        title="Моноблок Lenovo 24 AIO V50a-24"
                        price="20 999₴"
                        details={"Екран 23.8 IPS (1920x1080) Full HD / Intel Core i5-10400T (2.0 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ /"+
                             "Intel UHD Graphics 630 / без ОД / LAN / веб-камера / Windows 10 Pro (upgrade to Windows 11)"}
                        items={50} />
                    <ProductsItem
                        imgSrc="https://content.rozetka.com.ua/goods/images/big_tile/320078659.jpg"
                        title="Компютер ARTLINE Gaming X47"
                        price="26 999₴"
                        details={"AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / "+
                            "nVidia GeForce RTX 3060, 12 ГБ / без ОД / LAN / без ОС"}
                        items={10} />
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/176926071.jpg"
                        title="Моноблок Apple iMac 24 М1 4.5К"
                        price="44 999₴"
                        details={"Екран 23.5 (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (7 ядер)"+
                            "/ без ОД / Wi-Fi / Bluetooth / вебкамера / macOS Big Sur / 4.46 кг / синій / клавіатура + миша"}
                        items={0} />
                        <ProductsItem
                        imgSrc="https://content2.rozetka.com.ua/goods/images/big_tile/446854857.jpg"
                        title="Моноблок Lenovo 24 AIO V50a-24"
                        price="20 999₴"
                        details={"Екран 23.8 IPS (1920x1080) Full HD / Intel Core i5-10400T (2.0 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ /"+
                             "Intel UHD Graphics 630 / без ОД / LAN / веб-камера / Windows 10 Pro (upgrade to Windows 11)"}
                        items={50} />
                    <ProductsItem
                        imgSrc="https://content.rozetka.com.ua/goods/images/big_tile/320078659.jpg"
                        title="Компютер ARTLINE Gaming X47"
                        price="26 999₴"
                        details={"AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / "+
                            "nVidia GeForce RTX 3060, 12 ГБ / без ОД / LAN / без ОС"}
                        items={10} />
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/176926071.jpg"
                        title="Моноблок Apple iMac 24 М1 4.5К"
                        price="44 999₴"
                        details={"Екран 23.5 (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (7 ядер)"+
                            "/ без ОД / Wi-Fi / Bluetooth / вебкамера / macOS Big Sur / 4.46 кг / синій / клавіатура + миша"}
                        items={0} />
                    <ProductsItem
                        imgSrc="https://content2.rozetka.com.ua/goods/images/big_tile/446854857.jpg"
                        title="Моноблок Lenovo 24 AIO V50a-24"
                        price="20 999₴"
                        details={"Екран 23.8 IPS (1920x1080) Full HD / Intel Core i5-10400T (2.0 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ /"+
                             "Intel UHD Graphics 630 / без ОД / LAN / веб-камера / Windows 10 Pro (upgrade to Windows 11)"}
                        items={50} />
                    <ProductsItem
                        imgSrc="https://content.rozetka.com.ua/goods/images/big_tile/320078659.jpg"
                        title="Компютер ARTLINE Gaming X47"
                        price="26 999₴"
                        details={"AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / "+
                            "nVidia GeForce RTX 3060, 12 ГБ / без ОД / LAN / без ОС"}
                        items={10} />
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/176926071.jpg"
                        title="Моноблок Apple iMac 24 М1 4.5К"
                        price="44 999₴"
                        details={"Екран 23.5 (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (7 ядер)"+
                            "/ без ОД / Wi-Fi / Bluetooth / вебкамера / macOS Big Sur / 4.46 кг / синій / клавіатура + миша"}
                        items={0} />
                </div>
            </div>

        </div>
    );
}

export default ProductGrid;