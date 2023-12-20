function generateLinks() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    
    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }
    
    if (email === "") {
        alert("Please enter your last name.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const linkData = [
        {
            title: "Self Employed Credit (1st Form)",
            url: `https://selfemployedcredit.jotform.com/233526051777964?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: true
        },
        {
            title: "2020 & 2021 Tax Return",
            url: `https://selfemployedcredit.jotform.com/233526206352955?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: false
        },
        {
            title: "2020 & 2021 Income/Loss",
            url: `https://selfemployedcredit.jotform.com/233525317713958?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: false
        },
        {
            title: "ID/Driver’s License",
            url: `https://selfemployedcredit.jotform.com/233525647659973?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: false
        },
        {
            title: "Advanced Funding",
            url: `https://selfemployedcredit.jotform.com/233525329390962?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: false
        },
        {
            title: "Agreement",
            url: `https://selfemployedcredit.jotform.com/233525369165966?email=${email}&firstName=${firstName}&lastName=${lastName}`,
            completed: false
        }
    ];

    const linksContainer = document.getElementById("links");
    linksContainer.innerHTML = "";

    linkData.forEach((item, index) => {
        const linkElement = document.createElement("div");

        const titleElement = document.createElement("p");
        titleElement.textContent = item.title;
        linkElement.appendChild(titleElement);

        const button = document.createElement("button");
        if (index === 0 && item.completed) {
            button.textContent = "Form Submitted";
            button.disabled = true;
            button.style.backgroundColor = "green"; // Change button color to green
        } else {
            button.textContent = "Complete Form";
            button.addEventListener("click", () => {
                openFormInNewTab(item.url);
            });
        }
        linkElement.appendChild(button);

        linksContainer.appendChild(linkElement);
    });
}

function isValidEmail(email) {    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function openFormInNewTab(url) {
    window.open(url, "_blank");
}

// Function to extract query parameters from the URL
function getQueryParameters() {
    const queryParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of queryParams.entries()) {
        params[key] = value;
    }

    return params;
}

// Function to populate the name and email fields from query parameters
function populateFieldsFromQuery() {
    const queryParams = getQueryParameters();

    if (queryParams.firstName) {
        document.getElementById("firstName").value = queryParams.firstName;
    }

    if (queryParams.lastName) {
        document.getElementById("lastName").value = queryParams.lastName;
    }

    if (queryParams.email) {
        document.getElementById("email").value = queryParams.email;
    }
}

// Call the function to populate fields when the page loads
window.addEventListener("load", populateFieldsFromQuery);

document.getElementById("generateButton").addEventListener("click", generateLinks);
