import React, {useState, useEffect} from 'react';
import ContainerDetail from "../containerDetails/ContainerDetail";
import containerData from '../../fakeData.json';
import containerDetailsData from "../../fakeDataDetail.json"
import userProfilePic from '../../assets/download.jpeg'

const ContainerList = () => {
    const [containers, setContainers] = useState([]);
    const [selectedContainer, setSelectedContainer] = useState(null);

    useEffect(() => {
        console.log(containerData); // Check the console for the imported data
        setContainers(containerData.containers);
    }, []);

    function handleContainerClick(containerId) {
        setSelectedContainer(containerId);
    }

    function findContainerById(containerId) {
        return containerDetailsData.containers.find((container) => container.ContainerId === containerId);
    }

    const handleCloseModal = () => {
        setSelectedContainer(null);
    };
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + ' .... ' : text;
    };
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-center flex-grow">Container Tracking System</h1>
                <img src={userProfilePic} alt="User Profile" className="rounded-full h-10 w-10 transition-transform transform hover:scale-150"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
                {containers.map((container) => (<div
                    key={container.ContainerId}
                    className="bg-white p-4  rounded shadow transition-transform transform hover:scale-105 border border-dark border-opacity-25"
                >
                    <h2 className="text-lg font-bold mb-2 cursor-pointer"
                        onClick={() => handleContainerClick(container.ContainerId)}>
                        {container.containerName}
                    </h2>
                    <p className="text-gray-500 mt-2">Container ID: {container.ContainerId}</p>
                    <p className="text-gray-600 mb-2">{container.productName}</p>
                    <p className="text-gray-700">{truncateText(container.productDetails, 100)}</p>
                </div>))}
                {selectedContainer && (
                    <ContainerDetail
                        container={findContainerById(selectedContainer)}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>);
};

export default ContainerList;
