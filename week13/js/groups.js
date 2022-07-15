const select = document.querySelector('.option')

fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    data.courses.forEach(course => render(course))
  });

function render(course) {
  const opt = document.createElement('option')
  opt.value = course.title
  const content = document.createTextNode(`${course.title}`)
  opt.appendChild(content)
  select.appendChild(opt)
}