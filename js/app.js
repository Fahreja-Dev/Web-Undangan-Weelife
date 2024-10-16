/*
<============================================================>
Copyright (c) 2024 Fahreja-Dev
Github: https://github.com/Fahreja-Dev/Web-Undangan-Weelife
Theme Design: Fahreja Dev
<============================================================>
*/
const payment = {
    saweria: "https://saweria.co/FahrejaDev"
}

const profile = {
    id: "174158404",
    idRoom: "100042097",
    linkRoom: "https://www.weelifeapp.com/d/F-1bvuVs"
}

const fahreja = {
    notification: document.getElementById("notification"),
    closeNotification: document.querySelector(".wrapping-box"),
    body: document.getElementById("body"),
    audio: document.getElementById("audio"),
    undangan: document.querySelector(".wrapping-undangan"),
    kado: document.querySelector(".kado"),
    gift: document.querySelector(".wrapping-gift"),
    barLoading: document.querySelector(".bar-loading"),
    idWl: document.querySelector(".id-wl"),
    alertCopy: document.querySelector(".alert-copy"),
    tab: document.querySelectorAll(".tab-menu > nav > ul > li"),
    content: document.querySelectorAll(".content-tab > div"),
    partyHat1: document.querySelector(".party-hat1"),
    partyHat2: document.querySelector(".party-hat2"),
    partyHat3: document.querySelector(".party-hat3"),
    partyHat4: document.querySelector(".party-hat4"),
    balloon1: document.querySelector(".balloon1"),
    balloon2: document.querySelector(".balloon2"),
    balloon3: document.querySelector(".balloon3"),
    balloon4: document.querySelector(".balloon4"),
    gallery: document.querySelectorAll(".container-gallery > .frame > .gallery-image"),
    copyIdRoom: document.querySelector(".copy-id-room"),
    linkRoom: document.querySelector(".link-room"),
    copyId: document.querySelector(".copy-id"),
    logoRsy: document.querySelector(".logo-rsy"),
    saweriaPayment: document.getElementById("saweria")
}

