/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';

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

    let viewModel = this;
    $.ajax({
      url: "/ccstorex/custom/v1/currencyConverter",
      type: "POST",
      contentType: "application/json",
      data: ko.toJSON(data),
      success: function (result) {
        viewModel.$data.convertedCurrency.amount(result.convertedCurrency.amount);
        viewModel.$data.convertedCurrency.symbol(result.convertedCurrency.symbol);
        viewModel.$data.loading(false);
      },
      error: function (err) {
        console.log(err);
      }
    });
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
