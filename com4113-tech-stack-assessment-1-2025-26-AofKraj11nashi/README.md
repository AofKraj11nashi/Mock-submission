[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/CRgtaUTR)

# Choice of tech stack
This project follows an end-to-end development. 
At the beginning phase of this project. 
## <small>Research and Planning

The process begin with front-end implementation and testing. The process begins with organsing ideas and requirements using Google NotebookLM and Google Docs to ensure the project goals and content strcuture are clearly defined.
## UI and UX Design 

### <large>User experience design stage

Wireframe diagram:
- Low-fidelity: PowerPoint (Sketch ideas into prototype)
- Mid/High-fidelity: Figma (Create a more detailed and interactive prototype)

User Flows / Journey Maps:

- Figma, Miro 

Sitemap:

- Figma (Provide a hierarchical diagram )

### <large>User interfaces design stage
Tools:

- Figma for components and full visual design

Deliverables:
## Figma Designs Mockups
here are some graphical mockups for the user interface / wireframe diagrams with mid-fidelity that I have created using Figma Make:

- Design system process
(Library of reusable styles and components)
A design system is a collection of reusable styles and components—like colours, text styles, buttons, icons, and layout rules—that keep the designs consistent and easy to build. Instead of recreating elements every time, this pieces can be reusable across the project. Therefore, it escalates the workflow and maintain consistency in the user interface designs.

- Colour palette
(Typography, buttons, forms, icons, layout sizing and spacing)
![alt text](image-10.png)

- Component library
(Button styles, navbars, cards)
![alt text](image-11.png)

- Interaction design
(Animations, transitions)
![alt text](image-12.png)

-style guide
(Guidelines for using design elements)
![alt text](image-13.png)
- Low-fidelity wireframes samples
(Sketch initial layouts)

- High-fidelity mockups samples
(Export assets from Figma to code)

Home Page Mockup

![alt text](image-20.png)

Sign Up Page Mockup

![alt text](image-18.png)

Log In Page Mockup

![alt text](image-17.png)

Profile Page Mockup

Resource Sharing Page Mockup

![alt text](image-19.png)

Edit Profile Page Mockup



Contact Us Page Mockup

![alt text](image-22.png)

About Us Page Mockup

![alt text](image-21.png)

Settings Page Mockup


















## <small> Development stage </small>
### <large> Tech stack selection and justification </large>

The tech stack for this project was chosen based on several factors, including ease of use, community
support, scalability, and compatibility with project requirements. The following technologies were selected:
  1. Front-end:
- HTML5: The standard markup language for creating web pages, providing structure and semantics.
![alt text](image.png)
- CSS3:/ Tailwind CSS: A utility-first CSS framework that allows for rapid UI development and consistency across components with pre-defined classes. Custom styles are layered where needed.
![alt text](image-1.png)
- JavaScript: The primary programming language for web development, enabling interactivity and dynamic content.
![alt text](image-2.png)

 2. Frameworks/Libraries:
- React.js: A popular JavaScript library for building user interfaces, particularly single-page applications.
![alt text](image-3.png)

- Fetch API/Axios: (Optional) For making HTTP requests to interact with back-end services and APIs.
 


 3. Back-end:
 - Nodejs: Used for server-side development, allowing for JavaScript to be used on both the front-end and back-end.
 ![alt text](image-4.png)
 - MongoDB / Firebase: NoSQL databases that provide flexibility in data modeling and document storage and scalability for handling user-generated content, and bookmark metadata.
 ![alt text](image-5.png)

 4. Development Tools:
- Visual Studio Code: A powerful code editor with extensive extensions for web development.

![alt text](image-6.png)
- Git: Version control system to track changes and collaborate on code.

![alt text](image-8.png)
- GitHub: Hosting platform for version control and collaboration.

![alt text](image-7.png)

    
    
# Version control 
- This project uses Git for version control and GitHub as the remote repository. Version control ensures that the project is tracked changes over time due to commit message which record every update to the codebase with commit and push stored in an online repository. Therefore, be able to access the code remotely with different devices. GitHub classroom wasd used ad the hosting environment for this assignment, allowing commits and projects updates to be monitored throughout the development to see progress and track completed milestones.

Commands used for Git
git init
git add
git remote add origin
git push -u origina main

# Project Overview

Skill Swap Hub is a front-end web application prototype designed to support peer-to-peer skill sharing within a community. The platform allows users to browse shared learning resources, manage a personal profile, and contribute content in a structured and user-friendly environment.

This project focuses on the planning, design, and front-end implementation of the system as a Minimum Viable Product (MVP). It demonstrates the use of modern web technologies, user-centred design principles, and ethical considerations, while using mock data and simulated functionality where appropriate. The application is served as a foundation for future full-stack development.


