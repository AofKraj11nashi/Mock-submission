[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/CRgtaUTR)

# Skill Swap Hub: 

Student ID : 2407015

Module Code: COM4113

Assignment Title: Skill Swap Hub - Front-End Web Application Prototype

Module Leader: Dr Yashar Baradaranshokouhi

## Table of Contents
- 

# Choice of Tech Stack and Justification
This project follows an end-to-end front-end development process, progressing from research and planning through to user interface design and implementation. The chosen tools and technologies were selected to support rapid prototyping, usability testing, and clear demonstration of front-end development and UI/UX principles within the scope of the project.

## Research and Planning

The initial phase of the project focused on requirements analysis, idea organisation, and content planning. Tools such as Google Docs and Google NotebookLM were used to document project objectives, define core features, and structure the overall content hierarchy.

This planning stage ensured that the application requirements were clearly defined before moving into design and implementation, reducing rework and improving development efficiency.

## UI and UX Design

### User Experience (UX) Design Stage

The user experience design process focused on defining user journeys, navigation structure, and interaction flow.

Wireframing: 

- Low-fidelity wireframes: Created using PowerPoint to quickly sketch layout ideas and explore page structure.

- Mid- and high-fidelity wireframes: Developed in Figma to refine layouts and simulate realistic user interactions.

User Flows and Journey Maps: 

Created using <b>Figma</b> and <b>Miro</b> to visualise how users move through the system and complete key tasks.

Sitemap: 

Designed in <b>Figma</b> to represent the hierarchical structure of application pages and navigation paths.

### User Interface (UI) Design Stage

The user interface design phase focused on translating wireframes into consistent, visually coherent interfaces.

Tools:

<b>Figma</b> was used to design UI components, layouts, and complete screen designs.

Deliverables: Figma Design Outputs

The following artefacts were produced during the design phase:

Design System
A reusable collection of colours, typography styles, spacing rules, buttons, icons, and layout components.
This system ensures consistency across the interface and improves maintainability by allowing UI elements to be reused rather than recreated.


- Colour Palette and Typography
Defined font styles, button designs, form inputs, icon usage, spacing, and layout sizing to maintain visual consistency.
![alt text](image-10.png)

- Component Library
Reusable UI components such as buttons, navigation bars, and resource cards.
![alt text](image-11.png)

- Interaction Design
Animations and transitions designed to enhance usability and provide visual feedback.
![alt text](image-12.png)

- Style Guide
Guidelines for consistent use of design elements across the application.
![alt text](image-13.png)

- High-Fidelity Mockups
Complete screen designs created in Figma and used as a reference during implementation.

These are mock-up screens designed include:

Home page

![alt text](image-20.png)

Sign Up page

![alt text](image-18.png)

Log In page

![alt text](image-17.png)

Profile and Edit Profile page

Resource Sharing Page 

![alt text](image-19.png)


Contact Us page

![alt text](image-22.png)

About Us page

![alt text](image-21.png)

## Development stage 

The tech stack for this project was chosen based on several factors, including ease of use, community
support, scalability, and compatibility with project requirements. The following technologies were selected:


## 🛠 Technology Stack

This project was designed in **Figma Make** and implemented using standard front-end web technologies with external libraries loaded via CDN:

- **Tailwind CSS** – Utility-first CSS framework for layout and styling  
- **Lucide Icons** – Scalable vector icons for UI elements  
- **Google Fonts** – Typography using the `Inter` font family  
- **Custom CSS** – Additional styling and overrides located in `run.css`

---

## 🎨 Design Assets

The user interface components and icons used in this project were designed in **Figma**.

- **SVG Assets:** Icons and vector graphics were exported directly from Figma layers.
- **CSS & Styles:** Layout values, colours, spacing, shadows, and typography were derived from **Figma Dev Mode (Inspect)** and manually implemented in code.

---

## 🛠 Technical Implementation

### 🎨 Design System & Theming (Design Tokens)

To maintain visual consistency with the high-fidelity Figma designs, the project implements a **centralised design system** using **CSS variables (design tokens)** defined in the `:root` selector of the stylesheet.

