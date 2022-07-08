import IDrink from "../Drink/Interfaces/IDrink";
import IDeliveryFactory from "./Interface/IDeliveryFactory";
import IFood from "../Food/Interfaces/IFood";
import SoftDrink from '../Drink/SoftDrink'
import HotDog from '../Food/HotDog'

export default class IFoodDelivery implements IDeliveryFactory{
    CreateDeliveryDrink(): IDrink {
        return new SoftDrink()
    }
    CreateDeliveryFood(): IFood {
        return new HotDog()
    }
}