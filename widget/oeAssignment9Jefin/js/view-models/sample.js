/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';
import appLevel from 'ccResourceLoader!global/oeAssignment10Jefin';

/**
 * Models
 */

export class Sample extends BaseWidget {

  @exportToViewModel
  loading = ko.observable(false);

  @exportToViewModel
  convertedCurrency = {
    amount: ko.observable("0.00"),
    symbol: ko.observable("$")
  };

  @exportToViewModel
  convertCurrency() {
    let data = {
      "amount": document.querySelector('#amount').value,
      "fromCurrency": {
        "name": document.querySelector('#fromCurrency').value,
        "symbol": document.querySelector('#fromCurrency').selectedOptions[0].getAttribute('data-symbol')
      },
      "toCurrency": {
        "name": document.querySelector('#toCurrency').value,
        "symbol": document.querySelector('#toCurrency').selectedOptions[0].getAttribute('data-symbol')
      }
    };
    this.$data.loading(true);

    // Converted ajax call inside App-Level
    appLevel.oeAssignment10Jefin.convertCurrency(this, data);
  }


  /**
   * On load view model
   */
  constructor() {
    //Constructing the BaseWidget
    super();
  }

  beforeAppear() {
    this.convertCurrency();
  }
}