This approach allows for global styling consistency and makes future updates easier and more maintainable.

---

### 🎯 Colour Palette & Variables

| Variable | Description | Value |
|--------|-------------|-------|
| `--primary` | Primary brand colour | `#1E90FF` (Dodger Blue) |
| `--bg-main` | Main background colour | `#F8F8FF` (Ghost White) |
| `--text-primary` | Primary text colour | `#111827` |
| `--radius` | Default border radius | `0.75rem` |

---

### ✍ Typography

The project primarily uses **Inter**, imported via Google Fonts, with system sans-serif fonts as fallbacks. Font sizes and weights were matched to the original Figma design specifications to ensure visual consistency.

---

### 🧩 Design Tokens Usage

Design tokens are used for UI properties that require precise control and consistency:

- **Colours:** Centralised definitions for backgrounds, accents, and borders  
- **Spacing & Shapes:** Consistent border radii (e.g. `--radius-sm` to `--radius-lg`) applied across cards and buttons  
- **Shadows:** Custom shadow variables defined to match Figma’s soft elevation effects  

All design token definitions can be found at the top of the `run.css` file.

## 🎨 Design-to-Code Workflow
The user interface was designed in **Figma**, and design assets were translated into code using a design-to-code workflow.

Assets such as **SVG icons, images, and design specifications** (including spacing, shadows, gradients, and typography) were exported or referenced using **Figma Make**.
  1. Front-end:
- HTML5: The standard markup language for creating web pages, providing structure and semantics.
![alt text](image.png)
- CSS3:/ Tailwind CSS: A utility-first CSS framework that allows for rapid UI development and consistency across components with pre-defined classes. Custom styles are layered where needed.
![alt text](image-1.png)
- JavaScript: The primary programming language for web development, enabling interactivity and dynamic content.
![alt text](image-2.png)

 2. Development Tools:
- Visual Studio Code: A powerful code editor with extensive extensions for web development.

![alt text](image-6.png)
- Git: Version control system to track changes and collaborate on code.

![alt text](image-8.png)
- GitHub: Hosting platform used as a remote repository and submission platform via GitHub Classroom.

![alt text](image-7.png)

Technologies Researched but Not Implemented

The following technologies were explored during the planning phase but were not implemented in this prototype, as the project scope focuses on front-end development:

React.js

Node.js

MongoDB / Firebase

Fetch API / Axios for backend communication

These technologies are discussed in the Future Considerations section as part of a proposed full-stack extension of the system.

# Version control 
- This project uses Git for version control and GitHub as the remote repository. Version control ensures that the project is tracked changes over time due to commit message which record every update to the codebase with commit and push stored in an online repository. Therefore, be able to access the code remotely with different devices. GitHub classroom wasd used ad the hosting environment for this assignment, allowing commits and projects updates to be monitored throughout the development to see progress and track completed milestones.

Commands used for Git
git init

git add

git remote add origin

git push -u origina main

git commit -m "commit message"

git pull

git status

git log

git clone <repository link>

git branch <branch name>

git checkout <branch name>

git merge <branch name>

git stash

git reset --hard <commit ID>

git revert <commit ID>

git fetch

git rebase <branch name>

git tag <tag name>

# Project Overview

Skill Swap Hub is a front-end web application prototype designed to support peer-to-peer skill sharing within a community. The platform allows users to browse shared learning resources, manage a personal profile, and contribute content in a structured and user-friendly environment.

This project focuses on the planning, design, and front-end implementation of the system as a Minimum Viable Product (MVP). It demonstrates the use of modern web technologies, user-centred design principles, and ethical considerations, while using mock data and simulated functionality where appropriate. The application is served as a foundation for future full-stack development.

# Installation instructions
This project is a front-end web application prototype built using HTML, CSS, and JavaScript. It does not require a build process, package manager, or server-side setup to run locally.

To run the application locally, follow these steps:
1. **Clone the Repository:**
   Open your terminal or command prompt and run the following command to clone the repository to the local machine:
   ```
   git clone <repository-link>
   ```
   Replace `<repository-link>` with the actual URL of the GitHub repository.
