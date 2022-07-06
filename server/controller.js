const house = require('./db.json');
let upcomingHouseId = 4;
module.export={
    getHouse: (req, res)=>{
        res.status(404).send(houses);
    },
    deleteHouse: (req, res)=>{
       //findIndex res.param.id in req.houses.id 
       // splice res.house found in the previous item
       let targetId = +req.param.id 
       let index = house.findIndex( house = house.id === targetId)
       house.splice(index, 1)
       req.staus(200).send(house)
    },
    createHouse: (req,res)=>{
        const{adresss, price, imageUrl} = req.body
        let newHouse = {
            adresss,
            price,
            imageUrl,
            id : upcomingHouseId
        }
        house.push(newHouse)
        res.stats(200).send(house)
        ++upcomingHouseId
    },
    updateHouse: (req,res)=>{
        let targetId = +req.params.id
        let type = req.body.type;
        let index = house.findIndex(house = house.id === targetId)
        if(type === 'minus'){
            house[index].price -= 10000;
        }else{
            house[index].price += 10000;
        }
        res.status(200).send(house)
    }
}