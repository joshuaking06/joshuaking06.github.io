let current = 0
const projects = document.querySelectorAll('.projects')
const arrows = document.querySelectorAll('.arrow')

arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		slideOut(current, e.target.id)
		changeCurrent(e.target.id)
		changeProject(current)
	})
})

const changeCurrent = (direction) => {
	direction === 'left' ? (current -= 1) : current++
	if (current < 0) current = projects.length - 1
	if (current > projects.length - 1) current = 0
	console.log(current)
	slideIn(current, direction)
}

const slideOut = (current, direction) => {
	projects[current].classList.remove(`slide-out-${direction}`)
	projects[current].classList.add(`slide-out-${direction}`)
}

const slideIn = (current, direction) => {
	projects[current].classList.remove(`slide-in-${direction}`)
	projects[current].classList.add(`slide-in-${direction}`)
}

const changeProject = (current) => {
	projects.forEach((project, index) => {
		if (index === current) {
			project.classList.add('visible')
			project.classList.remove('hidden')
		} else {
			project.classList.add('hidden')
			project.classList.remove('visible')
		}
	})
}