2. **Navigate to the Project Directory:**
    Change into the project directory using the following command:
    ```
    cd <project-directory>
    ```
    Replace `<project-directory>` with the name of the cloned repository folder.

3. **Open the the folder in your preferred code editor (e.g., Visual Studio Code)**.
4. **Open the Application in a Web Browser:**
   Launch the project using of the following files:
   - run.html - Main application interface (Start with Sign Up or Log In - primary entry points to the app).
  - testing1.html – Landing page for guest users, featuring a loading indicator followed by options to Sign Up or Log In, which navigate to run.html.
  
 - Using Live Server extension in Visual Studio Code (recommended for best experience):

1. Install the Live Server extension in Visual Studio Code

2. Right-click run.html or testing1.html

3. Select “Open with Live Server”

The application will open automatically in default browser.


**Technical challenges**
- During the development of Skill Swap Hub, several technical challenges were encountered and addressed:
1. **Responsive Design Implementation:**
   - Challenge: Ensuring the application layout adapted seamlessly across various screen sizes and devices.
   - Solution: Utilised Tailwind CSS's responsive utility classes to create flexible layouts and tested extensively on different devices to ensure usability.
2. **State Management:**
    - Challenge: Managing user interactions and dynamic content without a back-end.
    - Solution: Used JavaScript to simulate state changes and interactions, employing local storage for temporary data persistence during the session.
3. **Icon Integration:**
    - Challenge: Incorporating scalable vector icons that matched the design specifications.
    - Solution: Used Lucide Icons via CDN, ensuring icons were lightweight and easily styled with CSS.
4. **Cross-Browser Compatibility:**
    - Challenge: Ensuring the application functioned correctly across different web browsers.
    - Solution: Conducted testing on major browsers (Chrome, Firefox, and Safari) and using OpenAI tools to apply CSS prefixes and fallbacks to address compatibility issues.
5. **Installation and Configuration of Development Tools:**
   - Challenge: Setting up the development environment with necessary tools like Git, and Node.js. During the development process, I encountered initial challenges when installing Node.js and executing commands using the Windows Command Prompt and PowerShell. As this project is primarily front-end focused, my familiarity with command-line environments was limited at the outset, which led to issues when attempting to verify installations and run commands. One of the main challenges involved environment configuration, where Node.js commands such as node and npm were not recognised by the system. This issue was caused by the Node.js installation path not being correctly added to the system’s environment variables on Windows. Node.js is essential for creating and running a React Native application, as it provides the JavaScript runtime environment required to install dependencies, manage packages, and execute development tools such as React Native CLI or Expo. Without Node.js, it would not be possible to initialise a React Native project, run the development server, or bundle JavaScript code for mobile platforms. For Skill Swap Hub, Node.js acts as the foundation that enables the transition from a web-based prototype into a cross-platform mobile application. React Native relies heavily on Node.js to compile, bundle, and serve JavaScript during development, making it a critical component even though the application logic itself is written in JavaScript and TypeScript.
   - Solution: To resolve this, I reviewed official documentation and verified the installation by restarting the system and checking the PATH configuration to ensure Node.js was accessible globally from the command line. Another difficulty arose from differences between Command Prompt and PowerShell, particularly in how commands were executed. By testing commands in both shells, I developed a clearer understanding of their behaviour and learned how to adapt command usage accordingly. This included identifying appropriate shells for specific tasks and recognising common command-line error messages. Through this process, I improved my ability to troubleshoot installation issues, interpret system feedback, and independently resolve configuration problems.




# Project plan
- Here are my project plan and checklist for this assessment:

Timeline of developing features/requirements:

