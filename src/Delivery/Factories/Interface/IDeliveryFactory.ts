import IDrink from '../../Drink/Interfaces/IDrink'
import Ifood from '../../Food/Interfaces/IFood'

export default interface IDeliveryFactory{
    CreateDeliveryDrink(): IDrink
    CreateDeliveryFood(): Ifood
}