/**
 * Controller of BreedListComponent. Retrieve list of breed and associated sub breeds, show its as list of box item.
 */
class BreedListController {

    /**
     * Initialize breed service injected and subscribe to search event.
     * @param BreedService
     */
    constructor(BreedService, $rootScope) {
        this.breedService = BreedService;

        $rootScope.$on('SEARCH-BY-NAME', (event, args) => {
            this.breedNameFilter = args[0];
        });

    }

    /**
     * Trigger retreive breed list.
     */
    $onInit() {
        this.getAllBreed();
    }

    $onChanges(onChangesObj) {}

    /**
     * Retrieve list of breed and set up properly to show it.
     */
    getAllBreed() {
        let self = this;

        this.breedService.getAllBreeds()
            .then((response) => {

                if (response.status === 'success') {
                    self.breedMap = response.message;
                    self.breeds = Object.keys(self.breedMap);
                } else {
                    console.log("Error occurred while retrieve list of breed");
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    // injection here
    static get $inject() {
        return ['BreedService', '$rootScope'];
    }
}

/**
 * Component for retrieve list of breed and show it as list of box item.
 */
const BreedListComponent = {
    bindings: {},
    templateUrl: './src/js/components/breed-list-component/breed-list.template.html',
    controllerAs: "BreedListCtrl",
    controller: BreedListController
};

/**
 * Register angular component
 */
window.exports = {
    BreedListComponent: angular.module('BreedModule').component('breedList', BreedListComponent)
};