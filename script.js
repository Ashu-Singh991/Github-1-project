document.addEventListener('DOMContentLoaded',function() {  //this means that your javascript will only start working once your entire webpage has finish loading all the content from the server
    const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
    const body = document.body;
    const projectItems = document.querySelectorAll(".project-item");
    const formFeedback = document.getElementById('formFeedback');
    const contactForm = document.getElementById('contactForm');
    
    //Toggel Dark Mode code starts from here
    toggleDarkModeBtn.addEventListener('click', function(){
      body.classList.toggle("dark-mode");
    });
    //Form validation
    contactForm.addEventListener('submit',function(event){
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
    
      
      if (name === "" || email === "" || message === ""){
        alert("Please fill out all the fields");
      }
      else if(!validateEmail(email)){  //When the condition here is false, Please enter the valid email will not printed
        alert("Please enter the valide email");
      }
      else{
        contactForm.requestFullscreen();
      }
    
    });  //contact form validation close
     
     function validateEmail(email){
      const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  //smallest domain is 2 charactor (.co) and the longest is 6 charactor
      return emailpattern.test(email);  //this will only return either thru or flase 
     }
    
     function greet(){
      const userName = prompt("please enter the name:");
    
      if(userName){
        alert(`Hello, ${userName}, Welcome to my portfolio Website`);
      }
      else{
        alert(`Hello, you didn't enter the name! `);
      }
     }
     greet();
    
    });