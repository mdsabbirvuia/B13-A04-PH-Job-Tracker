// 1. Random job data
const jobs = [
  {
    title: "BJIT Group",
    subtitle: "Software Engineer",
    address: "Dhaka, BD • Full-time • ৳70,000 - ৳120,000",
    skill: "Develop scalable software solutions following clean code practices."
  },
  {
    title: "Pathao",
    subtitle: "Backend Developer",
    address: "Dhaka, BD • Full-time • ৳80,000 - ৳130,000",
    skill: "Work with APIs, databases, and backend services using Node.js."
  },
  {
    title: "bKash Limited",
    subtitle: "Web Application Developer",
    address: "Dhaka, BD • Full-time • ৳75,000 - ৳110,000",
    skill: "Develop secure and high-performance web applications for fintech users."
  },
  {
    title: "SSL Wireless",
    subtitle: "UI/UX Designer",
    address: "Dhaka, BD • Full-time • ৳50,000 - ৳80,000",
    skill: "Design intuitive user experiences and high-fidelity UI prototypes."
  },
  {
    title: "ShopUp",
    subtitle: "Product Engineer",
    address: "Dhaka, BD • Full-time • ৳90,000 - ৳140,000",
    skill: "Build and maintain product features using modern JavaScript frameworks."
  },
  {
    title: "Augmedix",
    subtitle: "Full Stack Developer",
    address: "Dhaka, BD • Full-time • ৳85,000 - ৳135,000",
    skill: "Work across frontend and backend to deliver production-ready features."
  },
  {
    title: "Daraz Bangladesh",
    subtitle: "Software Developer",
    address: "Dhaka, BD • Full-time • ৳70,000 - ৳115,000",
    skill: "Develop and optimize e-commerce platforms and internal tools."
  },
  {
    title: "Enosis Solutions",
    subtitle: "Junior Software Engineer",
    address: "Dhaka, BD • Full-time • ৳45,000 - ৳70,000",
    skill: "Assist in building enterprise applications and writing testable code."
  },
  {
    title: "TigerIT",
    subtitle: "System Engineer",
    address: "Dhaka, BD • Full-time • ৳65,000 - ৳100,000",
    skill: "Maintain system infrastructure and support enterprise-level solutions."
  },
  {
    title: "DataSoft Systems",
    subtitle: "Java Developer",
    address: "Dhaka, BD • Full-time • ৳75,000 - ৳120,000",
    skill: "Develop large-scale applications using Java and Spring framework."
  },
  {
    title: "Reve Systems",
    subtitle: "Software Quality Engineer",
    address: "Dhaka, BD • Full-time • ৳50,000 - ৳85,000",
    skill: "Perform manual and automated testing to ensure software quality."
  },
  {
    title: "Kaz Software",
    subtitle: "React Developer",
    address: "Dhaka, BD • Full-time • ৳80,000 - ৳125,000",
    skill: "Build modern SPAs using React, hooks, and component-based architecture."
  },
  {
    title: "Genuine Technology",
    subtitle: "Laravel Developer",
    address: "Dhaka, BD • Full-time • ৳60,000 - ৳95,000",
    skill: "Develop backend systems using Laravel and MySQL."
  },
  {
    title: "Therap BD",
    subtitle: "Software Engineer",
    address: "Dhaka, BD • Full-time • ৳90,000 - ৳150,000",
    skill: "Develop mission-critical applications with high performance standards."
  },
  {
    title: "Codesmiths",
    subtitle: "MERN Stack Developer",
    address: "Dhaka, BD • Full-time • ৳85,000 - ৳130,000",
    skill: "Work with MongoDB, Express, React, and Node.js to build web apps."
  },
  {
    title: "SEBPO",
    subtitle: "IT Support Engineer",
    address: "Dhaka, BD • Full-time • ৳40,000 - ৳65,000",
    skill: "Provide technical support and maintain internal IT systems."
  },
  {
    title: "MySoft Ltd",
    subtitle: "Android App Developer",
    address: "Dhaka, BD • Full-time • ৳70,000 - ৳110,000",
    skill: "Develop and maintain Android applications using Kotlin."
  },
  {
    title: "ICT Division Project",
    subtitle: "Web Programmer",
    address: "Dhaka, BD • Contract • ৳50,000 - ৳80,000",
    skill: "Develop government web portals following security and accessibility rules."
  },
  {
    title: "Freelance Marketplace",
    subtitle: "WordPress Developer",
    address: "Remote • Freelance • ৳30,000 - ৳70,000",
    skill: "Build WordPress websites, customize themes, and improve performance."
  }
];

  const cards = document.getElementById("card-container");
//   console.log(cards)
function allJobInfoCard (){
    cards
    for(let job of jobs){
        let divInfo = document.createElement('div');
        divInfo.className = "card-info bg-white p-6 grid grid-cols-1 gap-4";

        divInfo.innerHTML =`
            <div class="flex justify-between">
                <h2 class="title  font-medium">${job.title}</h2>
                <button class="btn rounded-full px-1 h-0.5 bg-white border-none"><i class="fa-regular fa-trash-can"></i></button>
            </div>

            <p class="subtitle text-gray-400 text-base ">${job.subtitle}</p>
            <P class="adress-type-salary text-gray-400 font-light text-sm">${job.address}</P>
            <div  class="stetus bg-sky-100 w-[110px] hight-[35px] py-3 px-2 rounded-md">
            <p class="font-medium text-xs text-center">NOT APPLIED</p>
            </div>
            <p class="skill text-black/80 font-normal text-sm">${job.skill}</p>

            <div class="flex gap-2">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        `
        cards.appendChild(divInfo);
    }

}
allJobInfoCard();