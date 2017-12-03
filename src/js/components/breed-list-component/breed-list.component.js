class BreedListController {

    constructor(BreedService) {
        this.breedService = BreedService;
        this.getAllBreed();
    }

    $onInit() {}

    $onChanges(onChangesObj) {}
    
    getAllBreed() {
        let self = this;

        this.breedService.getAllBreeds()
            .then((response) => {

                if (response.status === 'success') {
                    self.breeds = response.message;
                } else {
                    console.log("Error");
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    // injection here
    static get $inject() {
        return ['BreedService'];
    }
}

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