| Phase | Key milestones | Start Date | End Date |
|-------|----------------|------------|----------|
| Week 1: Planning | - Understand assessment brief<br>- Research similar platforms<br>- Choose tech stack<br>- Create GitHub repo<br>- Draft wireframes<br>- Start ReadMe.md |20 Nov 2025 | 26 Nov 2025 |
| Week 2: Development | - Set up development environment<br>- Create a professional gantt chart<br>- create and break-down sitemap <br>- Build Homepage<br>- Build Profile Page<br>- Build Resource Sharing Page<br>- Add Search & Filter<br>- Ensure responsive design<br>- Build a static and dynamic Figma <br>- Write about User Journey | 7 Nov 2025 | 4 Dec 2025 |
| Week 3: Testing and Documentation | - Test UI<br>- Add mock data<br>- Implement feedback system<br>- Complete ReadMe.md<br>- Add in-code comments<br>- Prepare zip file for submission | | 5 Dec 2025 | 11 Dec 2025 |
| Week 4: Finalise product and Submission | - Upload zip file to Moodle<br>- Ensure GitHub repo is up to date | 12 Dec 2025 | 20 Dec 2025 |


Here is a Gantt chart to visualise the project timeline and milestones from Microsoft Excel:
![alt text](image-24.png)

![alt text](image-25.png)

![alt text](image-26.png)


![alt text](image-23.png)

# User Journey

The user journey for Skill Swap Hub outlines the steps a typical user would take to interact with the platform, from initial access to engaging with core features. The journey focuses on key touchpoints that enhance user experience and facilitate skill sharing within the community.
1. **Accessing the Platform:**
   - The user visits the Skill Swap Hub website via a web browser on their device (desktop, tablet, or mobile).
   - They are greeted with a welcoming landing page that highlights the platform's purpose and benefits.
2. **Creating an Account:**
    - The user clicks on the "Sign Up" button to create a new account.
    - They fill out a registration form with basic information (name, email, password) and agree to the terms of service.
    - Upon submission, they receive a confirmation email to verify their account.
3. **Logging In:**
    - The user returns to the platform and clicks on the "Log In" button.
    - They enter their credentials and access their personalized dashboard.
4. **Exploring Resources:**
    - The user navigates to the "Resource Sharing" section to browse available learning materials.
    - They use search and filter options to find resources relevant to their interests and skill levels.
5. **Viewing Resource Details:**
    - The user clicks on a resource to view detailed information, including descriptions, ratings, and comments from other users.
6. **Contributing Content:**
    - The user decides to share their own learning resource.
    - They navigate to the "Share Resource" page, fill out a submission form with details about the resource, and upload any necessary files or links.
    - Upon submission, the resource is added to the platform for other users to access.
7. **Managing Profile:**
    - The user visits their profile page to update personal information, view shared resources, and track their activity.
    - They can edit their profile details, change their password, and manage notification preferences.
8. **Engaging with the Community:**
    - The user interacts with other community members by leaving comments on resources, providing feedback, and participating in discussions.
    - They may also rate resources to help others identify valuable content.
9. **Logging Out:**
    - After completing their activities, the user logs out of their account to ensure security.
    


# Legal and ethical consideration
This project has been developed with an understanding of legal responsibilities and ethical best practices in web/app development. As the platforms allows users to upload and share digital content. therefore, it must comply with standards around accessibility, data protection, user rights, and intellectual property.

 ### WCAG Guidelines:
 The Web Content Accessibility guidelines (WCAG) to ensure digital services are employable to all users. including those with disabilities. This project follow WCAG principles such as 
 | Principle | Description |
|-----------|-------------|
| Using semantic HTML  | For clear structure and screen reader compatibility |
| Providing alternative text for images | To describe visual content for users with visual impairments |
| Ensuring keyboard navigation | For users who cannot use a mouse |
| Using sufficient color contrast | To ensure readability for users with visual impairments |
| Providing clear headings and labels | To help users navigate content easily |
| Ensuring responsive design | To accommodate different devices and screen sizes |
| Responsive layouts | To ensure the site works on different screen sizes and orientations, which helps users who zoom in or use assistive tech on mobile. For example, using flexible CSS units (rem % vh) and testing layouts at different breakpoints.

