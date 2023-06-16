import React from 'react'

const Dashboard = () => {
    const clickTo = async () => {
        fetch('http://localhost:5050/API/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authentication": JSON.parse(localStorage.getItem('token'))

            }
        })

            .then(res => res.json())
            .then(data => {
                console.log('data::: ', data);
                // toast.warn("Wow so easy!");
            })
            .catch(err => console.log('err::: ', err))
    }
    return (
        <div>
            <button onClick={ clickTo }>Click-To</button>
        </div>
    )
}

export default Dashboard