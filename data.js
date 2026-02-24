// Job data list 
// Each object represents one job card

let jobs = [
  {
    companyName: "bKash Limited",
    position: "Web Application Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳75,000 - ৳110,000",
    description: "Develop secure and high-performance web applications for fintech users."
  },
    {
    companyName: "Daraz Bangladesh",
    position: "Software Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳70,000 - ৳115,000",
    description: "Develop and optimize e-commerce platforms and internal tools."
  }, 
  {
    companyName: "Pathao",
    position: "Backend Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳80,000 - ৳130,000",
    description: "Work with APIs, databases, and backend services using Node.js."
  },

  {
    companyName: "SSL Wireless",
    position: "UI/UX Designer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳50,000 - ৳80,000",
    description: "Design intuitive user experiences and high-fidelity UI prototypes."
  },
  {
    companyName: "ShopUp",
    position: "Product Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳90,000 - ৳140,000",
    description: "Build and maintain product features using modern JavaScript frameworks."
  },
  {
    companyName: "Augmedix",
    position: "Full Stack Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳85,000 - ৳135,000",
    description: "Work across frontend and backend to deliver production-ready features."
  },
  {
    companyName: "Enosis Solutions",
    position: "Junior Software Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳45,000 - ৳70,000",
    description: "Assist in building enterprise applications and writing testable code."
  },
  {
    companyName: "TigerIT",
    position: "System Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳65,000 - ৳100,000",
    description: "Maintain system infrastructure and support enterprise-level solutions."
  },
  {
    companyName: "DataSoft Systems",
    position: "Java Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳75,000 - ৳120,000",
    description: "Develop large-scale applications using Java and Spring framework."
  },
  {
    companyName: "Reve Systems",
    position: "Software Quality Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳50,000 - ৳85,000",
    description: "Perform manual and automated testing to ensure software quality."
  },
  {
    companyName: "Kaz Software",
    position: "React Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳80,000 - ৳125,000",
    description: "Build modern SPAs using React, hooks, and component-based architecture."
  },
  {
    companyName: "Genuine Technology",
    position: "Laravel Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳60,000 - ৳95,000",
    description: "Develop backend systems using Laravel and MySQL."
  },
  {
    companyName: "Therap BD",
    position: "Software Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳90,000 - ৳150,000",
    description: "Develop mission-critical applications with high performance standards."
  },
  {
    companyName: "Codesmiths",
    position: "MERN Stack Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳85,000 - ৳130,000",
    description: "Work with MongoDB, Express, React, and Node.js to build web apps."
  },
  {
    companyName: "SEBPO",
    position: "IT Support Engineer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳40,000 - ৳65,000",
    description: "Provide technical support and maintain internal IT systems."
  },
  {
    companyName: "MySoft Ltd",
    position: "Android App Developer",
    locationTypeSalary: "Dhaka, BD • Full-time • ৳70,000 - ৳110,000",
    description: "Develop and maintain Android applications using Kotlin."
  },
  {
    companyName: "ICT Division Project",
    position: "Web Programmer",
    locationTypeSalary: "Dhaka, BD • Contract • ৳50,000 - ৳80,000",
    description: "Develop government web portals following security and accessibility rules."
  },
  {
    companyName: "Freelance Marketplace",
    position: "WordPress Developer",
    locationTypeSalary: "Remote • Freelance • ৳30,000 - ৳70,000",
    description: "Build WordPress websites, customize themes, and improve performance."
  }
];





// Select the container by id name
// all job cards will be inserted

let cards = document.getElementById("card-container");

// Function: Creates and renders
// all job cards dynamically update from data of object

function allJobInfoCard() {

  // Loop through each job object in the jobs array
  for (let job of jobs) {

  
    // Create a new div element
    let divInfo = document.createElement('div');

    // Add  Tailwind inline css to the card
    divInfo.className = "card-info bg-white p-6 grid grid-cols-1 gap-4 rounded-xl ";

    // Insert job data into HTML element using element innerHTML
    divInfo.innerHTML =`
      <div class="jobInfo flex justify-between items-center">
        <h2 class="companyName font-medium">
        ${job.companyName}
        </h2>
        <button class="delete-btn btn btn-soft rounded-full bg-white w-6 h-7 border-none">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>

      <p class="position text-gray-400 text-base">
         ${job.position}
      </p>

      <p class="adress-type-salary text-gray-400 font-light text-sm">
        ${job.locationTypeSalary}
      </p>

     <div class="statusbar badge badge-soft badge-info px-2 py-3">Not Applied</div>

      <p class="description text-black/80 font-normal text-sm">
        ${job.description}
      </p>

      <div class="flex gap-2">
        <button  class="interview-card-btn btn btn-outline btn-success">
          Interview
        </button>

        <button  class="rejected-card-btn btn btn-outline btn-error">
          Rejected
        </button>
      </div>
    `
    // Append the job card into the main container
    cards.appendChild(divInfo);
  }
}


