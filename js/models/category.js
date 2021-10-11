export default class CategoryModel {
    categoryName;
    categoryIcon;
    redirectUrl;

    constructor(categoryIcon, categoryName, redirectUrl) {
        this.categoryIcon = categoryIcon;
        this.categoryName = categoryName;
        this.redirectUrl = redirectUrl;
    }

    goToPage(url) {
        window.open(url, "_blank");
    }
};
