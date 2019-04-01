let current = 0
const projects = document.querySelectorAll('.projects')
const arrows = document.querySelectorAll('.arrow')

// when you click the arrows
arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		projects[current].classList.toggle('hidden')
		projects[current].classList.remove('animated', 'slideInRight', 'slideInLeft')
		projects[current].style.transition = 'none'
		changeCurrent(e.currentTarget.id)
		changeProject(current, e.currentTarget.id)
	})
})

document.querySelector('.hamburger--spring').addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('is-active')
	document.querySelector('.menu').classList.toggle('open')
})

// changing the current project to show
const changeCurrent = (direction) => {
	direction === 'left' ? (current -= 1) : current++
	if (current < 0) current = projects.length - 1
	if (current > projects.length - 1) current = 0
}

// showing the newly selected project
const changeProject = (current, direction) => {
	console.log(direction)
	projects[current].classList.toggle('hidden')
	if (direction === 'left') {
		projects[current].classList.add('animated', 'slideInLeft')
	} else {
		projects[current].classList.add('animated', 'slideInRight')
	}
	// projects[current].style.transition = 'opacity .5s linear'
}