### Data Protection Laws:
This project adheres to data protection laws such as the General Data Protection Regulation (GDPR)
Skill Swap Hub is committed to protecting user privacy and handling personal data in compliance with GDPR. 
Skill Swap Hub collects limited usre data to deliver relevant services and improve user experience. This includes:
- Basic profile information (e.g., name, email)
- Usage data (e.g., pages visited, interactions)
Skill Swap Hub does not share personal data with third parties without user consent, except as required by law. User data is stored securely and retained only as long as necessary for the purposes outlined in the privacy policy.
Users have the right to access, correct, or delete their personal data by contacting Skill Swap Hub.

🛠️ Data Collection Methods & Use Cases

1. Device & Technical Information

- Device type (web, iOS, Android)

- Browser or operating system version

- IP address (for security and fraud prevention)

2. Contextual Data
- Pages visited and time spent on each page.(Time of visit, frequency of visits, bounce rates)
- Interaction data (clicks, scrolls)
- Referral source (how the user found the platform)

3. Behavioral Data
- Resource preferences (types of resources viewed or saved)
- Search queries entered by users
- User feedback and ratings on resources

4. Personalisation & Improvement
- Tailoring content recommendations based on user behavior
- Identifying popular resources to improve offerings
- Enhancing user experience through interface adjustments based on usage patterns

5. Pricacy & Compliance and Best Practices
This project complies with GDPR
and the Data Protection Act 2018 (DPA 2018). Key considerations include:
- User consent for data collection and processing
- Right to access and delete personal data
- Data minimisation and purpose limitation
- Consent management user must explicitly opt in to personal data collection.
- Anonymisation and pseudonymisation of data where possible
- Secure storage and transmission of personal data
- Privacy by design and default



### Equality Act 2010:
The Equality Act 2010 requires that this project does not discriminate against users based on protected characteristics
such as age, disability, gender, race, religion, or sexual orientation. This includes:
- Ensuring equal access to services for all users
- Providing reasonable adjustments for users with disabilities
- Avoiding discriminatory language or imagery in content and design

### Intellectual Property Rights:
This project respects intellectual property rights by:
- Attribution & Credits:
This means users responsibility for upload content. Whenver a link is shared, users are encouraged to include mention original platforms and avoid removing author branding.

- Ownership & Licensing: 
Adding an <b>“All Rights Reserved”</b> notice is applied to user-generated content to formally clarify ownership rights. Users retain full ownership and all associated intellectual property rights in their submitted content. By contributing content, users grant Skill Swap Hub a limited right to host, display, and facilitate the sharing of such content solely for educational and collaborative purposes within the platform.

- Right to Removal
If an external creator has a concern about their work being shared, they can request the link be removed, ask for clearer attribution, or report misuse or misrepresentation.
Skill Swap Hub will respect these requests to protect creators’ rights and maintain an ethical learning environment.

- Platform Rights:
By uploading content, users grant Skill Swap Hub a limited licence to display, duplicate, and distribute their content within the platform for the purpose of enabling learning and collaboration.
This licence is non-exclusive (users can reuse content elsewhere).
Revocable (users can remove their content at any time).



- Respecting Intellectual Property

Skill Swap Hub promotes a culture of respect for creative work. Users are encouraged to:

cite sources and authors where applicable, provide a link to original content where possible and acknowledge inspirations or references.

# Risk assessment
- Project Risks for COM4113 Assignment (Skill Swap Hub)
## Risk Assessment Table
| Risk Category | Risk Description | Potential Impact | Mitigation Strategy |
|--------------|------------------|------------------|---------------------|
| Technical | Limited experience with front-end technologies (HTML, CSS, JavaScript, Tailwind CSS, React) | Development delays, UI bugs, or incomplete features | Use documentation and tutorials, develop features incrementally, and test regularly |
| Version Control | Loss of code or accidental overwriting of changes | Project corruption or incomplete submission | Commit and push code regularly to GitHub with clear commit messages |
| Usability | User interface is not responsive or difficult to navigate | Poor user experience and reduced usability | Apply UI/UX principles, test across screen sizes, and refine based on feedback |
| Ethical & Legal | Non-compliance with GDPR, Data Protection Act 2018, or accessibility standards | Legal issues or exclusion of users | Avoid collecting personal data, follow accessibility guidelines (WCAG), and document data usage |
| Time Management | Underestimating time required for design, development, and testing | Incomplete project or rushed features | Create a detailed project plan with milestones and buffer time |

