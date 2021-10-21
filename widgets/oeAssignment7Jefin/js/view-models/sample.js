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

export class Sample extends BaseWidget {

  /**
   * On load view model
   */

  @exportToViewModel
  redirectTo = (url) => {
    window.open(url, '_blank');
  }

  constructor() {
    //Constructing the BaseWidget
    super();

  }
}
