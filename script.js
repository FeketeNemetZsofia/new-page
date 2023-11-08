console.log("loaded")

rootElement = document.querySelector("#root")

const fetchURL = (url) => fetch(url).then(res => res.json())

const charaComponent = (charaData) => `
<div class="char">
<img src=${charaData.image}>
<h2>${charaData.name}</h2>
<h3> Appears in: ${charaData.episode.length} episodes</h3>
</div>
`



const init = async () => {
    fetchURL("https://rickandmortyapi.com/api/character").then(data => {
        console.log(data)
        const info = data.info
        const characters = data.results

        characters.forEach(chara => { rootElement.insertAdjacentHTML("beforeend", charaComponent(chara))
            
        });
    })
}

init()