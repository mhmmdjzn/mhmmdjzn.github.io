// Navigasi berdasarkan Section

const sections = document.querySelectorAll('.colorful-section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Hover Aavatar


const image = document.getElementById('avatar');

    image.addEventListener('mouseover', function() {
            this.src = 'assets/img/man-hover.svg';
        });

    image.addEventListener('mouseout', function() {
            this.src = 'assets/img/man.svg';
        });

// Smooth Transisi

const section = document.querySelectorAll('colorful-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});


// Carousel

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Tampilkan slide pertama

showSlide(currentIndex);


// Menghilangkan navigasi di device kecil

function toggleMenu() {
    const navMenu = document.querySelector('.nav');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const navMenu = document.querySelector('.nav');
    navMenu.classList.remove('active');
}

// Menghilangkan Navigasi saat klik asal //

document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger'); // tombol hamburger atau elemen untuk toggle

    // Mengecek apakah klik terjadi di luar navMenu dan hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
    }
});
