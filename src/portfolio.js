/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhanu's Portfolio",
  description:
    "B.Tech Computer Science & Systems Engineering student at KIIT, passionate about AI",
  og: {
    title: "Bhanu Kumar Dev Portfolio",
    type: "website",
    url: "https://bhanukumardev.github.io/masterPortfolio",
  },
};

//Home Page
const greeting = {
  title: "Bhanu Kumar Dev",
  logo_name: "Bhanu Kumar Dev",
  nickname: "bhumi_bhanu_dev",
  subTitle:
    "B.Tech Computer Science & Systems Engineering student at KIIT, passionate about AI",
  resumeLink:
    "https://drive.google.com/file/d/1wHwv-g8fAt_Uw0_9eCVJhvXdvAdWW9X5/view?usp=drive_link",
  portfolio_repository: "https://github.com/bhanukumardev/masterPortfolio",
  githubProfile: "https://github.com/bhanukumardev",
};

const socialMediaLinks = [
  /* My Social Media Link */
  // github: "https://github.com/bhanukumardev",
  // linkedin: "https://www.linkedin.com/in/bhanu-kumar-dev-97b820313",
  // gmail: "kumarbhanu818@gmail.com",
  // facebook: "https://www.facebook.com/profile.php?id=100076607474743",
  // instagram: "https://www.instagram.com/bhumi_bhanu_dev/"

  {
    name: "Github",
    link: "https://github.com/bhanukumardev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhanu-kumar-dev-97b820313",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kumarbhanu818@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100076607474743",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhumi_bhanu_dev/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// skills.js

const skills = {
  data: [
    {
      title: "Artificial Intelligence & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building foundational AI/ML models and exploring Java-based machine learning libraries",
        "⚡ Strong understanding of data structures, algorithms, and statistics",
        "⚡ Interested in applying ML to real-world problems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: { color: "#F37626" },
        },
      ],
    },
    {
      title: "Programming & Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Java, C, C++",
        "⚡ Experience with OOP, data structures, and algorithmic problem solving",
        "⚡ Developed academic and personal projects using various languages",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: { color: "#007396" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: { color: "#A8B9CC" },
        },
      ],
    },
    {
      title: "Database & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with Oracle SQL/PLSQL for database management",
        "⚡ Familiar with Ubuntu/Linux, AutoCAD, Xilinx Vivado, NI LabVIEW",
      ],
      softwareSkills: [
        {
          skillName: "Oracle",
          fontAwesomeClassname: "logos:oracle",
          style: { color: "#F80000" },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: { color: "#E95420" },
        },
        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autocad",
          style: { color: "#E12026" },
        },
        {
          skillName: "Xilinx Vivado",
          fontAwesomeClassname: "simple-icons:xilinx",
          style: { color: "#E01F27" },
        },
        {
          skillName: "NI LabVIEW",
          fontAwesomeClassname: "simple-icons:ni",
          style: { color: "#FFB800" },
        },
      ],
    },
  ],
};

// education.js

const degrees = {
  degrees: [
    {
      title: "Kalinga Institute of Industrial Technology (KIIT)",
      subtitle: "B.Tech in Computer Science & Systems Engineering",
      logo_path: "kiit_logo.png", // Use your actual logo file name
      alt_name: "KIIT University",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Pursuing core courses in Data Structures, Algorithms, DBMS, Operating Systems, Computer Organization & Architecture, AI, ML, Java, and Digital Systems Design.",
        "⚡ Completed projects in Java, digital systems (VHDL/Xilinx Vivado), and database management.",
        "⚡ Achievements: 1st position in Paryavaran Ratna Award (South Asia), 1st in English Essay, Olympiad participation.",
      ],
      website_link: "https://kiit.ac.in/",
    },
    {
      title: "B.D. Academy, Amarpur, Banka, Bihar",
      subtitle: "10th (2020, 93%) & 12th Science (2022, 84%), CBSE",
      logo_path: "school_logo.png", // Use your actual school logo file name if available
      alt_name: "B.D. Academy",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Participated in national/international Olympiads (SOF, NSO, IMO).",
        "⚡ 1st position in English Essay Competition, 2nd in Quiz.",
        "⚡ Paryavaran Ratna Award (1st in country, South Asia region).",
        "⚡ Mock parliament, community service, environmental awareness.",
      ],
      website_link: "https://bdacademyedu.com/",
    },
  ],
};

