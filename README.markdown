# Personal Portfolio Website

## Project Overview
This is a responsive Personal Portfolio Website developed as part of the Unified Mentor Internship Program. It showcases skills, projects, education, and contact information through a modern, interactive interface built with HTML, Tailwind CSS, and JavaScript. The site includes smooth scrolling, form validation, and a downloadable resume.

### Technologies Used
- **HTML**: Structures the Home, About, Projects, Contact, and Footer sections.
- **Tailwind CSS**: Provides responsive styling via CDN.
- **JavaScript**: Implements smooth scrolling, active nav link highlighting, and contact form validation.

### Features
- **Smooth Navigation**: Fixed navbar with smooth scrolling and active section highlighting.
- **Home Section**: Introduction with profile image and call-to-action button.
- **About Section**: Displays education, work experience, and hobbies in a grid layout.
- **Projects Section**: Responsive project cards with images and hover effects.
- **Contact Section**: Form with client-side validation for name, email, subject, and message.
- **Footer**: Social links to GitHub and LinkedIn.
- **Responsive Design**: Adapts to all screen sizes using Tailwind CSS.
- **Downloadable Resume**: Link to download a resume PDF.

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
   - No additional dependencies are required, as Tailwind CSS is loaded via CDN.

### How to Use
1. **Navigate the Site**:
   - Use the navbar to jump to Home, About, Projects, or Contact sections with smooth scrolling.
   - The active section is highlighted in the navbar.
2. **View Content**:
   - **Home**: See the introduction and profile picture.
   - **About**: View education, work experience, and hobbies.
   - **Projects**: Explore project cards with descriptions and images.
   - **Contact**: Fill out the form with name, email, subject, and message.
   - **Resume**: Click the "Resume" link to download the PDF.
3. **Contact Form**:
   - Enter valid details; invalid inputs (e.g., empty fields or invalid email) show an error.
   - On successful submission, a confirmation message appears, and the form clears.

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
- **Modular**: Separate JavaScript functions for scrolling and form validation.
- **Safe**: Client-side form validation prevents invalid submissions.
- **Testable**: Interaction logic is isolated for potential unit testing.
- **Maintainable**: Clear HTML structure and Tailwind classes for easy updates.
- **Portable**: Runs in any modern browser with only Tailwind CSS CDN dependency.

