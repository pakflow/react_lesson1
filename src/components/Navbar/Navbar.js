import React from 'react';

const Navbar = ({cars, getInfo}) => {
    console.log('this is cars from navbar',cars);
    console.log('func getinfo',getInfo);
    return (
        <div>
            {
                cars.map((item) => (
                    <strong onClick={() => {getInfo(item)}} style={{margin: "10px"}} key={item.id}>{item.model}</strong>
                ))
            }
        </div>
    );
};

export default Navbar;