const fs=require("fs")

let objeto={id:"", nombre:"objeto"}

const save =()=>{
    fs.writeFile("./fileAsync.txt",objeto,(error)=>{
    if (error){
        console.log(error)
    }else{
        objeto.id="1"
        console.log(objeto)
    }
})
}
const id="1"


const getbyId=()=>{fs.readFile('./fileAsync.txt', 'utf-8' , (error, contenido) => {
    if(error){
        console.log(error)
    } else{
        console.log(contenido)
        if (id===contenido.id){
            console.log(contenido)
        }

    }
})
}

const getAll=()=>{fs.readFile('./fileAsync.txt', 'utf-8' , (error, contenido) => {
    if(error){
        console.log(error)
    } else{
        let object=[contenido]
        return object

    }
})
}

save()
getbyId()
getAll()
        
        
/*setTimeout(() => {
    fs.unlink('./fileAsync.txt', (error)=> {
    if(error) {
        console.log(error)
    } else {
        console.log('Archivo borrado')
    }
})
}, 5000); 
*/
