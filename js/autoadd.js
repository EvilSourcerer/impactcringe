document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
})

fetch('https://api.github.com/repos/evilsourcerer/impactcringe/contents/images')
  .then(res => {
    return res.json()
  })
  .then(res => {
    document.getElementById('preload').style.display = 'none'

    for (let i = 0; i < res.length; i++) {
      let cringe = document.createElement('img')
      cringe.src = res[i]["download_url"]
      cringe.className = 'materialboxed responsive-img card initialized cringe waves-effect waves-light waves-block'

      let cringecontainer = document.createElement('div')
      cringecontainer.className = 'col s12 m4 14'
      cringecontainer.appendChild(cringe)
      document.getElementById('imagecontainer').appendChild(cringecontainer)

      M.Materialbox.init(cringe);
      M.Waves.init(cringe);
    }

    if(res.length == 0 || res["documentation_url"]) {
      document.getElementById('imagecontainer').innerHTML = `<h5 style="text-align: center"><i>For some reason no cringe was found...</i></h5>`;
    }
  })
  .catch(e => {
    document.getElementById('preload').innerHTML =
      'Unfortunately, an error prevented the cringe from loading...'
    console.log(e)
  })
