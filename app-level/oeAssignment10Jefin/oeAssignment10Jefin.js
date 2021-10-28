define([
  'jquery', "knockout", "ccLogger", "navigation", "pubsub"
], function ($, ko, ccLogger, navigation, pubsub) {
  'use strict';

  return {
    onLoad: function () {
      ccLogger.info("Loading Custom App-Level");
    },
    convertCurrency: function (viewModel, data) {
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
  };
}
);
