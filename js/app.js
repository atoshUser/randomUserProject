//const { log } = require("console");

const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

form["form__input"].addEventListener("input", () => {
    const inputValue = form["form__input"].value.toLowerCase();
    const userNames = document.querySelectorAll(".user__name");
    userNames.forEach((userName) => {
        if (
            userName.lastElementChild.textContent
                .toLowerCase()
                .includes(inputValue)
        ) {
            userName.parentElement.style.display = "block";
        } else {
            userName.parentElement.style.display = "none";
        }
    });
});

formButton.addEventListener("click", (e) => {
    e.preventDefault();
    reload();
    clearBtn.style.visibility = "visible";
});

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    user.innerHTML = "";
    clearBtn.style.visibility = "hidden";
});
/* get data and update UI */

const updateUI = (info) => {
    user.innerHTML = "";
    info.forEach((element) => {
        const { gender, picture, name, location, dob } = element;
        user.innerHTML += `
        <li class="user__item">
        <button id="delete__btn" class="user__delete--btn">
            <i class="fas fa-trash"></i>
        </button>
        <img
            class="user__img"
            alt="User photo"
            src="${picture.large}"
            width="100"
            height="100"
        />
        <div class="user__name">
            <span class="material-symbols-outlined"
                >badge</span
            >
            <span>- ${name.title} ${name.first} ${name.last}</span>
        </div>
        <div class="user__year">
            <span class="material-symbols-outlined"
                >cake</span
            >
            <span>- ${dob.age} years old.</span>
        </div>
        <div class="user__location">
            <span class="material-symbols-outlined"
                >person_pin_circle</span
            >
            <span>-${location.city}, ${location.country}</span>
        </div>
        <div class="user__gender">
            <span class="material-symbols-outlined"
                >man</span
            >
            <span>- ${gender}</span>
        </div>
    </li>


        `;
    });
};

user.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id == "delete__btn") {
        target.parentElement.remove();
    }
    if (!user.childElementCount) {
        clearBtn.style.visibility = "hidden";
    }
});
