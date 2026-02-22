let listOfInterview = [2,4,8];
let listOfRejected = [3, 5];


let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let totaljobCount = document.querySelector('.total-count');
totaljobCount.innerText = jobs.length;

totalCount.innerText = jobs.length;
interviewCount.innerText = listOfInterview.length;
rejectedCount.innerText = listOfRejected.length;




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

    if(id === 'card-container'){

    document.getElementById('interview-container').classList.add('hidden');
    document.getElementById('rejected-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');

    const availableJobs = document.getElementById('available-jobs');

    availableJobs.innerHTML =`
        <span class="total-count">${jobs.length}</span> jobs
    `

    
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

