let current = 0
const projects = document.querySelectorAll('.projects')
const arrows = document.querySelectorAll('.arrow')

// smooth scroll effect
document.querySelectorAll('nav-links').forEach((anchor) => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

// when you click the arrows
arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		projects[current].classList.toggle('hidden')
		projects[current].style.transition = 'none'
		changeCurrent(e.target.id)
		changeProject(current)
	})
})

// changing the current project to show
const changeCurrent = (direction) => {
	direction === 'left' ? (current -= 1) : current++
	if (current < 0) current = projects.length - 1
	if (current > projects.length - 1) current = 0
}

// showing the newly selected project
const changeProject = (current) => {
	projects[current].classList.toggle('hidden')
	projects[current].style.transition = 'opacity .5s linear'
}
