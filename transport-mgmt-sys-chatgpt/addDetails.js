function addDetails() {
    const vehicleName = document.getElementById('vehicleName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const licensePlate = document.getElementById('licensePlate').value;
    const route = document.getElementById('route').value;
    const fare = document.getElementById('fare').value;

    const newDetail = {
        vehicleName,
        contactInfo,
        vehicleType,
        licensePlate,
        route,
        fare,
    };

    let details = JSON.parse(localStorage.getItem('vehicleDetails')) || [];
    details.push(newDetail);
    localStorage.setItem('vehicleDetails', JSON.stringify(details));

    // Redirect to the display page after adding details
    window.location.href = 'index.html';
}
