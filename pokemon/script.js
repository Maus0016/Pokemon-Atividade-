function getPokes() {

    const typeTipos = {
    grass: "Grama",
    fire: "Fogo",
    water: "Aguá",
    bug: "Inseto",
    normal: "Normal",
    }
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos,"pokemon")
    
    
        const Nomepoke = document.createElement("p")
        Nomepoke.innerText = `Nome: ${infos.name}`
        const li = document.createElement("li")

        const img = document.createElement("img")
        img.alt = "oo"
        img.src = infos.sprites.front_default
        const img1 = document.createElement("img")
        img1.src = infos.sprites.front_shiny
        //const img2 = document.createElement("img")
        //img2.src = infos.sprites.back_default

        const divimages = document.createElement("div")
        divimages.append(img, img1 )

         const pesopoke = document.createElement("p")
        pesopoke.innerText = `Peso: ${infos.weight}`

        const alturapoke = document.createElement("p")
        alturapoke.innerText = `Altura:  ${infos.height}`

        const experienciepoke = document.createElement("p")
        experienciepoke.innerText = `Experiencia: ${infos.base_experience}`

        const numeracaopoke = document.createElement("p")
        numeracaopoke.innerText = `Ordem:  ${infos.order}`

        const ordempoke = document.createElement("p")
        ordempoke.innerText = `Pokemon # ${infos.id}`

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
        titulostats.classList.add("titulo-stats")
        titulostats.innerText = "Status: " 
        const divstats = document.createElement("div")

        divstats.append(titulostats)
        divstats.classList.add("stats")
        infos.stats.forEach((item)=>{
            const statuspoke = document.createElement("p")
            statuspoke.innerText = item.stat.name +": "+ item.base_stat 

            divstats.append(statuspoke)
            
        })


        const main = document.querySelector("main")
        
        main.append(divimages,Nomepoke,pesopoke,alturapoke,numeracaopoke,ordempoke, divTypes,divstats)
        main.classList.add(typeTipos[infos.types[0].type.name])

}
getPokes()