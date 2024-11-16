function showContent(section) {
    // Remove active class from all menu items
    document.querySelectorAll('.sidebar .menu li').forEach(item => item.classList.remove('active'));

    // Hide both content sections initially
    document.getElementById('dashboard-content').style.display = 'none';
    document.getElementById('events-content').style.display = 'none';

    // Show content based on selected section
    if (section === 'dashboard') {
        document.getElementById('dashboard-content').style.display = 'block';
        document.querySelector('.sidebar .menu li:nth-child(1)').classList.add('active');
    } else if (section === 'events') {
        document.getElementById('events-content').style.display = 'block';
        document.querySelector('.sidebar .menu li:nth-child(2)').classList.add('active');
    } else if (section === 'logout') {
        // 
        alert("Logging out...");
        // Redirect to home page
        window.location.href = '../index.html';
    }
}

function showProfile() {
    // Show profile modal
    document.getElementById("profile-modal").style.display = "block";
}

function closeProfile() {
    // Close profile modal
    document.getElementById("profile-modal").style.display = "none";
}
