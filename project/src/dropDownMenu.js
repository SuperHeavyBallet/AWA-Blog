export default function dropDownMenu(){

    const menuButton = document.querySelector("#mobile-menu-button");
    const dropDownMenuContainer = document.querySelector("#dropdown-menu");
    
    // Checks Dynamic Screen Resize to untoggle the drop down menu if needed
    function handleResize()
    {
        const screenWidth = window.innerWidth;
    
        if (screenWidth > 900 && !dropDownMenuContainer.classList.contains("hidden"))
        {
            dropDownMenuContainer.classList.remove("shown");
            dropDownMenuContainer.classList.add("hidden");   
        }
    }

    window.addEventListener(("resize"), () =>
    {
     handleResize();
    });

    // Click Events
    menuButton.addEventListener("click", () =>
    {
        

        if (dropDownMenuContainer.classList.contains("hidden"))
        {   
            dropDownMenuContainer.classList.remove("hidden");
            dropDownMenuContainer.classList.add("shown");
        
        }

        else if (dropDownMenuContainer.classList.contains("shown"))
        {   
            dropDownMenuContainer.classList.remove("shown");
            dropDownMenuContainer.classList.add("hidden");
        }

    })

    
}