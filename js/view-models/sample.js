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
import CategoryModel from '../models/category';

export class Sample extends BaseWidget {

  /**
   * On load view model
   */
  @exportToViewModel
  category = [
    new CategoryModel('file/general/devices.png', 'DEVICES', 'category/devices'),
    new CategoryModel('file/general/accessories.png', 'ACCESSORIES', 'category/accessories'),
    new CategoryModel('file/general/softwares.png', 'SOFTWARE', 'category/software')
  ];

  @exportToViewModel
  goToPage(url) {
    window.open(url, "_blank");
  }

  constructor() {
    //Constructing the BaseWidget
    super();
  }
}
