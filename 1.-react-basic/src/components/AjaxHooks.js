import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
};

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    /*
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            };

                            setPokemons((pokemons) => [...pokemons, pokemon]);
                        })
                })
            })
    }, []);
    */


    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();

            json.results.forEach(async(el) => {
                let res = await fetch(el.url);
                let json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            })
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
        
    }, []);

    return (
        <>
        <h2>Peticiones Asincronas en Hooks</h2>
        {
            pokemons.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                pokemons.map(element => (
                    <Pokemon key={element.id} name={element.name} avatar={element.avatar} />
                ))
            )
        }
        </>
    )
};