// certifications.js

const certifications = {
  certifications: [
    {
      title: "C++ & Data Structures Training and Internship",
      subtitle: "- Internship Studio",
      logo_path: "internship_studio_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1Oq-xNoZIVdYgjvBa48z5MGI1CeJVnskO", // Replace with your actual link
      alt_name: "Internship Studio",
      color_code: "#1F70C199",
    },
    {
      title: "Viksit Bharat @2047 Workshop Participation",
      subtitle: "- KIIT",
      logo_path: "kiit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1eDkUurpZ2yh5aqJ8WONh613n7trXMP8z/view?usp=drivesdk", // Replace with your actual link
      alt_name: "KIIT",
      color_code: "#8C151599",
    },
    {
      title: "Paryavaran Ratna Award",
      subtitle: "- Indian Centre for Wildlife and Environmental Studies",
      logo_path: "paryavaran_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19VMfmZctYlmqZEODhOlYcQmn5_cTfNml/view?usp=drivesdk", // Add link if available
      alt_name: "ICWES",
      color_code: "#00C853",
    },
    {
      title: "School Life Achievements",
      subtitle: "- B.D. Academy",
      logo_path: "school_logo.png", // Use your actual school logo file name if available
      certificate_link:
        "https://drive.google.com/drive/folders/16sYxVSmZ8KnXs6nxzNbggCmLsDej7ep2", // Replace with your actual link
      alt_name: "B.D. Academy",
      color_code: "#FF9800",
    },
  ],
};

// Experience Page
// experience.js

const experience = {
  title: "Experience",
  subtitle: "Internships, Workshops, and Achievements",
  description:
    "Hands-on experience in technical internships, national workshops, and academic competitions. Passionate about programming, AI/ML, and contributing to community and innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "C++ & Data Structures Intern",
          company: "Internship Studio",
          company_url: "https://dashboard.internshipstudio.com/profile", // Add actual URL if available
          logo_path: "internship_studio_logo.png",
          duration: "June 2024 - July 2024",
          location: "Remote/Online",
          description:
            "Completed training and internship in C++ programming and core data structures. Implemented algorithms, solved real-world coding problems, and developed proficiency in object-oriented programming.",
          color: "#1F70C199",
        },
      ],
    },
    {
      title: "Workshops",
      experiences: [
        {
          title: "Participant – Viksit Bharat @2047 Workshop",
          company: "KIIT",
          company_url: "https://kiit.ac.in/",
          logo_path: "kiit_logo.png",
          duration: "April 2024",
          location: "Bhubaneswar, Odisha",
          description:
            "Engaged in a national-level workshop on innovation, development, and youth leadership. Collaborated in brainstorming sessions on sustainable growth and technology.",
          color: "#8C151599",
        },
      ],
    },
    {
      title: "Achievements",
      experiences: [
        {
          title: "Paryavaran Ratna Award",
          company: "ICWES",
          company_url: "#",
          logo_path: "paryavaran_logo.png",
          duration: "2014",
          location: "South Asia Region",
          description:
            "Secured 1st position in the country and South Asia region for environmental awareness.",
          color: "#00C853",
        },
        {
          title: "English Essay Competition",
          company: "B.D. Academy",
          company_url: "https://bdacademyedu.com/",
          logo_path: "school_logo.png",
          duration: "Year",
          location: "Amarpur, Bihar",
          description:
            "Secured 1st position in national-level English essay competition.",
          color: "#FFD700",
        },
        {
          title: "Quiz Competition",
          company: "B.D. Academy",
          company_url: "https://bdacademyedu.com/",
          logo_path: "school_logo.png",
          duration: "Year",
          location: "Amarpur, Bihar",
          description: "Secured 2nd place in school-level quiz competition.",
          color: "#C0C0C0",
        },
        {
          title: "Olympiad Participation",
          company: "SOF, NSO, IMO",
          company_url: "https://sofworld.org/",
          logo_path: "olympiad_logo.png",
          duration: "School Years",
          location: "National/International",
          description:
            "Participated in national and international Olympiads, enhancing analytical and problem-solving skills.",
          color: "#4285F4",
        },
        {
          title: "Community & Leadership",
          company: "B.D. Academy",
          company_url: "https://bdacademyedu.com/",
          logo_path: "school_logo.png",
          duration: "School Years",
          location: "Amarpur, Bihar",
          description:
            "Engaged in mock parliament, community service, and environmental awareness initiatives.",
          color: "#34A853",
        },
      ],
    },
  ],
};

