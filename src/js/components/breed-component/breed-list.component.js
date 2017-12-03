class BreedListController {

    constructor(BreedService) {
        this.breedService = BreedService;
        this.getAllBreed();
    }

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
    templateUrl: './src/js/components/breed-component/breed-list.template.html',
    controllerAs: "BreedListController",
    controller: BreedListController
};

window.exports = {
    BreedListComponent: angular.module('BreedModule').component('breedList', BreedListComponent)
};