# Installation instructions
To run this project locally, follow these steps:
1. Clone the repository:
    ```bash
    git clone

2. install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000` to view the application.
    ```
5. For production build, run:
    ```bash
    npm run build
    ```
    ```
6. For testing, run:
    ```bash
    npm test
    ```
    ```
7. For linting, run:
    ```bash
    npm run lint
    ```
    ``` bash
install nodejs
node -- version
download nodejs from https://nodejs.org/en/download/
    ```
    ```



# Project plan
- Here are my project plan and checklist for this assessment:

Timeline of developing features/requirements:

| Phase | Key milestones | Start Date | End Date |
|-------|----------------|------------|----------|
| Week 1: Planning | - Understand assessment brief<br>- Research similar platforms<br>- Choose tech stack<br>- Create GitHub repo<br>- Draft wireframes<br>- Start ReadMe.md |20 Nov 2025 | 26 Nov 2025 |
| Week 2: Development | - Set up development environment<br>- Create a professional gantt chart<br>- create and break-down sitemap <br>- Build Homepage<br>- Build Profile Page<br>- Build Resource Sharing Page<br>- Add Search & Filter<br>- Ensure responsive design<br>- Build a static and dynamic Figma <br>- Write about User Journey | 7 Nov 2025 | 4 Dec 2025 |
| Week 3: Testing and Documentation | - Test UI<br>- Add mock data<br>- Implement feedback system<br>- Complete ReadMe.md<br>- Add in-code comments<br>- Prepare zip file for submission | | 5 Dec 2025 | 11 Dec 2025 |
| Submission | - Upload zip file to Moodle<br>- Ensure GitHub repo is up to date | 12 Dec 2025 | 12 Dec 2025 |

![alt text](image-23.png)

# User Journey
This report outlines the user journey through essential features, interaction flow, rational behind the platform's design decisions

Primary Use Cases - following <b>index.html</b> structure:

<b>UC-01: Access Platform</b>

Actor: User
Description: The user accesses the Skill Swap Hub web application and is presented with a loading screen followed by the home page.
Outcome: The user reaches the main landing interface and can begin navigation.

<b>UC-02: Browse Resources</b>

Actor: User
Description: The user navigates to the Browse section to view available resource cards representing community-contributed content.
Outcome: The user can view resource previews and select individual resources for more details.

<b>UC-03: View Resource Details</b>

Actor: User
Description: The user selects a resource card to open a modal displaying detailed information about the selected resource.
Outcome: The user views expanded content and engagement indicators.

<b>UC-04: Register / Log In (Simulated)</b>

Actor: User
Description: The user submits login or sign-up details through the authentication interface. The system simulates authentication without storing credentials.
Outcome: The user is granted access to the dashboard interface.

<b>UC-05: Access User Dashboard</b>

Actor: User
Description: After authentication, the user is redirected to a personalized dashboard that displays account-related features.
Outcome: The user can navigate between profile, content, bookmarks, and resource submission sections.

<b>UC-06: Edit User Profile</b>

Actor: User
Description: The user accesses the Edit Profile section to update personal information.
Outcome: Profile changes are reflected in the interface.

<b>UC-07: Upload Profile Image (Client-Side Preview)</b>

Actor: User
Description: The user uploads a profile image via a file selection interface. The system displays a preview of the image using client-side processing.
Outcome: The user sees an updated profile image without server-side storage.



## Goal and Objective 
The main goals are
-
- User personas
(Define target users)
- User scenarios
(Storyboards of user tasks)
-

-

-

## Core features (Explained)
1.1 User authentication
1.2 User profile managament 
1.3 Resource and content management
4.4 Navigation
4.5 System screens overview

Core screens
1. Home / Landing
2. Log In
3. Sign Up
4. Forgot password
5. Edit Profile
6. Profile 
7. Profile photo upload
8. Resource list
9. Resource deatils
10. Post a resource
11. Contact Us
12. Settings

Optional screens
1. User contribution
2. Search results
3. Bookmarks / Favorites


## Design Principles
1.1 Accessibility
1.2 Clarity
1.3 User centric design 

## How users interact with the system
1.1 User flows
1.2 Navigation structure
1.3 Interaction patterns


## Target Users


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
and the Data Protection Act 2018 (DPA 2018). Key considerations include:
- User consent for data collection and processing
- Right to access and delete personal data
- Data minimization and purpose limitation
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
- Project Risks for COM4113 Assignment
1. Techincal Risks
Risk: Lack of experience with chosen tech stack (React, Tailwind CSS).
Impact: Delays in development, bugs in UI.

