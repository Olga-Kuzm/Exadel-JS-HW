class Zoo{
    constructor(address, area, establishedDate, ticketPrice){
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = []
    }
    getAddress(){
        return `ZOO address -  ${this.address}`
    }
    setAddress(newAddress){
        return this.address = newAddress
        
    }
    getArea(){
        return `ZOO area - ${this.area}`
    }
    getEstablishedDate(){
        return `ZOO was established in ${this.establishedDate}`
    }
    getTicketPrice(){
        return `Ticket's price is ${this.ticketPrice} `
    }
    addWorker(firstName, lastName, phone){
        
        const worker = new Worker(firstName, lastName, phone)
         
        this.workers.push(worker)      

    }
    
    removeWorker(firstName, lastName){
        let person = this.workers.find(elem => elem.firstName === firstName && elem.lastName === lastName)
        let index = this.workers.indexOf(person)
        this.workers.splice(index, 1)
        return this.workers
    }

    editWorker(id, key, value)
    {
        const person = this.workers.find(elem => elem.id === id )
        person[key] = value
        
    } 



    addAnimal(type,color, weight, height, placeOfOrigin){
       let animal = new Animal(type, color, weight, height, placeOfOrigin);
       this.animals.push(animal)
    }
    removeAnimal(id){
        let animal = this.animals.find(elem => elem.id === id)
        let index = this.animals.indexOf(animal)
        this.animals.splice(index, 1)
        return this.animals

    }

    editAnimal(id, key, value){
        const animal = this.animals.find(elem => elem.id === id )
        animal[key] = value

    }
    
    showAllAnimals(){
        return this.animals
    }
    showAllWorkers(){
        return this.workers
    }
    showAnimalByID(animalId){
         const animal = this.animals.find(item => item.id === animalId)
         return animal
    }    
}

class Animal {
    constructor (type, color, weight, height, placeOfOrigin){
        this.id = String(Math.floor(Math.random() * 10e7))
        this.type = type,
        this.color = color,
        this.weight = weight,
        this.height = height,
        this.placeOfOrigin = placeOfOrigin

    }
    getInfo(){
        return `This ${this.type} has ${this.color} color, its weight is ${this.weight}, its height is ${this.height}, place of origin is ${this.placeOfOrigin}`
    }
    setHeight(newHeight){
        this.height = newHeight

    }
    setWeight(newWeight){
        this.weight = newWeight

    }
}

class Snakes extends Animal{
    constructor(isPoisonous){
        super()        
        this.isPoisonous = isPoisonous
    }
    changeProperty(key, val){
        Object.defineProperties(this, {[key] : {
            value : val,
            configurable: true,  
            writable: true,
            enumerable: true
        }

        })
    }
}

class CatLike extends Animal{
    constructor( isSafeToPet){
        super()
        this.isSafeToPet = isSafeToPet
    }
    changeProperty(key, val){
        Object.defineProperties(this, {[key] : {
            value : val,
            configurable: true,  
            writable: true,
            enumerable: true
        }

        })
    }
}

class Birds extends Animal{
    constructor(isFlying){
        super()
        this.isFlying = isFlying
    }
    changeProperty(key, val){
        Object.defineProperties(this, {[key] : {
            value : val,
            configurable: true,  
            writable: true,
            enumerable: true
        }

        })
    }
    
    
}

class Worker{
    constructor(firstName, lastName, phone){
        this.id = String(Math.floor(Math.random() * 10e7))
        this.firstName = firstName,
        this.lastName = lastName,
        this.phone = phone

    }
}



