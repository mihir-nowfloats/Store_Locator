
function paginationHandler() {

    var Outlets = [
        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },
        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },

        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },


        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },


        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },


        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },


        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },


        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },
        {
            name: "A",
            address: "a",
            contactNumber: [1.1, 1.2, 1.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "abc@123.com",
            status: "open"
        },
        {
            name: "B",
            address: "b",
            contactNumber: [2.1, 2.2, 2.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "bcd@123.com",
            status: "open"
        },
        {
            name: "C",
            address: "c",
            contactNumber: [3.1, 3.2, 3.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "cde@123.com",
            status: "open"
        },
        {
            name: "D",
            address: "d",
            contactNumber: [4.1, 4.2, 4.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "def@123.com",
            status: "open"
        },
        {
            name: "E",
            address: "e",
            contactNumber: [5.1, 5.2, 5.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "efg@123.com",
            status: "open"
        },
        {
            name: "F",
            address: "f",
            contactNumber: [6.1, 6.2, 6.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "fgh@123.com",
            status: "open"
        },
        {
            name: "G",
            address: "g",
            contactNumber: [7.1, 7.2, 7.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "ghi@123.com",
            status: "open"
        },
        {
            name: "H",
            address: "h",
            contactNumber: [8.1, 8.2, 8.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "hij@123.com",
            status: "open"
        },
        {
            name: "I",
            address: "i",
            contactNumber: [9.1, 9.2, 9.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "ijk@123.com",
            status: "open"
        },
        {
            name: "J",
            address: "j",
            contactNumber: [10.1, 10.2, 10.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "jkl@123.com",
            status: "open"
        },
        {
            name: "K",
            address: "k",
            contactNumber: [11.1, 11.2, 11.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "klm@123.com",
            status: "open"
        },
        {
            name: "L",
            address: "l",
            contactNumber: [12.1, 12.2, 12.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "lmn@123.com",
            status: "open"
        },
        {
            name: "M",
            address: "m",
            contactNumber: [13.1, 13.2, 13.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "mno@123.com",
            status: "open"
        },
        {
            name: "N",
            address: "n",
            contactNumber: [14.1, 14.2, 14.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "nop@123.com",
            status: "open"
        },
        {
            name: "O",
            address: "o",
            contactNumber: [15.1, 15.2, 15.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "opq@123.com",
            status: "open"
        },
        {
            name: "P",
            address: "p",
            contactNumber: [16.1, 16.2, 16.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "pqr@123.com",
            status: "open"
        },
        {
            name: "Q",
            address: "q",
            contactNumber: [17.1, 17.2, 17.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "qrs@123.com",
            status: "open"
        },
        {
            name: "R",
            address: "r",
            contactNumber: [18.1, 18.2, 18.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "rst@123.com",
            status: "open"
        },
        {
            name: "S",
            address: "s",
            contactNumber: [19.1, 19.2, 19.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "stu@123.com",
            status: "open"
        },
        {
            name: "T",
            address: "t",
            contactNumber: [20.1, 20.2, 20.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "tuv@123.com",
            status: "open"
        },
        {
            name: "U",
            address: "u",
            contactNumber: [21.1, 21.2, 21.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "uvw@123.com",
            status: "open"
        },
        {
            name: "V",
            address: "v",
            contactNumber: [22.1, 22.2, 22.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "vwx@123.com",
            status: "open"
        },
        {
            name: "W",
            address: "w",
            contactNumber: [23.1, 23.2, 23.3],
            Starttime: "10:00",
            Endtime: "22:00",
            mail: "wxy@123.com",
            status: "open"
        }
    ];




    const cardsPerPage = 12; // Number of cards per page
    const cardContainer = document.querySelector(".allOutletCardsContainer");
    var currentPage = 1;


    Outlets.forEach(
        (outlet) => {
            let card = document.createElement("div");
            card.classList.add('outletCard');
            card.innerHTML = `
                <p class="outletName">
                    ${outlet.name}
                </p>

                <div class="outletLocation">
                    <img src="/img/locationIcon.svg" alt="location icon" class="outletLoctationIcon cardIcon" />
                    <p class="outletLoctationText cardText">
                        ${outlet.address}
                    </p>
                </div>

                <div class="outletContactNumber">
                    <img src="/img/callIcon.svg" alt="ContactNumber icon"
                        class="outletLContactNumberIcon cardIcon" />
                    <p class="outletContactNumberText cardText">
                        ${outlet.contactNumber.forEach(number => {
                return "+91 " + number + " ,"
            })}
                    </p>
                </div>

                <div class="outletTiming">
                    <img src="/img/timeIcon.svg" alt="Timing icon" class="outletLTimingIcon cardIcon" />
                    <p class="outletTimingText cardText">
                        Timings: ${outlet.Starttime} to ${outlet.Endtime}
                    </p>
                    <div class="outletStatus">
                        ${outlet.status}
                    </div>
                </div>

                <div class="outletMail">
                    <img src="/img/mailIcon.svg" alt="Mail icon" class="outletLMailIcon cardIcon" />
                    <p class="outletMailText cardText">
                        ${outlet.mail}
                    </p>
                </div>

                <div class="cardCTA">
                    <button class="visitWebsite">
                        Visit Website
                    </button>
                    <button class="sendEnquiry">
                        Send Enquiry
                    </button>
                </div>`

            cardContainer.appendChild(card);

        }
    )


    const cards = document.querySelectorAll(".outletCard");
    const totalCards = Outlets.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const paginationContainer = document.querySelector(".paginationButtonContainer");

    var lastIndexPage = [1, 2, 3]
    function showPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    function updatePaginationButtons(index) {
        if (index > 3 && index < totalPages - 1) {
            lastIndexPage = [index, index + 1, index + 2]
        } else if (index > 3) {
            lastIndexPage = [totalPages - 2, totalPages - 1, totalPages]
        } else if (index < 3) {
            lastIndexPage = [1, 2, 3]
        }
        const previousBtn = paginationContainer.querySelector(".previous");
        const nextBtn = paginationContainer.querySelector(".next");
        const pageNumberBtns = paginationContainer.querySelectorAll(".page");

        previousBtn.style.display = index === 1 ? "none" : "inline-block";
        nextBtn.style.display = index === totalPages ? "none" : "inline-block";

        pageNumberBtns.forEach(btn => {
            const pageNumber = parseInt(btn.dataset.page);
            // if(btn.innerText == pageNumber - 1){

            // } else()
            btn.innerText = pageNumber;
            if (pageNumber === index) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        let updatePage = index
        count = 0
        pageNumberBtns.forEach((btn, key) => {
            if (lastIndexPage.includes(parseInt(btn.dataset.page))) {
                btn.style.display = 'block'
            } else {
                btn.style.display = 'none'
            }
        });
    }

    function goToPage(page) {
        console.log(page)
        updatePaginationButtons(page);
        currentPage = page;
        showPage(currentPage);
    }

    function createPaginationButtons() {
        if(totalPages <= 1){
            return
        }
        const previousBtn = document.createElement("button");
        previousBtn.classList.add("previous");
        previousBtn.textContent = "Previous";
        previousBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });

        const nextBtn = document.createElement("button");
        nextBtn.classList.add("next");
        nextBtn.textContent = "Next";
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });

        paginationContainer.appendChild(previousBtn);

        for (let i = currentPage; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.classList.add("page");
            pageBtn.textContent = i;
            pageBtn.dataset.page = i;
            pageBtn.addEventListener("click", () => {
                goToPage(i);
            });
            paginationContainer.appendChild(pageBtn);
        }

        paginationContainer.appendChild(nextBtn);
    }

    showPage(currentPage);
    createPaginationButtons();
    updatePaginationButtons(1);
}



function handleSearchStateCity() {
    const states = {
        "New Delhi": ["Delhi", "Noida", "Gurgaon"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Tamilnadu": ["Chennai", "Coimbatore", "Madurai"]
        // Add more states and cities as needed
    };

    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");

    // Populate state dropdown
    for (const state in states) {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    }

    // Populate city dropdown based on selected state
    stateDropdown.addEventListener("change", function () {
        const selectedState = this.value;
        cityDropdown.innerHTML = ""; // Clear city dropdown
        const cities = states[selectedState];
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    });
}
let testimonialsData = [
    {
        id: 1,
        rating: 5,
        title: "Good limestones and payment options..",
        content:
            "Products at FabMFG are best and value for money. Shopping experience is also smooth. 100% recommend!",
        profile: {
            image: "/img/profileIcon.svg",
            name: "Sharma LLP, Jaipur",
        },
    },
    {
        id: 2,
        rating: 5,
        title: "Good limestones and payment options..",
        content:
            "Products at FabMFG are best and value for money. Shopping experience is also smooth. 100% recommend!",
        profile: {
            image: "/img/profileIcon.svg",
            name: "Sharma LLP, Jaipur",
        },
    },
    {
        id: 3,
        rating: 5,
        title: "Good limestones and payment options..",
        content:
            "Products at FabMFG are best and value for money. Shopping experience is also smooth. 100% recommend!",
        profile: {
            image: "/img/profileIcon.svg",
            name: "Sharma LLP, Jaipur",
        },
    },
    {
        id: 3,
        rating: 5,
        title: "Good limestones and payment options..",
        content:
            "Products at FabMFG are best and value for money. Shopping experience is also smooth. 100% recommend!",
        profile: {
            image: "/img/profileIcon.svg",
            name: "Sharma LLP, Jaipur",
        },
    },
    {
        id: 3,
        rating: 5,
        title: "Good limestones and payment options..",
        content:
            "Products at FabMFG are best and value for money. Shopping experience is also smooth. 100% recommend!",
        profile: {
            image: "/img/profileIcon.svg",
            name: "Sharma LLP, Jaipur",
        },
    },
];

let brochuresData = [
    {
        id: 1,
        brochure_name: "Catalog - 2022",
        brochure_download_link: "",
    },
    {
        id: 2,
        brochure_name: "Dealer Info - 2022",
        brochure_download_link: "",
    },
    {
        id: 3,
        brochure_name: "Franchise List",
        brochure_download_link: "",
    },
    {
        id: 4,
        brochure_name: "Franchise List",
        brochure_download_link: "",
    },
];

let mediaData = [
    {
        id: 1,
        mediaImg: "/img/mediaImg1.svg"
    },
    {
        id: 1,
        mediaImg: "/img/mediaImg1.svg"
    },
    {
        id: 1,
        mediaImg: "/img/mediaImg1.svg"
    },
    {
        id: 1,
        mediaImg: "/img/mediaImg1.svg"
    }
]

//Function to render media data
function renderMediaGallery() {
    let mediaGalleryContainer = document.getElementById("mediaGalleryContainer");
    mediaData.forEach(function (media) {
        let mediaElement = `<img src="/img/mediaImg1.svg" alt="mediaImg1" class="mediaImg" id="mediaImg${media.id}"/>`
        mediaGalleryContainer.innerHTML += mediaElement;
    })
}

// Function to render Brochures
function renderBrochures() {
    let brochuresContainer = document.getElementById("brochuresContainer");
    brochuresData.forEach(function (brochure) {
        let brochureCard = createBrochureCard(brochure);
        brochuresContainer.innerHTML += brochureCard;
    });
}

//function to create brochure card
function createBrochureCard(brochure) {
    let brochureCardHTML = `
     <div class="brochureCard" id="brochureCard${brochure?.id}">
     <img src="/img/pdf_Icon.svg" alt="" class="pdfIcon"/>
     <p class="pdfName">${brochure?.brochure_name}</p>
     <a  href="${brochure?.brochure_download_link}" download >
     <div class="downloadButtonContainer">
     <button type="button" class="downloadBtn">Download</button>
     <img src="/img/download_Icon.svg" alt=""/>
  </div>
  </a>`;
    return brochureCardHTML;
}

//function to create testimonail card
function createTestimonialCard(testimonial) {
    let starRating = "";
    for (let i = 0; i < testimonial.rating; i++) {
        starRating += '<img src="/img/rating_star.svg" alt="star">';
    }

    let testimonialCardHTML = `
          <div class="testimonialCard" id="testimonial${testimonial?.id}">
              <div class="starRating">
                  ${starRating}
              </div>
              <div class="testimonialContent">
                  <p class="contentTitle">${testimonial.title}</p>
                  <p class="contentDesc">${testimonial.content}</p>
                  <div class="testimonialProfile">
                      <img src="${testimonial.profile.image}" alt="profileIcon"/>
                      <p class="profileText">${testimonial.profile.name}</p>
                  </div>
              </div>
          </div>
      `;

    return testimonialCardHTML;
}
// Function to render testimonials
function renderTestimonials() {
    let testimonialsContainer = document.getElementById("testimonialsContainer");
    testimonialsData.forEach(function (testimonial) {
        let testimonialCard = createTestimonialCard(testimonial);
        testimonialsContainer.innerHTML += testimonialCard;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderMediaGallery();  //render media gallery 
    renderBrochures(); // Render Brochures
    renderTestimonials(); // render testimonials
    paginationHandler(); // HANDLE PAGINATION 
    handleSearchStateCity(); // Handle search option by staet and city
});
