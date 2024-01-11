import React from 'react';
import PropTypes from 'prop-types';

const ContainerDetailsModal = ({container, onClose}) => {
    function getStatusColor(status) {
        switch (status) {
            case 'Delivered':
                return 'bg-green-500 text-white';
            case 'Delayed':
                return 'bg-yellow-500 text-white';
            case 'Cancelled':
                return 'bg-red-500 text-white';
            default:
                return 'bg-blue-500 text-white';
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
            <div className="animate-scale-in-center">
                <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 transition-all duration-500 ease-in-out">
                    <div className="flex justify-end">
                        <div className="cursor-pointer flex" onClick={onClose}>
                            ×
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-700">{container.containerName}</h2>
                    <p>Container ID: {container.ContainerId}</p>
                    <p>Product Name: {container.productName}</p>
                    <p>Country of Source: {container.countryOfSource}</p>
                    <p>Destination: {container.destination}</p>
                    <p>Date of Departure: {container.dateOfDeparture}</p>
                    <p>Product Details: {container.productDetails}</p>
                    <p className="font-bold">Items</p>
                    <ul className="list-disc list-inside">
                        {container.itemsInside.map((item) => (
                            <li key={item.itemId}>
                                <p>Item Name: {item.itemName}</p>
                                <p>Item Details: {item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={`p-2 rounded ${getStatusColor(container.status)}`}>Status: {container.status}</p>
                </div>
            </div>
        </div>
    );
};

ContainerDetailsModal.propTypes = {
    container: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ContainerDetailsModal;