let listOfInterview = [];
let listOfRejected = [];
 


let totalCount = document.getElementById("total-count");
totalCount.innerText = jobs.length;

let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let totaljobCount = document.querySelector('.total-count');
totaljobCount.innerText = jobs.length;




let interviewContainer = document.getElementById("interview-container");
let rejectedContainer = document.getElementById("rejected-container");







function toggulButton (id){
    document.getElementById('all-btn').classList.remove("bg-blue-400","text-white");
    document.getElementById('interview-btn').classList.remove("bg-blue-400","text-white");
    document.getElementById('rejected-btn').classList.remove("bg-blue-400","text-white");

    
    document.getElementById('all-btn').classList.add("bg-white", "text-gray-400");
    document.getElementById('interview-btn').classList.add("bg-white", "text-gray-400");
    document.getElementById('rejected-btn').classList.add("bg-white", "text-gray-400");

    document.getElementById(id).classList.add("bg-blue-400","text-white");
    document.getElementById(id).classList.remove("bg-white", "text-gray-400");
    
    

}

function showOnly (id){

    currentStatus = id;

    if(id === 'card-container'){


    document.getElementById('interview-container').classList.add('hidden');
    document.getElementById('rejected-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');

    const availableJobs = document.getElementById('available-jobs');

    availableJobs.innerHTML =`
        <span class="total-count">${jobs.length}</span> jobs
    `

    // allJobInfoCard();
    
    }
    else if(id === 'interview-container' ){

    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('rejected-container').classList.add('hidden');
    document.getElementById('interview-container').classList.remove('hidden');

    const availableJobs = document.getElementById('available-jobs');
    

    availableJobs.innerHTML =`
           <span>${listOfInterview.length} of </span<span class="total-count">${jobs.length}</span> jobs
    `


    }
    else if (id === 'rejected-container'){

    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('interview-container').classList.add('hidden');
    document.getElementById('rejected-container').classList.remove('hidden');

    const availableJobs = document.getElementById('available-jobs');

    availableJobs.innerHTML =`
           <span>${listOfRejected.length} of </span<span class="total-count">${jobs.length}</span> jobs
    `

    }
}




cards.addEventListener("click", function (event) {

  if (event.target.closest(".delete-btn")) {

    const card = event.target.closest(".card-info");
    const companyName = card.querySelector(".companyName").innerText.trim();

    jobs = jobs.filter(job => job.companyName !== companyName);
    
    card.remove();

    totalCount.innerText = jobs.length
    totaljobCount.innerText = jobs.length;

  }



});
allJobInfoCard();

let mainContiner = document.querySelector('main')


mainContiner.addEventListener('click', function(even){

 let parentOfCardBtn = even.target.parentNode.parentNode;


//  if (even.target.classList.contains('delete-btn')) {

//   const card = even.target.contains('card-info');
//   const companyName = card.querySelector('.companyName').innerText;


//   jobs = jobs.filter(job => job.companyName !== companyName);

//   // allJobInfoCard();
//   console.log(jobs)

// }

if(even.target.classList.contains('interview-card-btn')){




     const statusBarUpdate = parentOfCardBtn.querySelector('.statusbar');

     statusBarUpdate.classList = "statusbar badge badge-soft badge-success";
     statusBarUpdate.innerText = "Interview";

     parentOfCardBtn.classList = "card-info bg-white p-6 grid grid-cols-1 gap-4 rounded-xl border-l-4 border-success";


   const companyName = parentOfCardBtn.querySelector('.companyName').innerText;
   const position = parentOfCardBtn.querySelector('.position').innerText;
   const locationTypeSalary = parentOfCardBtn.querySelector('.adress-type-salary').innerText;
   const statusBar = parentOfCardBtn.querySelector('.statusbar').innerText;
   const description = parentOfCardBtn.querySelector('.description').innerText;

   const cardInfo = {
    companyName,
    position,
    locationTypeSalary,
    statusBar,
    description
   }

     

    // const findCard = jobs.filter(job => job.companyName === companyNamev.innerText);

    const sameCard = listOfInterview.find(info => info.companyName == cardInfo.companyName);
 
    //   console.log(findCard);

if(!sameCard) {
   listOfInterview.push(cardInfo);

    }

     listOfRejected = listOfRejected.filter(item => item.companyName != cardInfo.companyName);
    
     if(currentStatus = "rejected-container"){
        outputOfRejected();

     }
    
    outputOfInterview();
    noJobAvailable()

     interviewCount.innerText = listOfInterview.length;
     rejectedCount.innerText = listOfRejected.length;

  }



  else if(even.target.classList.contains('rejected-card-btn')){


    const statusBarUpdate = parentOfCardBtn.querySelector('.statusbar');
           statusBarUpdate.innerText = "Rejected";


     statusBarUpdate.classList = "statusbar badge badge-soft badge-error";

     parentOfCardBtn.classList = "card-info bg-white p-6 grid grid-cols-1 gap-4 rounded-xl border-l-4 border-error"


  const companyName = parentOfCardBtn.querySelector('.companyName').innerText;
   const position = parentOfCardBtn.querySelector('.position').innerText;
   const locationTypeSalary = parentOfCardBtn.querySelector('.adress-type-salary').innerText;
   const description = parentOfCardBtn.querySelector('.description').innerText;

   const cardInfo = {
    companyName,
    position,
    locationTypeSalary,
    description
   }
    // const findCard = jobs.filter(job => job.companyName === companyName.innerText);

 
    const sameCard = listOfRejected.find(info => info.companyName == cardInfo.companyName);      

if(!sameCard){
 
   listOfRejected.push(cardInfo);
//    listOfInterview.pop(cardInfo);
    
    }
    //  outputOfInterview();
     listOfInterview = listOfInterview.filter(item => item.companyName != cardInfo.companyName)

     if(currentStatus = "interview-container"){
        outputOfInterview();

        // allJobInfoCard();
     }
      interviewCount.innerText = listOfInterview.length;
     rejectedCount.innerText = listOfRejected.length;

  outputOfRejected()
  noJobAvailable()

  }

  
})