# Good Software Attributes
- ## Functionality & Correctness: 
The software meets all specified requirements and performs its intended functions accurately as specified in the project plan.
Example (run.html):

Users can browse learning resources, save items, and navigate between views without errors.

Authentication flow correctly redirects users from the guest landing page (testing1.html) to the main application (run.html).

<small>
javascript:

// Navigation logic ensuring correct view rendering
function navTo(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`view-${viewId}`).classList.remove('hidden');
}
</small>


- ## Usability: 
The software is user-friendly, with an intuitive interface and easy navigation, ensuring a positive user experience.
Example (testing1.html):

A loading screen introduces the application before presenting Sign Up and Log In options.

Clear call-to-action buttons guide users into the main interface (run.html).

Example (run.html):

Consistent navigation icons, readable typography, and logical content grouping improve ease of use across devices.

- ## performance & Efficiency:
The software operates efficiently, with fast load times and optimal resource usage, even under varying workloads.
Example:

Static HTML files and CDN-loaded assets (Tailwind CSS, Lucide Icons) reduce initial load time.

The guest landing page (testing1.html) loads quickly before transitioning to the main app.

JavaScript:
<!-- Lightweight CDN usage -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>

- ## Maintainability:
The software is designed for easy maintenance, with clear documentation, modular code structure, and adherence to coding standards.
The codebase is modular and readable, with reusable UI components and centralised configuration values.

Example: Design Tokens (CSS Variables)

:root {
  --primary: #1E90FF;
  --bg-main: #F8F8FF;
  --text-primary: #111827;
  --radius: 0.75rem;
}
Using design tokens allows global UI changes without modifying individual components.

- ## Portability & Interoperability:
The software can be easily deployed and render correctly across different environments and is compatible with other systems and platforms. The application is designed to be portable across multiple devices and interoperable with different platforms, ensuring consistent rendering and behaviour in both web and mobile environments.

Examples (run.html and run.css):

Responsive, mobile-first styling in run.css enables the interface to adapt seamlessly across desktop, tablet, and mobile screen sizes.

Layouts, navigation components, and interactive elements are optimised for touch-based interaction on smaller devices.

The same web application can be rendered reliably in modern browsers and embedded within a React Native WebView without modification.

Example Implementation (Responsive CSS):

