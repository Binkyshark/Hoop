// JavaScript Code for About Page Interactivity

// Toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Open VR Tour Modal
function openVrTour() {
    alert("VR Tour feature coming soon! Stay tuned.");
}

// Load Events Dynamically
const events = [
    "Free Health Check-up Camp - December 15, 2024",
    "Heart Health Awareness Seminar - January 10, 2025",
    "Blood Donation Drive - February 20, 2025",
];

function loadEvents() {
    const eventsSection = document.getElementById("events-list");
    eventsSection.innerHTML = ""; // Clear any existing content
    events.forEach((event) => {
        const li = document.createElement("li");
        li.textContent = event;
        eventsSection.appendChild(li);
    });
}

// Load News Dynamically
const news = [
    "ABC Hospital introduces advanced robotic surgery - November 2024",
    "New Pediatric Wing Inaugurated - October 2024",
    "Partnership with Global Health Alliance - September 2024",
];

function loadNews() {
    const newsSection = document.getElementById("news-list");
    newsSection.innerHTML = ""; // Clear any existing content
    news.forEach((newsItem) => {
        const li = document.createElement("li");
        li.textContent = newsItem;
        newsSection.appendChild(li);
    });
}

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    loadEvents();
    loadNews();
});
