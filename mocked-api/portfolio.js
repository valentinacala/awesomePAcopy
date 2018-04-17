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
        brand: 'American Express',
        lastUsage: 'Ultimo utilizzo ieri alle 07:34',
        number: '3759 876543 21001',
        image: require('../img/amex-cc.jpg')
    },
    {
        id: 2,
        brand: 'VISA',
        lastUsage: 'Ultimo utilizzo ieri alle 10:20',
        number: '4000 1234 5678 9010',
        image: require('../img/visa-cc.jpg')
    },
    {
        id: 3,
        brand: 'Mastercard',
        lastUsage: 'Non ci sono nuove transazioni',
        number: '5412 7556 7890 0000',
        image: require('../img/mastercard-cc.png')
    },
    {
        id: 4,
        brand: 'RedCard',
        lastUsage: 'Ultimo utilizzo oggi alle 09:03',
        number: '4000 1234 5678 9010',
        image: require('../img/simple-cc.png')
    }
];

const operations: Array<Operation> = [
    {
        cardId: 1,
        date: '17/04/2018',
        time: '07:34',
        subject: 'Certificato di residenza',
        recipient: 'Comune di Gallarate',
        amount: -20.02,
        currency: 'EUR',
        transactionCost: 0.50,
        isNew: true
    },
    {
        cardId: 1,
        date: '22/12/2017',
        time: '14:23',
        subject: 'Rimborso TARI 2012',
        recipient: 'Comune di Gallarate',
        amount: 150.20,
        currency: 'EUR',
        transactionCost: 0,
        isNew: false
    },
    {
        cardId: 1,
        date: '17/12/2017',
        time: '12:34',
        subject: 'Ristorante I Pini',
        recipient: 'Busto Arsizio',
        transactionCost: 0,
        amount: -134.00,
        currency: 'EUR',
        isNew: false
    },
    {
        cardId: 2,
        date: '16/04/2018',
        time: '15:01',
        subject: 'Spesa Supermarket',
        recipient: 'Segrate',
        amount: -74.10,
        currency: 'EUR',
        transactionCost: 0.50,
        isNew: true
    },
    {
        cardId: 2,
        date: '14/02/2018',
        time: '10:21',
        subject: 'Accredito per storno',
        recipient: 'Banca Sella',
        amount: 100.10,
        currency: 'USD',
        transactionCost: 0.50,
        isNew: false
    },
    {
        cardId: 4,
        date: '17/04/2018',
        time: '08:56',
        subject: 'Prelievo contante',
        recipient: 'Busto Arsizio',
        amount: -200.00,
        currency: 'EUR',
        transactionCost: 0.50,
        isNew: true
    },
    {
        cardId: 4,
        date: '16/04/2018',
        time: '09:02',
        subject: 'Pagamento carta',
        recipient: 'Agenzia nr.40',
        amount: -89.90,
        currency: 'EUR',
        transactionCost: 0.50,
        isNew: true
    },
    {
        cardId: 4,
        date: '22/01/2018',
        time: '14:54',
        subject: 'Esecuzione atti notarili',
        recipient: 'Comune di Legnano',
        transactionCost: 0.50,
        amount: -56.00,
        currency: 'EUR',
        isNew: false
    },
    {
        cardId: 4,
        date: '01/01/2018',
        time: '23:34',
        subject: 'Pizzeria Da Gennarino',
        recipient: 'Busto Arsizio',
        amount: -45.00,
        currency: 'EUR',
        transactionCost: 0.50,
        isNew: false
    },
    {
        cardId: 4,
        date: '23/12/2017',
        time: '10:34',
        subject: 'Estetista Estella',
        recipient: 'Milano - via Parini 12',
        transactionCost: 0.50,
        amount: -100.00,
        currency: 'EUR',
        isNew: false
    }


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
