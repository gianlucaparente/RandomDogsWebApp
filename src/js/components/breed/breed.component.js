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
    
    getRandomDogImageByBreed(breedName) {
        let self = this;

        if (!self.dogImageMap) {
            self.dogImageMap = {};
        }

        this.breedService.getRandomDogImageByBreed(breedName)
            .then((response) => {

                if (response.status === 'success') {
                    self.dogImageMap[breedName] = response.message;
                } else {
                    console.log("Error");
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    getSubBreedsString(subBreedList) {
        return subBreedList.join();
    }

    clickOnBreed(breedName) {
        this.getRandomDogImageByBreed(breedName);
    }

    // injection here
    static get $inject() {
        return ['BreedService'];
    }
}

const BreedListComponent = {
    bindings: {},
    templateUrl: './src/js/components/breed/breed-list.template.html',
    controllerAs: "BreedListController",
    controller: BreedListController
};

window.exports = {
    BreedListComponent: angular.module('BreedModule').component('breedList', BreedListComponent)
};