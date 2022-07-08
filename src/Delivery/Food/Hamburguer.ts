import IFood from "./Interfaces/IFood";

export default class Hamburguer implements IFood{
    fazerComida(): void {
        console.log('Montando hamburguer!')
    }
    enviarComida(): void {
        console.log('Hamburguer pronto para envio!')
    }
}