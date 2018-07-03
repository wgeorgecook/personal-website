const Modals = function() {
    this.projectModal = document.querySelector('#projectModal');
    this.aboutModal = document.querySelector('#aboutModal');
    this.background = document.querySelector("#modal");
}

Modals.prototype.showAboutModal = function() {
    this.background.style.display = "block";
    this.aboutModal.style.display = "grid";
}


Modals.prototype.showProjectModal = function() {
    this.background.style.display = "block";
    this.projectModal.style.display = "block";
}

/* Animate the out modal
Modals.prototype.hideModal = function() {
    this.background.style.display = "none";
    this.aboutModal.classList.remove('fadeInUp')
    this.contactModal.classList.remove('fadeInUp')
    this.aboutModal.classList.add('fadeOutDown')
    this.contactModal.classList.add('fadeOutDown')
}
*/

Modals.prototype.reset = function() {
    this.background.style.display = "none";
    this.aboutModal.style.display = "none";
    this.projectModal.style.display = "none";
}

const modal = new Modals();

document.addEventListener('click', function(e) {
    switch (e.target.id) {
        case "aboutBtn":
            modal.showAboutModal();
            break;
        case "projectBtn":
            modal.showProjectModal();
            break;
        case "modal":
            // modal.hideModal();
            modal.reset();
            break;
    };
});