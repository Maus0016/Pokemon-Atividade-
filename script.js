async function getPokes() {
console.log("Achou")
    
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon")
    console.log(resposta, "pokes")
    const pokemon = await resposta.json()
    console.log(pokemon.results, "resultado")
    const ul = document.querySelector("ul")
    pokemon.results.forEach(async(pokemon)=> {
        console.log(pokemon,"pokemon")
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerText = "Nome: " + pokemon.name
        

        const resposta = await fetch(pokemon.url)
        const infos = await resposta.json()
        console.log(infos,"infos")
        const img = document.createElement("img")
        img.src = infos.sprites.front_default

        const pesopoke = document.createElement("p")
        pesopoke.innerText = "Peso: " + infos.weight

        const alturapoke = document.createElement("p")
        alturapoke.innerText = "Altura: " + infos.height

        const experienciepoke = document.createElement("p")
        experienciepoke.innerText = "Experiencia: " + infos.base_experience

        const numeracaopoke = document.createElement("p")
        numeracaopoke.innerText = "Pedido: " + infos.order

        const ordempoke = document.createElement("p")
        ordempoke.innerText = "Numeração: " + infos.id

        const titleType = document.createElement("p")
        titleType.innerText = "Tipos: "
        const divTypes = document.createElement("div")

        divTypes.append(titleType)

        infos.types.forEach((item)=>{
            const tipopoke = document.createElement("p")
            tipopoke.innerText =  item.type.name
            divTypes.append(tipopoke)
        })
        const titulostats = document.createElement("p")
        titulostats.innerText = "Status: " 
        const divstats = document.createElement("div")

        divstats.append(titulostats)
        
        infos.stats.forEach((item)=>{
            const statuspoke = document.createElement("p")
            statuspoke.innerText = item.base_stat
            divstats.append(statuspoke)
        })
        




        
        li.append(img,p,pesopoke,alturapoke,experienciepoke,numeracaopoke,ordempoke,divTypes, divstats)
        

        ul.append(li)
    });
    
}
getPokes()