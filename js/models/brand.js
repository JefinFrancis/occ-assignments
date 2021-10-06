export default class BrandModel {
    'use strict';
    brandName;
    brandLogo;
    brandUrl;

    constructor(brandName, brandLogo, brandUrl) {
        this.brandName = brandName;
        this.brandLogo = brandLogo;
        this.brandUrl = brandUrl;
    }

    goToPage(url) {
        window.open(url, '_blank');
    }
};
