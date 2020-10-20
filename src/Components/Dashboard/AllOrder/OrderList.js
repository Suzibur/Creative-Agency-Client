import React from 'react';

const OrderList = ({order}) => {
    return (

        <tr>
            <td>{order.orderDate}</td>
            <td>{order.email}</td>
            <td>{order.category}</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</td>
            <td>Pending</td>
        </tr>
    );
};

export default OrderList;