/* Mobile-first responsive styling */
@media (max-width: 768px) {
  .nav-sidebar {
    display: none;
  }

  .bottom-nav {
    display: flex;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}


- ## Integrity:
The software ensures data integrity and security, protecting against unauthorised access and data corruption. (Password protection)
The software protects user data and ensures integrity by preventing unauthorised access to protected areas.

Example:

Authentication flow restricts access to run.html until users choose Log In or Sign Up from testing1.html.

Password-related interactions are simulated safely using mock logic without storing sensitive data.

// Simple access control simulation
if (!localStorage.getItem('isLoggedIn')) {
  navTo('auth');
}

- ## Testability:
The software design should allow for easy testing, with clear criteria for success and failure, and support where applicable. Throughout the development lifecycle, the software should be subjected to rigorous testing to identify and fix bugs, ensuring reliability and stability.
The software is designed to support effective testing by separating application state from user interface logic. A centralised state object is used in run.html to control filtering, saved resources, and dynamic content rendering. This structure allows individual features to be tested independently without requiring a back-end system.

Example (State Management in run.html):

const state = {
  browseFilter: "All",
  saved: new Set(),
  resources: []
};


Testing Applications:

Filter Testing:
The browseFilter property can be updated manually to verify that only the correct categories of learning resources are rendered.

Saved Items Testing:
The saved Set enables validation of bookmarking functionality, ensuring resources are added and removed correctly without duplication.

Data Rendering Testing:
The resources array can be populated with mock data to test how the interface responds to different data sets, including edge cases such as empty or large lists.

# Future considerations for scaling

# RealWorld application
## Add a database
Integrate a back-end database (e.g., MongoDB, Firebase) to store user profiles, resources, and interactions persistently.
## Implement user authentication
Add secure user authentication (e.g., OAuth, JWT) to manage user accounts and permissions.
## Create a PIN(Personal Identification Number) system
Implement a PIN system and allow user to create their own PIN for added security during login for faster access to sensitive actions.
## View other users' profiles
Enable users to view and interact with other users' profiles, fostering community engagement.
## Improve search and filtering
Implement advanced search and filtering options to help users find resources more easily.
## Optimize performance
Implement performance optimizations (e.g., lazy loading, caching) to improve load times and responsiveness
## Create a Entity Relationship Diagram (ERD)
Design a comprehensive ERD to map out the data structure and relationships between different entities in the system
## Develop a full API
Build a RESTful or GraphQL API to handle data interactions between the front-end and back-end
## Implement analytics
Add analytics to track user behavior and platform usage for continuous improvement.
## Back-end integration
Connect the front-end with back-end services to enable dynamic content loading and user interactions.
## MERN Stack Development
Develop the application using the MERN stack (MongoDB, Express.js, React.js, Node.js) for a full-stack solution.
## Using Mathematics to improve search algorithms
mean, median, mode, and standard deviation to analyse user search patterns and improve search result relevance.
## Back-end administration panel
Develop an admin panel for managing users, resources, and platform settings.



## References (A-Z)
Coursera Inc. (2025). Coursera: Learn new skills (Version 4.31.1) [Mobile app]. Google Play Store. https://play.google.com/store/apps/details?id=org.coursera.android

Figma. (n.d.). What is the difference between UI and UX? Figma Resource Library. https://www.figma.com/resource-library/difference-between-ui-and-ux/

Figma. (2024). Best practices for building a design system. Figma Blog. https://www.figma.com/blog/design-system-best-practices/

Figma. (2025). Figma Help Center: Components and design systems. https://help.figma.com

GitHub, Inc. (2025a). About Git. GitHub Docs. https://docs.github.com/en/get-started/using-git/about-git

GitHub, Inc. (2025b). About repositories. GitHub Docs. https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories

GitHub, Inc. (2025c). GitHub community guidelines: Respecting intellectual property. https://docs.github.com/en/site-policy/github-terms/github-community-guidelines

Google. (2025). Inter - Google Fonts. https://fonts.google.com/specimen/Inter

GOV.UK. (2025). Data (Use and Access) Act 2025. https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes

Lucide. (2025). Lucide React documentation. https://lucide.dev/guide/packages/lucide-react

Lucide Contributors. (2025). Lucide: Beautiful & consistent icons. https://lucide.dev/

Meta Platforms, Inc. (2025). Instagram [Mobile application software]. Apple App Store. https://www.instagram.com/

Node.js Foundation. (2025). Node.js v20.x documentation. https://nodejs.org/docs/

Skillshare, Inc. (2025). Skillshare: Design & Creativity [Online platform]. https://www.skillshare.com

Slickplan. (2023, August 3). What is a sitemap? Let's break it down simply [Video]. YouTube. https://www.youtube.com/watch?v=GjEIuy9s4is

Tailwind Labs. (2025). Tailwind CSS documentation. https://tailwindcss.com/docs

The Excel Challenge. (2017, April 27). TECH-005 - Create a quick and simple time line (Gantt Chart) in Excel [Video]. YouTube. https://www.youtube.com/watch?v=00s5efQWrgU

UK Parliament. (2010). Equality Act 2010. https://www.legislation.gov.uk/ukpga/2010/15/contents

Unsplash. (2025). Unsplash source. https://unsplash.com/

W3C. (2023). Web content accessibility guidelines (WCAG) 2.2. https://www.w3.org/TR/WCAG22/

W3Schools. (n.d.). Styling React using CSS. https://www.w3schools.com/react/react_css_styling.asp

World Wide Web Consortium. (2024). Web storage (Second edition). W3C Recommendation. https://www.w3.org/TR/webstorage/

















