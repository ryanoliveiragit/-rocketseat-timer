import ExpressoTradicional from '../../assets/coffes/ExpressoTradicional.svg'
import ExpressoAmericano from '../../assets/coffes/Expresso Americano.svg' 
import ExpressoCremoso from '../../assets/coffes/Expresso Cremoso.svg' 
import ExpressoGelado from '../../assets/coffes/Expresso Gelado.svg' 

export const coffeList = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tag: ['TRADICIONAL'],
        image: `${ExpressoTradicional}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        tag: ['TRADICIONAL'],
        image: `${ExpressoAmericano}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        tag: ['TRADICIONAL'],
        image: `${ExpressoCremoso}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 4,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        tag: ['TRADICIONAL','COM LEITE'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 5,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        tag: ['TRADICIONAL', 'COM LEITE'],
        image: `${ExpressoTradicional}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 6,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        tag: ['TRADICIONAL', 'COM LEITE'],
        image: `${ExpressoAmericano}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 7,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        tag: ['TRADICIONAL', 'COM LEITE'],
        image: `${ExpressoCremoso}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 8,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        tag: ['TRADICIONAL', 'COM LEITE'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 9,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã ',
        tag: ['TRADICIONAL', 'COM LEITE', 'ALCOÓLICO'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 10,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        tag: ['ESPECIAL'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 11,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        tag: ['TRADICIONAL', 'COM LEITE'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
    },
    {
        id: 12,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        tag: ['ESPECIAL', 'ALCOÓLICO'],
        image: `${ExpressoGelado}`,
        price: 9.90,
        quantity: '0'
        
    },

]