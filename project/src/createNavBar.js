export default function createNavBar(logoText, pageLinks, socialMedias)
{
    // Nav-Bar Container
    const body = document.querySelector("body");
    const navBarContainer = document.createElement("div");
    navBarContainer.classList.add("nav-bar");
    body.appendChild(navBarContainer);

    // Logo
    const logoContainer = document.createElement("div");
    const logo = document.createElement("h3");
    logoContainer.classList.add("logo");
    logo.textContent = logoText;
    logoContainer.appendChild(logo);
    navBarContainer.appendChild(logoContainer);

    // Page Links
    const pageLinksContainer = document.createElement("div");
    pageLinksContainer.classList.add("page-links");

    pageLinks.forEach(link => 
        {
            

            const linkText = link[0];
            const linkHref = link[1];

            const newLinkContainer = document.createElement("h3");
            const newLink = document.createElement("a");

            newLink.textContent = linkText;
            newLink.setAttribute("href", linkHref);

            newLinkContainer.appendChild(newLink);
            pageLinksContainer.appendChild(newLinkContainer);



        })

        navBarContainer.appendChild(pageLinksContainer);

        // Social Links
        const socialLinksContainer = document.createElement("div");
        socialLinksContainer.classList.add("social-media");

        socialMedias.forEach(link =>
            {
                console.log(link[0], ":", link[1]);

                const linkText = link[0];
                const linkHref = link[1];

                const newLinkContainer = document.createElement("h3");
                const newLink = document.createElement("a");
                newLink.setAttribute("href", linkHref);

                const newLinkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                const newLinkTitle = document.createElement("title");
                

                if (linkText === "INSTAGRAM")
                {
                    newLinkIcon.setAttribute("width", "18");
                    newLinkIcon.setAttribute("height", "19");
                    newLinkIcon.setAttribute("viewBox", "0 0 18 19");
                    newLinkIcon.setAttribute("fill", "none");
                    newLinkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                
                    newLinkTitle.textContent = "Instagram";
                    newLinkIcon.appendChild(newLinkTitle);

                    const path1 = document.createElement("path");
                    path1.setAttribute("fill-rule", "evenodd");
                    path1.setAttribute("clip-rule", "evenodd");
                    path1.setAttribute("d", "M5.28999 0.991399C6.24999 0.941406 6.55999 0.941406 8.99999 0.941406C11.44 0.941406 11.75 0.941406 12.72 0.991399C13.4651 1.00749 14.2022 1.14947 14.9 1.41134C16.1042 1.8878 17.0518 2.84977 17.51 4.06096C17.7719 4.75865 17.9139 5.49561 17.93 6.24065C17.98 7.20051 17.98 7.51047 17.98 9.95012C17.98 11.4375 17.9614 12.1185 17.9469 12.65C17.9376 12.9903 17.93 13.2693 17.93 13.6596C17.9139 14.4046 17.7719 15.1416 17.51 15.8393C17.0426 17.0469 16.0878 18.0016 14.88 18.4689C14.1822 18.7308 13.4451 18.8728 12.7 18.8889C11.74 18.9388 11.43 18.9388 8.99027 18.9388H8.98999C7.50235 18.9388 6.82135 18.9203 6.28974 18.9058C5.94941 18.8965 5.67031 18.8889 5.27999 18.8889C4.53485 18.8728 3.79779 18.7308 3.1 18.4689C1.89018 17.9994 0.935014 17.0407 0.469999 15.8293C0.208096 15.1316 0.0660938 14.3946 0.0499999 13.6496C0 12.6897 0 12.3798 0 9.94012C0 7.50047 0 7.19052 0.0499999 6.22065C0.0660938 5.47561 0.208096 4.73866 0.469999 4.04096C0.939608 2.83132 1.8984 1.87629 3.11 1.41134C3.80779 1.14947 4.54485 1.00749 5.28999 0.991399ZM12.6406 2.61249C11.6906 2.5625 11.4006 2.5625 9.00061 2.5625V2.5825C7.52013 2.5825 6.84346 2.60136 6.32148 2.61592C5.99376 2.62505 5.72702 2.63249 5.36062 2.63249C4.79035 2.63982 4.22553 2.74465 3.69062 2.94245C2.91752 3.24733 2.30556 3.85921 2.00062 4.6322C1.8028 5.16704 1.69796 5.73177 1.69062 6.30196C1.64062 7.25183 1.64062 7.53179 1.64062 9.94144C1.64062 11.4217 1.65949 12.0983 1.67405 12.6202C1.68319 12.9479 1.69062 13.2146 1.69062 13.5809C1.69796 14.1511 1.8028 14.7158 2.00062 15.2507C2.30556 16.0237 2.91752 16.6355 3.69062 16.9404C4.22553 17.1382 4.79035 17.2431 5.36062 17.2504C6.31062 17.3004 6.59061 17.3004 9.00061 17.3004C10.4811 17.3004 11.1578 17.2815 11.6797 17.267C12.0075 17.2578 12.2742 17.2504 12.6406 17.2504C13.2109 17.2431 13.7757 17.1382 14.3106 16.9404C15.0837 16.6355 15.6957 16.0237 16.0006 15.2507C16.1984 14.7158 16.3033 14.1511 16.3106 13.5809C16.3606 12.6311 16.3606 12.3511 16.3606 9.94144C16.3606 8.46117 16.3417 7.78459 16.3272 7.26269C16.318 6.93502 16.3106 6.66832 16.3106 6.30196C16.3033 5.73177 16.1984 5.16704 16.0006 4.6322C15.6957 3.85921 15.0837 3.24733 14.3106 2.94245C13.7769 2.73783 13.212 2.62622 12.6406 2.61249Z");
                    path1.setAttribute("fill", "currentColor");

                    const path2 = document.createElement("path");
                    path2.setAttribute("fill-rule", "evenodd");
                    path2.setAttribute("clip-rule", "evenodd");
                    path2.setAttribute("d", "M4.37891 9.93965C4.37891 7.38846 6.44735 5.32031 8.9989 5.32031C10.2242 5.32031 11.3993 5.80699 12.2657 6.67329C13.1321 7.53958 13.6189 8.71453 13.6189 9.93965C13.6189 12.4908 11.5505 14.559 8.9989 14.559C6.44735 14.559 4.37891 12.4908 4.37891 9.93965ZM6 9.94043C6 11.5973 7.34315 12.9404 9 12.9404C9.79565 12.9404 10.5587 12.6244 11.1213 12.0617C11.6839 11.4991 12 10.7361 12 9.94043C12 8.28358 10.6569 6.94043 9 6.94043C7.34315 6.94043 6 8.28358 6 9.94043Z");
                    path2.setAttribute("fill", "currentColor");

                    const path3 = document.createElement("path");
                    path3.setAttribute("fill-rule", "evenodd");
                    path3.setAttribute("clip-rule", "evenodd");
                    path3.setAttribute("d", "M13.7988 6.2225C14.3952 6.2225 14.8788 5.73897 14.8788 5.1425C14.8788 4.54603 14.3952 4.0625 13.7988 4.0625C13.2023 4.0625 12.7188 4.54603 12.7188 5.1425C12.7188 5.73897 13.2023 6.2225 13.7988 6.2225Z");
                    path3.setAttribute("fill", "currentColor");

                    newLinkIcon.appendChild(path1);
                    newLinkIcon.appendChild(path2);
                    newLinkIcon.appendChild(path3);
                    
                }
                else if (linkText === "YOUTUBE")
                {
                    newLinkIcon.setAttribute("width", "18");
                    newLinkIcon.setAttribute("height", "13");
                    newLinkIcon.setAttribute("viewBox", "0 0 18 13");
                    newLinkIcon.setAttribute("fill", "none");
                    newLinkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                
                    newLinkTitle.textContent = "Youtube";
                    newLinkIcon.appendChild(newLinkTitle);

                    const path1 = document.createElement("path");
                    path1.setAttribute("fill-rule", "evenodd");
                    path1.setAttribute("clip-rule", "evenodd");
                    path1.setAttribute("d", "M17.1 1.83737C17.4829 2.32842 17.7311 2.91085 17.82 3.52713C17.9319 4.44288 17.992 5.36422 18 6.28674V7.57655C17.9924 8.50241 17.9323 9.4271 17.82 10.3462C17.7311 10.9624 17.4829 11.5449 17.1 12.0359C16.6125 12.4946 15.9694 12.7518 15.3 12.7558C12.78 12.9358 9 12.9358 9 12.9358C9 12.9358 4.32 12.9358 2.9 12.7658C2.16881 12.762 1.46173 12.5039 0.9 12.0359C0.515501 11.542 0.267246 10.9559 0.18 10.3362C0.0680335 9.42042 0.0079376 8.49908 0 7.57655V6.28674C0.00756015 5.36088 0.0676567 4.43619 0.18 3.51713C0.268925 2.90085 0.517095 2.31843 0.9 1.82737C1.38752 1.3687 2.0306 1.11151 2.7 1.10748C5.22 0.9375 9 0.9375 9 0.9375C9 0.9375 12.78 0.9375 15.3 1.11747C15.9694 1.12151 16.6125 1.3787 17.1 1.83737ZM13 6.9375L7 3.9375V9.9375L13 6.9375Z");
                    path1.setAttribute("fill", "currentColor");

                    newLinkIcon.appendChild(path1);
                }
                else if (linkText === "FACEBOOK")
                {
                    newLinkIcon.setAttribute("width", "19");
                    newLinkIcon.setAttribute("height", "20");
                    newLinkIcon.setAttribute("viewBox", "0 0 19 20");
                    newLinkIcon.setAttribute("fill", "none");
                    newLinkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                
                    newLinkTitle.textContent = "Facebook";
                    newLinkIcon.appendChild(newLinkTitle);

                    const path1 = document.createElement("path");
                    path1.setAttribute("d", "M19 10.495C18.9998 8.67955 18.4794 6.90217 17.5004 5.37329C16.5215 3.84441 15.1249 2.62804 13.4761 1.86821C11.8273 1.10837 9.99534 0.836881 8.19704 1.08588C6.39875 1.33487 4.70945 2.09393 3.32915 3.27318C1.94885 4.45243 0.935345 6.00249 0.408625 7.73985C-0.118094 9.47721 -0.135971 11.3291 0.357111 13.0763C0.850194 14.8235 1.83359 16.3929 3.19087 17.5985C4.54814 18.8042 6.22247 19.5958 8.01563 19.8794V13.2413H5.60342V10.495H8.01563V8.40183C8.01563 6.02129 9.43429 4.70554 11.6035 4.70554C12.3161 4.71576 13.027 4.77767 13.7307 4.89079V7.22937H12.5321C12.1713 7.18148 11.8062 7.27883 11.5172 7.50003C11.2281 7.72123 11.0388 8.04817 10.9907 8.40896C10.9771 8.50999 10.975 8.61224 10.9844 8.71375V10.495H13.6167L13.1955 13.2413H10.9788V19.8794C13.2145 19.5271 15.251 18.3882 16.7215 16.6677C18.1921 14.9472 19.0001 12.7583 19 10.495V10.495Z");
                    path1.setAttribute("fill", "currentColor");

                    newLinkIcon.appendChild(path1);
                }

                
                newLink.appendChild(newLinkIcon);
                

                newLinkContainer.appendChild(newLink);
                socialLinksContainer.appendChild(newLinkContainer);


            })

            navBarContainer.appendChild(socialLinksContainer);


}