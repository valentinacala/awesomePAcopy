/**
 * AWESOME PA
 * A React Native App
 *
 * @flow
 */

import type {CreditCard} from "../types/CreditCard";
import type {Operation} from "../types/Operation";

const cards: Array<CreditCard> = [
    {
        id: 1,
        text: 'American Express',
        name: 'Ultimo utilizzo ieri alle 07:34',
        number: '3759 876543 21001',
        image: require('../img/amex-cc.jpg')
    },
    {
        id: 2,
        text: 'VISA',
        name: 'Ultimo utilizzo ieri alle 10:20',
        number: '4000 1234 5678 9010',
        image: require('../img/visa-cc.jpg')
    },
    {
        id: 3,
        text: 'Mastercard',
        name: 'Non ci sono nuove transazioni',
        number: '5412 7556 7890 0000',
        image: require('../img/mastercard-cc.png')
    },
    {
        id: 4,
        text: 'RedCard',
        name: 'Ultimo utilizzo oggi alle 09:03',
        number: '4000 1234 5678 9010',
        image: require('../img/simple-cc.png')
    }
];

const operations: Array<Operation> = [
    {
        cardId: 1,
        date: 'Ieri alle 07.34',
        subject: 'Certificato di residenza',
        location: 'Comune di Gallarate',
        amount: -20.02,
        isNew: true
    },
    {
        cardId: 1,
        date: '22/12/2017 - 07:34',
        subject: 'Rimborso TARI 2012',
        location: 'Comune di Gallarate',
        amount: 150.20,
        isNew: false
    },
    {
        cardId: 1,
        date: '17/12/2017 - 22:23',
        subject: 'Ristorante I Pini',
        location: 'Busto Arsizio',
        amount: -134.00,
        isNew: false
    },
    {
        cardId: 2,
        date: 'Ieri alle 10.20',
        subject: 'Spesa Supermarket',
        location: 'Segrate',
        amount: -74.10,
        isNew: true
    },
    {
        cardId: 2,
        date: '14/02/2018 - 10:21',
        subject: 'Accredito per storno',
        location: 'Banca Sella',
        amount: 100.10,
        isNew: false
    },
    {
        cardId: 4,
        date: 'Oggi alle 09:03',
        subject: 'Prelievo contante',
        location: 'Busto Arsizio',
        amount: -200.00,
        isNew: true
    },
    {
        cardId: 4,
        date: 'Ieri alle 17.34',
        subject: 'Pagamento carta',
        location: 'Agenzia nr.40',
        amount: -89.90,
        isNew: true
    },
    {
        cardId: 4,
        date: '22/01/2018 - 14:54',
        subject: 'Esecuzione atti notarili',
        location: 'Comune di Legnano',
        amount: -56.00,
        isNew: false
    },
    {
        cardId: 4,
        date: '01/01/2018 - 22:23',
        subject: 'Pizzeria Da Gennarino',
        location: 'Busto Arsizio',
        amount: -45.00,
        isNew: false
    },
    {
        cardId: 4,
        date: '23/12/2017 - 10.30',
        subject: 'Estetista Estella',
        location: 'Milano - via Parini 12',
        amount: -100.00,
        isNew: false
    },


    ];

class PortfolioAPI
{

    static getCreditCards(): Array<CreditCard>
    {
        return cards;
    }

    static getOperations(cardId: number): Array<Operation>
    {
        return operations.filter( operation => operation.cardId === cardId );
    }

}

export default PortfolioAPI;
