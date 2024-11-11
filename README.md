# AI Resume Review Project - INFO 441 Group 4

## Project Overview
The AI Resume Review application is an intelligent tool designed to assist job seekers in tailoring and refining their resumes for specific job applications. By leveraging AI-powered features, the project aims to streamline the resume customization process, helping users enhance their chances of securing desired roles with tailored, professional-quality resumes.

## Project Goals
- **Customization**: Deliver job-specific resume suggestions based on the analysis of job postings, ensuring that relevant skills and experiences are highlighted effectively.
- **Time Efficiency**: Automate the resume customization process, reducing manual edits and saving users valuable time.
- **Professional Quality**: Enhance resume presentation and structure using industry-standard formats, such as Google’s XYZ method.

## Target Audience
Our application is designed for:
- **Recent Graduates**: Customizing resumes for entry-level job applications.
- **College Students**: Applying for internships or co-op programs.
- **Career Changers**: Transitioning between industries and needing to emphasize relevant skills.
- **Young Professionals**: Seeking promotions or exploring new career opportunities.

## Key Features
1. **Job Posting Analysis**: Users can upload a job posting or provide a URL for analysis. The backend extracts key job requirements using web scraping.
2. **AI-Powered Resume Customization**: Utilizes AI (via GPT API) to format and tailor the user’s resume based on the analyzed job posting requirements.
3. **Downloadable Resumes**: Users can export their customized resumes in PDF or DOCX format.
4. **Resume History**: Users can access and manage their previously generated resumes for future job applications.

## User Stories
- **Login and Authentication**: Users can create accounts, log in, and securely manage their profiles.
- **Job Posting Input**: Users can upload a job posting or provide a URL to initiate the analysis process.
- **AI Resume Generation**: The application generates a customized resume based on the job requirements and user-provided information.
- **Resume Export**: Users can download their customized resumes in PDF or DOCX format.
- **Access Previous Resumes**: Users can view and manage their resume history for easy access and reuse.

## Technical Implementation
- **Frontend**: Built with HTML, CSS, and JavaScript for a responsive user interface.
- **Backend**: Developed using Node.js and Express for server-side logic and API handling.
- **Database**: Utilizes MongoDB for storing user data, job postings, and resume history.
- **AI Integration**: Uses GPT API for natural language processing and resume formatting.
- **Authentication**: Supports MongoDB-based or Azure-based authentication for secure user sessions.

## API Endpoints
| Endpoint                 | Description                                              |
|--------------------------|----------------------------------------------------------|
| **GET /user/login**      | User login functionality.                                |
| **POST /user/register**  | User registration for creating new accounts.             |
| **GET /resume/:id**      | Retrieves a specific generated resume.                   |
| **POST /resume**         | Uploads and saves a newly generated resume to history.   |
| **GET /resume/download/:id** | Exports and downloads the specified resume as a PDF or DOCX file. |

## Future Enhancements
- **Resume Feedback**: Integrate AI-generated feedback to help users improve their resume content.
- **LinkedIn Integration**: Allow users to import their LinkedIn profile data for quicker and easier resume building.
- **Job Matching**: Suggest relevant job openings based on the user’s resume content, enhancing job search efficiency.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-resume-review.git
   cd ai-resume-review