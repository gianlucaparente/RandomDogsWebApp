/**
 * Controller of BreedFiltersComponent. Create filters for list: clear and search.
 * Communicate with other components with events.
 */
class BreedFiltersController {

    /**
     * initialize breed service injected.
     */
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    $onInit() {}

    $onChanges(onChangesObj) {}

    /**
     * Reset all the item box images and filters.
     */
    resetAllImages() {
        this.name = "";
        this.searchByName(this.name);
        console.log("Emit event 'RESET-IMAGE'");
        this.$rootScope.$emit('RESET-IMAGE');
    }

    /**
     * Filter list by name.
     */
    searchByName(name) {
        console.log("Emit event SEARCH-BY-NAME", name);
        this.$rootScope.$emit('SEARCH-BY-NAME', [name]);
    }

    // injection here
    static get $inject() {
        return ['$rootScope'];
    }
}

/**
 * Component for filter list of item. Implements clear and search filter.
 */
const BreedFiltersComponent = {
    bindings: {},
    templateUrl: './src/js/components/breed-filters-component/breed-filters.template.html',
    controllerAs: "BreedFiltersCtrl",
    controller: BreedFiltersController
};

/**
 * Register angular component 
 */
window.exports = {
    BreedFiltersComponent: angular.module('BreedModule').component('breedFilters', BreedFiltersComponent)
};