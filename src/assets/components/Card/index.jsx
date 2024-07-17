import React from 'react'
import './index.css'
function Commit(props) {
        const {data} = props;
        console.log(data.address);
    return (
        <div className="footer-img">
            <img src={data.image} alt="images" />
            <div className="names">
                <h2> Name : {data.firstName} <br /> Surname : {data.lastName}</h2>
                <h2>{data.name}</h2><br />
                <div className="phone_email_wrapper"><h3>{data.phone} <br /> {data.email}</h3></div><br />
                <h3 className="address">{data.address.region}</h3>
                <h3 className="name">{data.cars[0]}  {data.cars[1]}  {data.cars[2]}</h3><br />
            </div>
        </div>
    )
}

export default Commit

