import PropTypes from "prop-types";


function TableData({name, description, price, discount}) {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{discount}</td>
            </tr>
        </tbody>
    )
}

TableData.propTypes ={
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    discount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

TableData.defaultProps = {
    name: "Sin nombre",
    description: "Sin descripción",
    price: "",
    discount: ""
}


export default TableData;