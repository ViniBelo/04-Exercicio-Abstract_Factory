import Company from './Delivery/Consts/Company'
import IDeliveryFactory from './Delivery/Factories/Interface/IDeliveryFactory'
import IAiqfomeDelivery from './Delivery/Factories/IAiqfomeDelivery'
import IFoodDelivery from './Delivery/Factories/IFoodDelivery'
import Client from './Delivery/Clients/Client'
import DeliveryType from './Delivery/Consts/DeliveryType'

const currentCompany = Company.AIQFOME
let factory: IDeliveryFactory

switch(currentCompany){
    case Company.AIQFOME:
        factory = new IAiqfomeDelivery()
        break
    case Company.IFOOD:
        factory = new IFoodDelivery()
        break
    default:
        console.log('Companhia não definida!')
}

const cliente = new Client(factory!, DeliveryType.AMBOS)
cliente.startDelivery()