// Projects Page

const projects = {
  data: [
    {
      id: "credit-scoring-ml-model",
      name: "Credit Scoring Model using Machine Learning",
      createdAt: "2025-06-06T00:00:00Z",
      description:
        "A comprehensive credit scoring model using the UCI German Credit dataset. Includes EDA, feature engineering, model building (Logistic Regression & Random Forest), evaluation (Precision, Recall, F1, ROC-AUC), and feature importance analysis. Built as part of the Code Alpha Internship.",
      url: "https://github.com/bhanukumardev/CodeAlpha_CreditScoringModel",
      video_linkedin_post:
        "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_machinelearning-creditscoring-datascience-activity-7335941965395492865-vW-f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-td28BKSK7mi1hQgrYDtXPTq_qe8XRr18",
      tags: [
        "Machine Learning",
        "Credit Scoring",
        "Random Forest",
        "Logistic Regression",
        "Python",
        "Internship",
      ],
      cover_image_path: "credit_scoring_project.png",
    },
    {
      id: "genai-resume-parser",
      name: "GenAI Resume Parser",
      createdAt: "2025-06-06T00:00:00Z",
      description:
        "An AI-powered resume parser that extracts structured data from PDF resumes using Python, Flask, OpenAI, and Ollama (Llama 3.2). Features hybrid cloud/local LLM support, a Flask web interface, and secure, fast processing.",
      url: "https://github.com/bhanukumardev/GenAI_Resume_Parser",
      demo_url:
        "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_pinnaclelabs-genai-ai-activity-7334604534679302144-WLN8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-td28BKSK7mi1hQgrYDtXPTq_qe8XRr18",
      tech_stack: [
        "Python",
        "Flask",
        "OpenAI API",
        "Ollama",
        "Llama 3.2",
        "PyPDF2",
        "HTML/CSS",
      ],
      image_path: "resume_parser_demo.png",
    },
    // Add more projects here as needed
  ],
};

// contactPageData.js

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "your_photo.png", // Replace with your actual photo file name
    description:
      "I'm open to collaborations, internships, and discussions in AI, ML, Java, and software development. Feel free to reach out via email or LinkedIn for project opportunities or networking.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "S/O-Dheeraj Kumar Dev, Village & Post Office- Amba, Police Station - Shahkund, District - Bhagalpur, Pin Code - 813108, Bihar, India",
    locality: "Shahkund",
    country: "India",
    region: "Bihar",
    postalCode: "813108",
    streetAddress: "Village & Post Office- Amba",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://maps.google.com/?q=Amba,+Shahkund,+Bhagalpur,+Bihar+813108",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "7903395573",
  },
  emailSection: {
    title: "Email",
    subtitle: "kumarbhanu818@gmail.com",
  },
  linkedinSection: {
    title: "LinkedIn",
    subtitle: "https://www.linkedin.com/in/bhanu-kumar-dev-97b820313",
  },
};

export default contactPageData;

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projects,
  contactPageData,
};
