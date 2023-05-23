//const { json } = require("node:stream/consumers");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const loader = document.getElementById("loader");

// LOADER FUNCTION

const loaderFnc = (bool) => {
    if (bool) {
        loader.style.visibility = "visible";
    } else {
        loader.style.visibility = "hidden";
    }
};

// Promise

const getData = (resurce) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", resurce);
        request.send();
        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                loaderFnc(true);
            } else if (request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText);
                resolve(data.results);
                setTimeout(() => {
                    loaderFnc(false);
                }, 1000);
            } else if (request.readyState == 4) {
                console.log("some erorr...");
                reject(false);
            }
        });
    });
};

const reload = () => {
    getData(API)
        .then((data) => {
            updateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

document.addEventListener("DOMContentLoaded", reload);
