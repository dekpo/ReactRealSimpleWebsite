import React, { useState, useEffect } from 'react';

const PagePortfolio = () => {
    const [gallery,setGallery] = useState([]);

    useEffect( () => {
        fetch("https://picsum.photos/v2/list?limit=4")
        .then( res => res.json() )
        .then( json => console.log(json) )
    },[])

    return(
        <section>
            <h3>Portfolio</h3>
            <p>lorem ipsum dolor es truc muche</p>
        </section>
    )
}


export default PagePortfolio