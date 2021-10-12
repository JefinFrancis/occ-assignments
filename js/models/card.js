import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class CardModel {
    cardName;
    imageUrl;
    redirectUrl;
    constructor(cardName, imageUrl, redirectUrl) {
        this.cardName = cardName;
        this.imageUrl = imageUrl;
        this.redirectUrl = redirectUrl;
    }
};
