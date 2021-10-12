/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';
import ccRestClient from 'ccRestClient';
import ccConstants from 'ccConstants';
/**
 * Models
 */
import BrandModel from '../models/brand';

export class Sample extends BaseWidget {

  /**
   * On load view model
   */
  collectionIds = [
    'jefin_centennial',
    'jefin_gbc',
    'jefin_greenball',
    'jefin_kanati'
  ];

  @exportToViewModel
  brands = ko.observableArray();

  @exportToViewModel
  goToPage(url) {
    window.open(url, '_blank');
  }

  getCollection() {
    let data = {};
    data[ccConstants.CATEGORY_IDS] = this.collectionIds.join(',');

    ccRestClient.request(
      ccConstants.ENDPOINT_LIST_COLLECTIONS,
      data,
      (response) => {
        response.map(data => {
          this.brands.push(new BrandModel(data.displayName, '/file/' + data.categoryImages[0].path, data.route));
        });
      },
      (error) => { console.log("Im error", error) }
    );
  }

  constructor() {
    //Constructing the BaseWidget
    super();
    this.getCollection();
  }

}
