// Only Numbers Allowed In Input Field
let staking = document.getElementById("staking");
staking.onkeypress = () => {
    var regex = /^\d+$/;
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
};


// Open Modal
const modalBtn = document.querySelectorAll(".modal-open"),
    modal = document.getElementById("modal")

if (modalBtn && modal) {
    const showModal = () => {
        modal.classList.toggle('show')
    }
    modalBtn.forEach(n => n.addEventListener('click', showModal));
}


// Close Modal
const closeMenu = (modalCloseID, modalID) => {
    const modalClose = document.getElementById(modalCloseID),
        modal = document.getElementById(modalID)

    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.classList.toggle('show')
        })
    }
}
closeMenu('modal-close', 'modal');


// Get Days on Range Change
const slider = document.getElementById("slider");
if (slider) {
    slider.oninput = () => {
        let val = document.getElementById("slider").value
        document.getElementById('days').innerHTML = `${val} days`
        console.log(val)
    };
}


// gsap animations
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play none none none",
    start: "top 85%",
});



ScrollTrigger.batch(".fade-in-down", {
    onEnter: elements => {
        gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2
        });
    },
    once: true
});

ScrollTrigger.batch(".fade-in", {
    onEnter: elements => {
        gsap.to(elements, {
            delay: 1.2,
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0
        });
    },
    once: true
});


// counter animation
var counts = document.querySelectorAll(".counts");
if (counts) {
    counts.forEach(count => {
        var zero = { val: 0 },
            num = count.getAttribute('data-number'),
            split = (num + "").split("."),
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            delay: 0.6,
            scrollTrigger: count,
            onUpdate: function() {
                let updatedCount = zero.val.toFixed(decimals)
                count.innerHTML = updatedCount;
            }
        });
    });
}