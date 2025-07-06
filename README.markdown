# Personal Portfolio Website

## Project Overview
This is a responsive Personal Portfolio Website developed as part of the Unified Mentor Internship Program. It showcases skills, projects, education, and contact information through a modern, interactive interface built with HTML, Bootstrap 5, and JavaScript. The site includes smooth scrolling, form validation, a downloadable resume, and a responsive hamburger menu for mobile navigation.

### Technologies Used
- **HTML**: Structures the Home, About, Projects, Contact, and Footer sections.
- **Bootstrap 5**: Provides responsive styling and navbar via CDN.
- **JavaScript**: Implements smooth scrolling, active nav link highlighting, resume download error handling, and contact form validation.

### Features
- **Smooth Navigation**: Fixed navbar with smooth scrolling and active section highlighting.
- **Hamburger Menu**: Responsive mobile navigation with Bootstrap’s navbar toggler (visible below 768px).
- **Home Section**: Introduction with profile image, call-to-action, and resume download button.
- **About Section**: Displays education, work experience, hobbies, and a skills grid.
- **Projects Section**: Responsive project cards with images and hover effects.
- **Contact Section**: Form with client-side validation for name, email, subject, and message.
- **Footer**: Social links to GitHub and LinkedIn.
- **Responsive Design**: Adapts to all screen sizes using Bootstrap’s grid system.
- **Downloadable Resume**: Button to download resume.pdf with error handling.
- **Accessibility**: ARIA labels and keyboard navigation support for navbar and form.
- **Logging**: Console logs for user actions (navigation, form submission, resume download) for debugging.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd personal-portfolio
   ```
3. **Add Assets**:
   - Place `me.jpg` (profile picture), `pro1.png`, `pro2.png`, `pro3.png` (project images), and `resume.pdf` in the project root.
4. **Open the Application**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
   - No additional dependencies are required, as Bootstrap 5 is loaded via CDN.

### How to Use
1. **Navigate the Site**:
   - On desktop, use the navbar to jump to Home, About, Projects, or Contact sections with smooth scrolling.
   - On mobile, click the hamburger icon to toggle the navigation menu.
   - The active section is highlighted in the navbar.
2. **View Content**:
   - **Home**: See the introduction, profile picture, and buttons for contact and resume download.
   - **About**: View education, work experience, hobbies, and a grid of skills.
   - **Projects**: Explore project cards with descriptions and images.
   - **Contact**: Fill out the form with name, email, subject, and message.
   - **Resume**: Click the "Download Resume" button to download `resume.pdf`.
3. **Contact Form**:
   - Enter valid details; invalid inputs (e.g., empty fields or invalid email) show a red error message.
   - On successful submission, a green confirmation message appears, and the form clears.
4. **Resume Download**:
   - If the resume file is unavailable, an alert prompts the user to contact you.

### Project Structure
```
personal-portfolio/
├── index.html      # Main HTML file for the portfolio
├── script.js       # JavaScript for interactivity
├── me.jpg          # Profile picture
├── pro1.png        # Project image 1
├── pro2.png        # Project image 2
├── pro3.png        # Project image 3
├── resume.pdf      # Downloadable resume
└── README.md       # Project documentation
```

### Code Quality
- **Modular**: Separate JavaScript functions for scrolling, resume download, and form validation.
- **Safe**: Client-side form validation and resume download error handling.
- **Testable**: Interaction logic is isolated for potential unit testing.
- **Maintainable**: Clear HTML structure, Bootstrap classes, and commented JavaScript.
- **Portable**: Runs in any modern browser with only Bootstrap CDN dependency.
- **Logging**: Console logs for navigation, form submission, and resume download attempts.

### Responsiveness
- Uses Bootstrap’s responsive grid and navbar for adaptive layouts.
- Hamburger menu appears on mobile (below 768px) for navigation.
- Skills and project grids stack vertically on smaller screens.
- Tested on screen sizes from 320px to 1200px for accessibility and usability.

