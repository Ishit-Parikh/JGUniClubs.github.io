// Dummy Data
const members = [
  {
    name: "Shreya Bavaliya",
    role: "President of Technical Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Shreya.jpg"
  },
  {
    name: "Sabiha Talat ",
    role: "President of AI CLub",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Sabiha.jpg"
  },
  {
    name: "Divya Patel ",
    role: "Vice President At AI Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Divya.jpg"
  },
  {
    name: "Aesha Balar",
    role: "Vice President At Cultural Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Aesha.jpg"
  },
  {
    name: "Ritu Patel",
    role: "Fund Raiser At AI Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Ritu.jpg"
  },
  {
    name: "Yashvi Patel",
    role: "President of Cultural Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Yashvi.jpg"
  },
  {
    name: "Freya Mistry",
    role: "Event Manager At AI Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Freya.jpg"
  },
  {
    name: "Rudra Bhatt",
    role: "Vice President At Coding Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Rudra.jpg"
  },
  {
    name: "Aryan Patel",
    role: "President of Coding Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Aryan.jpg"
  },
  {
    name: "Dhrumil Soni",
    role: "President of Environment Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Dhrumil.jpg"
  },
  {
    name: "Ishit Parikh",
    role: "Passive Member At AI Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Ishit.jpg"
  },
  {
    name: "Manav Patel ",
    role: "Event Manager At Cultural Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Manav.jpg"
  },
  {
    name: "Anuj Dulera",
    role: "Fund Raiser At Environment Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Anuj.jpg"
  },
  {
    name: "Jay Thakkar",
    role: "Active Member At Cultural Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Jay.jpg"
  },
  {
    name: "Om Thakkar",
    role: "Passive Member At Environment Club",
    description: "Branch: IT Semester: 3rd",
    photo: "../images/Profile_image/Om.jpg"
  }
];

// Function to dynamically generate profiles
function createProfiles() {
  const container = document.getElementById('profiles-container');
  members.forEach((member, index) => {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    profileCard.innerHTML = `
      <img src="${member.photo}" alt="${member.name}">
      <h2>${member.name}</h2>
  
    `;

    profileCard.addEventListener('click', () => showPopup(member));
    container.appendChild(profileCard);
  });
}

// Function to show popup with member details
function showPopup(member) {
  const popup = document.getElementById('popup');
  document.getElementById('popup-image').src = member.photo;
  document.getElementById('popup-name').textContent = member.name;
  document.getElementById('popup-role').textContent = member.role;
  document.getElementById('popup-description').textContent = member.description;
  popup.classList.remove('hidden');
}

// Function to hide popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}

// Initialize profiles on page load
document.addEventListener('DOMContentLoaded', () => {
  createProfiles();
  document.getElementById('close-popup').addEventListener('click', hidePopup);
});