import IFood from "../Food/Interfaces/IFood";
import IDrink from '../Drink/Interfaces/IDrink'
import IDeliveryFactory from '../Factories/Interface/IDeliveryFactory'

export default class Client{
    private comida: IFood
    private bebida: IDrink

    constructor(factory: IDeliveryFactory, tipo: string){
        if(tipo === 'FOOD'){
            this.comida = factory.CreateDeliveryFood()
        } else if(tipo === 'DRINK'){
            this.bebida = factory.CreateDeliveryDrink()
        } else if(tipo === 'AMBOS'){
            this.comida = factory.CreateDeliveryFood()
            this.bebida = factory.CreateDeliveryDrink()
        } else{
            console.error('Selecione um tipo!')
        }
    }

    startDelivery(): void{
        if(this.comida){
            this.comida.enviarComida()
        }
        if(this.bebida){
            this.bebida.enviarBebida()
        }
    }
}