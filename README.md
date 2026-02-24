
## Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans: getElementById is use to find element by id name but id is unique name so only One element can select on the other hand getElementByClass can select many elements by class name, querySelector or querySelectorAll both call by class element but the main difference querySelector select first matching element and querySelectorAll can selects all matching elements.

### 2. How do you create and insert a new element into the DOM?

### Ans: use createElemenr() create new element in the DOM and new element push inside parent element by appendChild as a childelemet.

### 3. What is Event Bubbling? And how does it work?

### Ans: Event Bubbling is basically work like upper roadmao find if I start an event in a element it act like children element now event Bubbling work like movvs up to the parent element.

### 4. What is Event Delegation in JavaScript? Why is it useful?

## Ans: Event Delegates can detect of event area or as an event listenr on a parent to handel event of Child element. 


### 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans: preventDefault() stop the main default work of event annd stopPropagathin() stops event bubbling couse event not go to parent.

---





## :bulb: What I Will Learn_

<p align="center">
<img height="150" src="https://raw.githubusercontent.com/ProgrammingHero1/ProgrammingHero1/main/image/HTML.png"/>
<img height="150" src="https://raw.githubusercontent.com/ProgrammingHero1/ProgrammingHero1/main/image/CSS.png"/>
<img height="150" src="https://raw.githubusercontent.com/ProgrammingHero1/ProgrammingHero1/main/image/JavaScript.png"/>
<img height="150" src="https://raw.githubusercontent.com/ProgrammingHero1/ProgrammingHero1/main/image/Tailwind.png"/>
</p>

# Project Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


