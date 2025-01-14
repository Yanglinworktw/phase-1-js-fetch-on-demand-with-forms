const init = () => {
  const formInput = document.querySelector('form')
  formInput.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputUser = event.target.children[1].value
    console.log(event.target.children[1].value)

    fetch(`http://localhost:3000/movies/${inputUser}`)
    .then(res => res.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4')
      const summary = document.querySelector('section#movieDetails p')
      title.innerHTML = data.title
      summary.innerHTML = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);