/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Talha Siddique",
  title: "Hi all, I'm Talha",
  subTitle: emoji(
    "A passionate Full Stack MERN Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_nhb9oJDrBbDhppJtd5MMThh79jRRJeU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/talhasiddique7",
  linkedin: "https://www.linkedin.com/in/talha-siddique-28961b279/",
  gmail: "talhasiddiue.developer@gmail.com",
  facebook: "https://web.facebook.com/talha.talhasiddique.5",
  instagram:"https://www.instagram.com/talha__siddique/profilecard/?igsh=MTFpdDljd3F1N25qbw==",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills : [
   
    "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications", 
    "⚡ Backend Development for your web and mobile applications",
    "⚡ Machine Learning and AI Features integration",
    "⚡ Integration of third-party services such as Firebase and AWS",
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName:"AI & ML",
      fontAwesomeClassname:"fas fa-brain"
    },
    
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Gujrat (Hafiz Hayat Campus)",
      logo: new URL("https://i.ibb.co/p2gCGft/uog.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "November 2021 - April 2025",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Artificial Intelligence ...",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: new URL("https://i.ibb.co/XDmBPDx/chullah.jpg"),
      projectName: "Chullah : Ghar Kai Zaike,Ab Har Darwaze",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Mobile App",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: new URL("https://miro.medium.com/v2/resize:fit:750/1*VnNp_fJxcEwfE6iNlq_KpA.jpeg"),
      projectName: "Titanic Dataset and Death Prediction",
      projectDesc: "This project is based on the Titanic dataset, which is a very popular dataset in the field of machine learning. The project is based on the analysis of the dataset and the prediction of the survival of the passengers.",
      footerLink: [
        {
          name: "See Details",
          url: "https://github.com/talhasiddique7/AI-Data-Science-Machine-Learning-Deep-Learning-Projects/tree/main/Titanic%20Death%20prediction%20(Binary%20Classification)"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udemy",
      subtitle:
        
      "I have completed several certifications from Udemy, including courses on HTML, CSS, JavaScript, Machine Learning, Python, SQL, and NumPy.",
      image: new URL("https://i.ibb.co/LtPhHWD/udemy.jpg"),
      imageAlt: "udemy",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1NDEHBv4pjC6ZnrT5l0kTvuzaQptEKmij?usp=sharing"
        },
        
      ]
    },
    {
      title: "Coursera",
      subtitle:
      "I have completed several certifications from Coursera, including courses on IBM Applied AI, Machine Learning Specialization, C#, DSA, Generative AI and Python.",
      image: new URL("https://logowik.com/content/uploads/images/coursera-new7307.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1sVacofCXUWDEiL2fK9elghk7SlQNetld?usp=sharing"
        }
      ]
    },

    {
      title: "Xeven Solutions",
      subtitle: "Completed Certifcation from xeven for AI Basic Course.",
      image: new URL("https://media.licdn.com/dms/image/v2/D4D0BAQGxWgpxrrXI3A/company-logo_200_200/company-logo_200_200/0/1695290116447/xevensolutions_logo?e=2147483647&v=beta&t=XMjBRbCisMTdcg26z8K___dMmGLGX7KcKneWQ60RKik"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/drive/folders/1B8y8PP-drrVtp-6qds4XfRyIx_NOlNmc?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-345 5861630",
  email_address: "talhasiddique.developer@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
