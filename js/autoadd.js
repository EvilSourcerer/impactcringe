fetch('./images.json').then((res) => {
  return res.json();
}).then(() => {
  document.getElementById("imagecontainer").innerHTML = JSON.stringify(res.json());
}).catch((e) => {
  document.getElementById("preload").innerHTML = "Unfortunately, an error prevented the cringe from loading...";
  console.log(e);
});