function outputOfInterview(){

          interviewContainer.innerHTML = '';

     for (let list of listOfInterview) {

    // Create a new div element
    let divInfo = document.createElement('div');

    // Add  Tailwind inline css to the card
    divInfo.className = "card-info bg-white p-6 grid grid-cols-1 gap-4 rounded-xl border-l-4 border-success";

    // Insert job data into HTML element using element innerHTML
    divInfo.innerHTML =`
      <div class="jobInfo flex justify-between items-center ">
        <h2 class="companyName font-medium">
        ${list.companyName}
        </h2>
        <button class="delete-btn btn btn-soft rounded-full bg-white w-6 h-7 border-none ">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>

      <p class="position text-gray-400 text-base">
         ${list.position}
      </p>

      <p class="adress-type-salary text-gray-400 font-light text-sm">
        ${list.locationTypeSalary}
      </p>

     <div class="statusbar badge badge-soft badge-success">Interview</div>

      <p class="description text-black/80 font-normal text-sm">
        ${list.description}
      </p>

      <div class="flex gap-2">
        <button  class="interview-card-btn btn btn-outline btn-success">
          Interview
        </button>

        <button  class="rejected-card-btn btn btn-outline btn-error">
          Rejected
        </button>
      </div>
    `;
    // Append the job card into the main container
    interviewContainer.appendChild(divInfo);
  }
}







function outputOfRejected(){


   rejectedContainer.innerHTML = '';
    

     for (let list of listOfRejected) {

    // Create a new div element
    let divInfo = document.createElement('div');

    // Add  Tailwind inline css to the card
    divInfo.className = "card-info bg-white p-6 grid grid-cols-1 gap-4 rounded-xl border-l-4 border-error";

    // Insert job data into HTML element using element innerHTML
    divInfo.innerHTML =`
      <div class="jobInfo flex justify-between items-center ">
        <h2 class="companyName font-medium">
        ${list.companyName}
        </h2>
        <button class="delete-btn btn btn-soft rounded-full bg-white w-6 h-7 border-none">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>

      <p class="position text-gray-400 text-base">
         ${list.position}
      </p>

      <p class="adress-type-salary text-gray-400 font-light text-sm">
        ${list.locationTypeSalary}
      </p>

     <div class="statusbar badge badge-soft badge-error">Rejected</div>

      <p class="description text-black/80 font-normal text-sm">
        ${list.description}
      </p>

      <div class="flex gap-2">
        <button  class="interview-card-btn btn btn-outline btn-success">
          Interview
        </button>

        <button  class="rejected-card-btn btn btn-outline btn-error">
          Rejected
        </button>
      </div>
    `;
    // Append the job card into the main container
    rejectedContainer.appendChild(divInfo);
  }
}

function noJobAvailable (){
const countIn = listOfInterview.length;
const countRe = listOfRejected.length;

if(countIn == 0){
    interviewContainer.innerHTML = `
    
            <div class="no-jobs flex flex-col space-y-5 bg-white py-16 px-10 rounded-md ">
            <div class="flex justify-center">
                <img src="./assets/jobs.png" alt="">
            </div>
            <div class="text-center">
                <h1 class="text-xl font-medium">No jobs available</h1>
                <p class="text-[14px] text-gray-500">Check back soon for new job opportunities</p>
            </div>
        </div>
    `
}

if (countRe == 0){
    rejectedContainer.innerHTML = `
  
            <div class="no-jobs flex flex-col space-y-5 bg-white py-16 px-10 rounded-md ">
            <div class="flex justify-center">
                <img src="./assets/jobs.png" alt="">
            </div>
            <div class="text-center">
                <h1 class="text-xl font-medium">No jobs available</h1>
                <p class="text-[14px] text-gray-500">Check back soon for new job opportunities</p>
            </div>
        </div>
    `
}
}

noJobAvailable();