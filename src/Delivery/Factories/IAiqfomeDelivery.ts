import IDeliveryFactory from "./Interface/IDeliveryFactory";
import IDrink from "../Drink/Interfaces/IDrink";
import IFood from "../Food/Interfaces/IFood";
import Beer from '../Drink/Beer'
import Hamburguer from '../Food/Hamburguer'

export default class IAiqfomeDelivery implements IDeliveryFactory{
    CreateDeliveryDrink(): IDrink {
        return new Beer()
    }
    CreateDeliveryFood(): IFood {
        return new Hamburguer()
    }
}