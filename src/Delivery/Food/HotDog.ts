import IFood from "./Interfaces/IFood";

export default class HotDog implements IFood{
    fazerComida(): void {
        console.log('Montando HotDog!')
    }
    enviarComida(): void {
        console.log('HotDog pronto para envio!')
    }
}