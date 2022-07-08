import IDrink from "./Interfaces/IDrink";

export default class Beer implements IDrink{
    fazerBebida(): void {
        console.log('Enchendo garrafas de cerveja!')
    }
    enviarBebida(): void {
        console.log('Garrafas de cerveja prontas para entrega!')
    }
}