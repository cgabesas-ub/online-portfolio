const words = ["Computer Engineer", "Programmer", "Robotics Student", "Tech Enthusiast"];
const typed = document.getElementById("typed");
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = words[wordIndex];
  typed.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    deleting = !deleting;
    if (!deleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 800);
  }
}
type();