fahreja.tab.forEach((t, i) => {
    fahreja.content.forEach(c => c.classList.add("c-deactive"))
    t.addEventListener("click", () => {
        fahreja.tab.forEach(t => t.classList.remove("t-active"))
        fahreja.content.forEach(c => { return c.classList.add("c-deactive") + c.classList.remove("c-active") })
        fahreja.content[i].classList.remove("c-deactive")
        fahreja.content[i].classList.add("c-active")
        t.classList.add("t-active")
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy");

    const lazyLoad = (target) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove("lazy");
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        observer.observe(target);
    };

    lazyImages.forEach(image => {
        lazyLoad(image);
    });
});

fahreja.logoRsy.addEventListener("click", () => {
    const fahrejaDev = {
        imageSource: fahreja.logoRsy.src,
        galeryShow: document.querySelector(".gallery-show"),
        tapProfile: document.createElement("div"),
        closeProfile: document.createElement("div"),
        closeImage: document.createElement("span"),
        image: document.createElement("img"),
        wrapping1: document.createElement("div"),
        wrapping2: document.createElement("div")
    }


    fahrejaDev.galeryShow.appendChild(fahrejaDev.tapProfile)
    fahrejaDev.tapProfile.setAttribute("class", "show-image")
    fahrejaDev.tapProfile.appendChild(fahrejaDev.closeProfile)
    fahrejaDev.closeProfile.appendChild(fahrejaDev.wrapping1)
    fahrejaDev.wrapping1.appendChild(fahrejaDev.image)
    fahrejaDev.closeProfile.setAttribute("class", "close-gallery")
    fahrejaDev.image.setAttribute("src", fahrejaDev.imageSource)
    fahrejaDev.image.setAttribute("class", "show-image-gallery")
    fahrejaDev.closeProfile.appendChild(fahrejaDev.wrapping2)
    fahrejaDev.wrapping2.appendChild(fahrejaDev.closeImage)
    fahrejaDev.closeImage.setAttribute("class", "closeImage")

    const close = document.querySelector(".closeImage")
    const show = document.querySelector(".show-image")

    show.addEventListener("click", () => {
        show.remove()
    })
    close.addEventListener("click", () => {
        show.remove()
    })
})

fahreja.gallery.forEach((galleryPick) => {

    galleryPick.addEventListener("click", () => {
        const fahrejaDev = {
            imageSource: galleryPick.src,
            galeryShow: document.querySelector(".gallery-show"),
            tapProfile: document.createElement("div"),
            closeProfile: document.createElement("div"),
            closeImage: document.createElement("span"),
            image: document.createElement("img"),
            wrapping1: document.createElement("div"),
            wrapping2: document.createElement("div")
        }

        fahrejaDev.galeryShow.appendChild(fahrejaDev.tapProfile)
        fahrejaDev.tapProfile.setAttribute("class", "show-image")
        fahrejaDev.tapProfile.appendChild(fahrejaDev.closeProfile)
        fahrejaDev.closeProfile.appendChild(fahrejaDev.wrapping1)
        fahrejaDev.wrapping1.appendChild(fahrejaDev.image)
        fahrejaDev.closeProfile.setAttribute("class", "close-gallery")
        fahrejaDev.image.setAttribute("src", fahrejaDev.imageSource)
        fahrejaDev.image.setAttribute("class", "show-image-gallery")
        fahrejaDev.closeProfile.appendChild(fahrejaDev.wrapping2)
        fahrejaDev.wrapping2.appendChild(fahrejaDev.closeImage)
        fahrejaDev.closeImage.setAttribute("class", "closeImage")

        const close = document.querySelector(".closeImage")
        const show = document.querySelector(".show-image")

        show.addEventListener("click", () => {
            show.remove()
        })
        close.addEventListener("click", () => {
            show.remove()
        })
    })

})


if (screen.width <= 850) {
    fahreja.partyHat1.src = "./image/party-hat.svg"
    fahreja.partyHat2.src = "./image/party-hat.svg"
    fahreja.partyHat3.src = "./image/party-hat.svg"
    fahreja.partyHat4.src = "./image/party-hat.svg"
    fahreja.balloon1.src = "./image/balloon.png"
    fahreja.balloon2.src = "./image/balloon.png"
    fahreja.balloon3.src = "./image/balloon.png"
    fahreja.balloon4.src = "./image/balloon.png"
}

window.addEventListener('scroll', () => {
    const scroll = {
        body: document.documentElement.scrollTop * 0.25,
        objectHat: document.documentElement.scrollTop * 0.50,
        objectBalloon: document.documentElement.scrollTop * 0.40
    }

    fahreja.partyHat1.style.top = `${scroll.objectHat}px`
    fahreja.partyHat2.style.bottom = `${scroll.objectHat}px`
    fahreja.partyHat3.style.top = `${scroll.objectHat}px`
    fahreja.partyHat4.style.top = `${scroll.objectHat}px`
    fahreja.balloon1.style.bottom = `${scroll.objectBalloon}px`
    fahreja.balloon2.style.top = `${scroll.objectBalloon}px`
    fahreja.balloon3.style.bottom = `${scroll.objectBalloon}px`
    fahreja.balloon4.style.bottom = `${scroll.objectBalloon}px`

    if (screen.width <= 850) {

        if (scroll.body >= 17.6) {
            fahreja.partyHat1.style.top = "34px"
        }

        if (scroll.body >= 17.79) {
            fahreja.partyHat2.style.bottom = "35px"
        } else if ((scroll.body <= 3.4)) {
            fahreja.partyHat2.style.bottom = "5px"
        }

        if (scroll.body >= 17.79) {
            fahreja.partyHat3.style.top = "35.59px"
        } else if (scroll.body <= 5.8) {
            fahreja.partyHat3.style.top = "11.19px"
        }

        if (scroll.body >= 17.79) {
            fahreja.partyHat4.style.top = "35.59px"
        } else if (scroll.body <= 1.6) {
            fahreja.partyHat4.style.top = "3.2px"
        }

        if (scroll.body >= 18) {
            fahreja.balloon1.style.bottom = "28.2px"
        } else if (scroll.body <= 1.2) {
            fahreja.balloon1.style.bottom = "2.4px"
        }

        if (scroll.body >= 17.79) {
            fahreja.balloon2.style.top = "28.47px"
        } else if (scroll.body <= 1.39) {
            fahreja.balloon2.style.top = "2.23px"
        }

        if (scroll.body >= 17.79) {
            fahreja.balloon3.style.bottom = "28.47px"
        } else if (scroll.body <= 1.6) {
            fahreja.balloon3.style.bottom = "2.56px"
        }

        if (scroll.body >= 17.6) {
            fahreja.balloon4.style.bottom = "28.16px"
        } else if (scroll.body <= 2) {
            fahreja.balloon4.style.bottom = "3.2px"
        }

    } else if (screen.width <= 1536) {
        if (scroll.body >= 24) {
            fahreja.partyHat1.style.top = "49px"
            fahreja.partyHat1.src = "./image/party-hat.svg"
        } else {
            fahreja.partyHat1.src = "./image/party-hat-colour.svg"
        }

        if (scroll.body >= 24.2) {
            fahreja.partyHat2.style.bottom = "48.4px"
            fahreja.partyHat2.src = "./image/party-hat.svg"
        } else if (scroll.body <= 2.4) {
            fahreja.partyHat2.style.bottom = "4.8px"
            fahreja.partyHat2.src = "./image/party-hat-colour.svg"
        } else {
            fahreja.partyHat2.src = "./image/party-hat-colour.svg"
        }

        if (scroll.body >= 24.2) {
            fahreja.partyHat3.style.top = "48px"
            fahreja.partyHat3.src = "./image/party-hat.svg"
        } else if (scroll.body <= 5.4) {
            fahreja.partyHat3.style.top = "11.19px"
            fahreja.partyHat3.src = "./image/party-hat-colour.svg"
        } else {
            fahreja.partyHat3.src = "./image/party-hat-colour.svg"
        }

        if (scroll.body >= 24.2) {
            fahreja.partyHat4.style.top = "48px"
            fahreja.partyHat4.src = "./image/party-hat.svg"
        } else if (scroll.body <= 1.2) {
            fahreja.partyHat4.style.top = "2.4px"
            fahreja.partyHat4.src = "./image/party-hat-colour.svg"
        } else {
            fahreja.partyHat4.src = "./image/party-hat-colour.svg"
        }

        if (scroll.body >= 24.2) {
            fahreja.balloon1.style.bottom = "38.7px"
            fahreja.balloon1.src = "./image/balloon.png"
        } else if (scroll.body <= 2) {
            fahreja.balloon1.style.bottom = "3.2px"
            fahreja.balloon1.src = "./image/balloon-yellow.png"
        } else {
            fahreja.balloon1.src = "./image/balloon-yellow.png"
        }

        if (scroll.body >= 24.39) {
            fahreja.balloon2.style.top = "39px"
            fahreja.balloon2.src = "./image/balloon.png"
        } else if (scroll.body <= 1.6) {
            fahreja.balloon2.style.top = "2.56px"
            fahreja.balloon2.src = "./image/balloon-pink.png"
        } else {
            fahreja.balloon2.src = "./image/balloon-pink.png"
        }

        if (scroll.body >= 24.2) {
            fahreja.balloon3.style.bottom = "38.72px"
            fahreja.balloon3.src = "./image/balloon.png"
        } else if (scroll.body <= 2.2) {
            fahreja.balloon3.style.bottom = "3.52px"
            fahreja.balloon3.src = "./image/balloon-blue.png"
        } else {
            fahreja.balloon3.src = "./image/balloon-blue.png"
        }

        if (scroll.body >= 24.2) {
            fahreja.balloon4.style.bottom = "38.72px"
            fahreja.balloon4.src = "./image/balloon.png"
        } else if (scroll.body <= 2.4) {
            fahreja.balloon4.style.bottom = "3.84px"
            fahreja.balloon4.src = "./image/balloon-yellow.png"
        } else {
            fahreja.balloon4.src = "./image/balloon-yellow.png"
        }
    }


});

fahreja.idWl.addEventListener("click", () => {
    let alertText = fahreja.alertCopy.getAttribute("class").replace("alert-copy ", "")

    if (alertText !== "alert-copy") {
        navigator.clipboard.writeText(profile.id)
        fahreja.alertCopy.classList.remove("close-copy")
        setTimeout(() => {
            fahreja.alertCopy.classList.add("close-copy")
        }, 900)
    }

})

fahreja.copyIdRoom.addEventListener("click", () => {
    let alertText = fahreja.alertCopy.getAttribute("class").replace("alert-copy ", "")

    if (alertText !== "alert-copy") {
        navigator.clipboard.writeText(profile.idRoom)
        fahreja.copyId.src = "./image/check.png"
        fahreja.alertCopy.classList.remove("close-copy")
        setTimeout(() => {
            fahreja.copyId.src = "./image/copy-room.png"
            fahreja.alertCopy.classList.add("close-copy")
        }, 900)
    }
})

fahreja.linkRoom.addEventListener("click", () => {
    window.open(profile.linkRoom)
})

fahreja.saweriaPayment.addEventListener("click", () => {
    window.open(payment.saweria)
})

fahreja.notification.addEventListener("click", () => {
    fahreja.kado.classList.remove("close-kado")
    fahreja.gift.classList.remove("close-kado")
    loading(fahreja.barLoading)

    setTimeout(() => {
        fahreja.closeNotification.classList.add("close-notification")
        fahreja.body.classList.add("close-body")
    }, 1500)

    setTimeout(() => {
        fahreja.closeNotification.remove()
        fahreja.body.classList.remove("body")
        fahreja.body.classList.remove("close-body")
        fahreja.body.classList.add("body-undangan")
        fahreja.undangan.classList.remove("close-undangan")
        fahreja.kado.remove()
        fahreja.gift.remove()
    }, 3000)

    setTimeout(() => {
        fahreja.audio.play()
    }, 500)
})

function loading(background) {
    let x = 1

    let loading = setInterval(() => {
        if (x === 100) {
            clearInterval(loading)
        } else {
            x++
            background.style.backgroundImage = "linear-gradient(to right, rgb(134, 255, 134), rgb(0, 221, 255)"
            background.style.width = `${x}%`
        }
    }, 15)
}