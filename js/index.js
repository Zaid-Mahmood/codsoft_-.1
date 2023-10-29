const navLinks = document.querySelectorAll('.pageLinks');
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the link
                const targetId = link.getAttribute('href').substring(1); // Get the section ID
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth' // Add smooth scrolling
                    });
                }
            });
        });


        function checkSkills() {
            document.getElementById("experiences").classList.add("d-none");
            document.getElementById("educations").classList.add("d-none");
            document.getElementById("skill").classList.remove("d-none");
            document.getElementById("experienceBtn").style.borderBottom = "";
            document.getElementById("educationBtn").style.borderBottom = "";
            document.getElementById("skillBtn").style.borderBottom = "2px solid rgb(214, 72, 96)";
        }
        
        function checkExperience() {
            document.getElementById("skill").classList.add("d-none");
            document.getElementById("educations").classList.add("d-none");
            document.getElementById("experiences").classList.remove("d-none");
            document.getElementById("skillBtn").style.borderBottom = "none";
            document.getElementById("educationBtn").style.borderBottom = "none";
            document.getElementById("experienceBtn").style.borderBottom = "2px solid rgb(214, 72, 96)";
        }
        
        function checkEducation() {
            document.getElementById("skill").classList.add("d-none");
            document.getElementById("experiences").classList.add("d-none");
            document.getElementById("educations").classList.remove("d-none");
            document.getElementById("skillBtn").style.borderBottom = "none";
            document.getElementById("experienceBtn").style.borderBottom = "none";
            document.getElementById("educationBtn").style.borderBottom = "2px solid rgb(214, 72, 96)";
        }

        