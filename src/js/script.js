let modal = document.querySelector('.modalPerson');
let modalvideo = document.querySelector('.modalVideo');
let show = document.querySelector('.showFirstPerson');
let show1 = document.querySelector('.showFirstPerson1');
let arrow = document.querySelector('.mainSection__Playbutton');
let closeButton = document.querySelector('.modal__close-button');
let closeButtonVideo = document.querySelector('.modal__close-buttonVideo');
let personName = document.querySelector('.modal__personName');
let personPosition = document.querySelector('.modal__personPosition');
let personText = document.querySelector('.modal__aboutPerson');

const Persons = [
	{
		name: 'Edgar Morrison',
		position: 'CEO',
		text:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ',
	},
];

function toggleModal() {
	modal.classList.add('show-modal');
	personName.innerHTML = Persons[0].name;
	personPosition.innerHTML = Persons[0].position;
	personText.innerHTML = Persons[0].text;
}

function closeModal() {
	modal.classList.remove('show-modal');
	modalvideo.classList.remove('show-modal');
}

function toggleModalVideo() {
	modalvideo.classList.add('show-modal');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

show.addEventListener('click', toggleModal);
show1.addEventListener('click', toggleModal);
closeButton.addEventListener('click', closeModal);
closeButtonVideo.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);
arrow.addEventListener('click', toggleModalVideo);
