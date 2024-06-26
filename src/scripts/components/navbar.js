 export const navbar = document.querySelector(".navbar-layout");
fetch("../layout/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    // Mouse hover on Navbar

    navbar.innerHTML = data;
    const newBtn = document.getElementById("new-btn")
    const listContainerNew = document.getElementById("list-container-new")
    function showContainer() {
      listContainerNew.classList.add("top-[6%]")
    }
    function hideContainer() {

      listContainerNew.classList.remove("top-[6%]")
    }
    newBtn.addEventListener('mouseover', showContainer)
    listContainerNew.addEventListener('mouseenter', showContainer)

    listContainerNew.addEventListener('mouseleave', hideContainer)
    newBtn.addEventListener('mouseleave', hideContainer)

    
    const MenBTN = document.getElementById("men-btn");
    const listContainerMen = document.getElementById("list-container-men")
    
    function showMenContainer() {
      listContainerMen.classList.add("top-[6%]");
    }
    function hideMenContainer() {
      listContainerMen.classList.remove("top-[6%]");
    }
    MenBTN.addEventListener("mouseover", showMenContainer)
    MenBTN.addEventListener("mouseleave", hideMenContainer)
    listContainerMen.addEventListener("mouseover", showMenContainer)
    listContainerMen.addEventListener("mouseleave", hideMenContainer)


    const WomenBTN = document.getElementById("women-btn");
    const listContainerWomen = document.getElementById("list-container-women")
    function showWomenContainer() {
      listContainerWomen.classList.add("top-[6%]")
    }
    function hideWomenContainer() {
      listContainerWomen.classList.remove("top-[6%]")
    }
    WomenBTN.addEventListener("mouseover", showWomenContainer)
    WomenBTN.addEventListener("mouseleave", hideWomenContainer)
    listContainerWomen.addEventListener("mouseover", showWomenContainer)
    listContainerWomen.addEventListener("mouseleave", hideWomenContainer)



    const KidBTN = document.querySelector("#kid-btn");
    const listContainerKid = document.getElementById("list-container-kid")
    function showKidContainer() {

      listContainerKid.classList.add("top-[6%]")
    }
    function hideKidContainer() {

      listContainerKid.classList.remove("top-[6%]")
    }

    KidBTN.addEventListener("mouseover", showKidContainer)
    listContainerKid.addEventListener('mouseleave', hideKidContainer)
    KidBTN.addEventListener("mouseleave", hideKidContainer)
    listContainerKid.addEventListener('mouseover', showKidContainer)



    const SaleBTN = document.querySelector("#sale-btn");
    SaleBTN.addEventListener("mouseover", showContainer)
    SaleBTN.addEventListener("mouseleave", hideContainer)
    

    // Humberger

    // side bar
    const minMenuDropdown = document.querySelector("#minMenuDropdown");

    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", () => {
      const menuIcon = document.getElementById("menuIcon");

      menuButton.classList.toggle("active");

      if (menuButton.classList.contains("active")) {
        menuIcon.innerHTML =
          '<img  src="https://logowik.com/content/uploads/images/close1437.jpg" alt="Close">'; // Set close icon HTML
        minMenuDropdown.style.right = "0%";
        document.body.classList.add("overflow-hidden")
      } else {
        menuIcon.innerHTML =
          '<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png">'; // Set menu icon HTML
        minMenuDropdown.style.right = "-100%";
        document.body.classList.remove("overflow-hidden")
      }
    });


  })
  .catch((error) => console.error("Error fetching included file:", error));