import IDrink from "./Interfaces/IDrink";

export default class SoftDrink implements IDrink{
    fazerBebida(): void {
        console.log('Soft Drink em produção!')
    }
    enviarBebida(): void {
        console.log('Soft Drink pronto para entrega!')
    }
}