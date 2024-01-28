import React, { useEffect, useState } from 'react'
import { Data } from './Data'
import Gallery2 from './Gallery2';


const Gallery = () => {
    const [list, setList] = useState(Data);
    const [categoryList, setCategoryList] = useState();

    const handleButtonClick = (category) => {
        if (category === "all") {
            return setList(Data);
        } else {
            // const filterData = Data.filter(({ category: Category }) => Category === category);
            const filterData = Data.filter((item) => item?.category === category);
            setList(filterData)
        }
    }

    useEffect(() => {
        let categories = Array.of(...new Set(Data.map((val) => val.category)));
        categories.push('all');
        setCategoryList(categories);
    }, []);

    return (
        <div>
            <Gallery2 list={list} handleButtonClick={handleButtonClick} categoryList={categoryList} />
        </div>
    )
}

export default Gallery
