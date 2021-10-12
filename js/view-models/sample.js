/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */

/**
 * Models
 */
import CardModel from '../models/card';

export class Sample extends BaseWidget {

  /**
   * On load view model
   */

  @exportToViewModel
  cards = [
    new CardModel("TRAILER", "/file/collections/trailer.png", "/collections/trailer"),
    new CardModel("LIGHT TRUCK", "/file/collections/lightTruck.png", "/collections/light-truck"),
    new CardModel("MOBILE HOME", "/file/collections/mobile.png", "/collections/mobile-home"),
    new CardModel("LAWN & GARDEN", "/file/collections/lawnGarden.png", "/collections/lawn-garden"),
    new CardModel("FARM & INDUSTRIAL", "/file/collections/farmIndustrial.png", "/collections/farm-industrial"),
    new CardModel("GOLF CART", "/file/collections/golfCart.png", "/collections/golf-cart"),
    new CardModel("ATV & UTV", "/file/collections/atv_utv.png", "/collections/atv-utv"),
    new CardModel("WHEELS & ACCESSORIES", "/file/collections/wheels_accessories.png", "/collections/wheels-accessories"),
  ];

  @exportToViewModel
  goToPage(url) {
    window.open(url, '_blank');
  }

  constructor() {
    //Constructing the BaseWidget
    super();
  }
}
