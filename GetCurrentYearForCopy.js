window.addEventListener(
  'load',
  function () {
    var copy_year = document.getElementById('copy-year')
    var dateNow = new Date()
    copy_year.innerHTML = dateNow.getFullYear().toString()
  },
  false
)
