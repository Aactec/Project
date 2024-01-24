const Navbar = document.getElementById('navBar');
function showMenu() {
    Navbar.style.top = '0';
}
function hideMenu() {
    Navbar.style.top = '-440%';
}

const Modal = document.getElementById('Modal');
function openModal() {
    Modal.classList.add('open-modal');
    document.body.style.overflowY = 'hidden';
}
function closeModal() {
    Modal.classList.remove('open-modal');
    document.body.style.overflowY = 'scroll';
}