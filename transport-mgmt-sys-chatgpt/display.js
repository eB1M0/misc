document.addEventListener('DOMContentLoaded', function () {
    displayDetails();
});

function displayDetails() {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';

    const details = JSON.parse(localStorage.getItem('vehicleDetails')) || [];

    details.forEach(detail => {
        const card = document.createElement('div');
        card.classList.add('details-card');
        card.innerHTML = `
            <p><strong>Vehicle/Company Name:</strong> ${detail.vehicleName}</p>
            <p><strong>Contact Information:</strong> ${detail.contactInfo}</p>
            <p><strong>Type of Vehicle:</strong> ${detail.vehicleType}</p>
            <p><strong>License Plate:</strong> ${detail.licensePlate}</p>
            <p><strong>Route:</strong> ${detail.route}</p>
            <p><strong>Fare:</strong> ${detail.fare}</p>
            <button onclick="deleteDetail('${detail.vehicleName}')">Delete</button>
        `;
        detailsContainer.appendChild(card);
    });
}

function deleteDetail(vehicleName) {
    let details = JSON.parse(localStorage.getItem('vehicleDetails')) || [];
    details = details.filter(detail => detail.vehicleName !== vehicleName);
    localStorage.setItem('vehicleDetails', JSON.stringify(details));
    displayDetails();
}