2. Version Control Risks
Risk: Losing code or excessive changes.
Impact: Project corruption or incomplete submission.
Mitigating Strategy: We can mitigate this by regular commits and pushes to GitHub.

3. Usuability Risks
Risk: UI not responsive or difficult to navigate.
Impact: Poor user expereince.

4. Ethical & Legal Risks
Risk: Non-compliance with GDPR, DPA 2018, or accessibility standards.


# Good Software Attributes
- ## Functionality & Correctness: 
The software meets all specified requirements and performs its intended functions accurately as specified in the project plan.
- ## Usability: 
The software is user-friendly, with an intuitive interface and easy navigation, ensuring a positive user experience.
- ## performance & Efficiency:
The software operates efficiently, with fast load times and optimal resource usage, even under varying workloads.
- ## Maintainability:
The software is designed for easy maintenance, with clear documentation, modular code structure, and adherence to coding standards.
- ## Portability & Interoperability:
The software can be easily deployed and render correctly across different environments and is compatible with other systems and platforms.
- ## Integrity:
The software ensures data integrity and security, protecting against unauthorised access and data corruption.
- ## Testability:
The software design should allow for easy testing, with clear criteria for success and failure, and support where applicable. Throughout the development lifecycle, the software should be subjected to rigorous testing to identify and fix bugs, ensuring reliability and stability.

# Future considerations for scaling

# RealWorld application
# Add a database
Integrate a back-end database (e.g., MongoDB, Firebase) to store user profiles, resources, and interactions persistently.
# Implement user authentication
Add secure user authentication (e.g., OAuth, JWT) to manage user accounts and permissions.
# Enhance resource management
Allow users to upload, edit, and delete resources directly through the platform.
# Improve search and filtering
Implement advanced search and filtering options to help users find resources more easily.
# Add social features
Incorporate features like comments, likes, and sharing to foster community engagement.
# Optimize performance
Implement performance optimizations (e.g., lazy loading, caching) to improve load times and responsiveness








# Checklist- [X / Y] Project plan with timeline and milestones
- [x] Tech stack selection and justification
- [x] Version control strategy
- [x] User journey description with core features and design principles
- [x] Legal and ethical considerations
- [x] Risk assessment
- [x] Good software attributes
- [x] Future considerations for scaling   
- [x] Installation instructions
- [x] Project overview
- [x] Well-documented README.md file
- [x] In-code comments explaining key sections of code
- [x] Zip file of the complete project for submission
- [x] GitHub repository link for version control tracking
- [x] Screenshots or screen recordings demonstrating core features

## Task Details

| Task | Status | Explanation |
|------|--------|-------------|
| Choice of tech stack | [YES ] | Select and justify the technologies used (HTML, CSS, JS, frameworks, tools) |
| Version control | [ YES] | Set up GitHub repo, workflow, commits, branching |
| Project overview | [ ] | Write a short summary of project purpose and goals |
| Installation instructions | [ ] | Describe how to install/run the project |
| User journey | [ ] | Create journey maps showing how users move through the system |
| Core features | [ ] | List and justify required features |
| Entity Relationship diagram | [ ] | Draw ERD for data structure across the system |
| Wireframes (All screens) | [ ] | Low/mid/high fidelity screens for each feature |
| Legal and ethical considerations | [ ] | Address data privacy, accessibility, copyright |
| Risk assessment | [ ] | Identify and mitigate potential project risks |
| Good software attributes | [YES ] | Discuss maintainability, scalability, usability |
| Future considerations for scaling | [ ] | Outline plans for future growth and enhancements |


## References
- The Excel Challenge. (2017, April 27).TECH-005 - Create a quick and simple Time Line (Gantt Chart) in Excel [Video]. YouTube. https://www.youtube.com/watch?v=00s5efQWrgU&list=LL&index=8
- https://nodejs.org/en/
- https://figma.com/
- https://www.w3.org/WAI/standards-guidelines/wcag/
- Slickplan. (2023, August 3).What is a sitemap? Let's break it down Simply [Video]. YouTube. https://www.youtube.com/watch?v=GjEIuy9s4is
- Meta Platforms, Inc. (2025). Instagram [Mobile application software]. Apple App Store. https://www.instagram.com/
Figma. (n.d.). What is the difference between UI and UX? Figma Resource Library. https://www.figma.com/resource-library/difference-between-ui-and-ux/
W3Schools. (n.d.). Styling React using CSS. W3Schools. https://www.w3schools.com/react/react_css_styling.asp
GitHub, Inc. (2025). About repositories. GitHub Docs. https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories
- GitHub, Inc. (2025). About Git. GitHub Docs. https://docs.github.com/en/get-started/using-git/about-git











