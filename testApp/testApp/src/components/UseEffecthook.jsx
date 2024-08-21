import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffecthook() {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            <h1>Data:</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.email}</h2>
                    <p>Name: {item.name}</p>
                    <p>Body: {item.body}</p>
                </div>
            ))}
        </div>
    );
}

export default UseEffecthook;
