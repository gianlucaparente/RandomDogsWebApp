class ShowDogImageController {

    constructor(BreedService) {
        this.breedService = BreedService;
    }

    $onInit() {
        this.isImageRequested = false; 
    }

    $onChanges(onChangesObj) {
        // console.log(JSON.stringify(onChangesObj));
        // if (onChangesObj && onChangesObj.subBreeds && onChangesObj.subBreeds.currentValue) {
        //     this.subBreeds = this.getSubBreedsString(onChangesObj.subBreeds.currentValue);
        // }
    }

    clickOnBreed(breedName) {
        this.isImageRequested = true;
        this.dogImage = undefined;
        this.getRandomDogImageByBreed(breedName);
    }

    getRandomDogImageByBreed(breedName) {
        let self = this;
        self.dogImage = undefined;

        if (!self.dogImageMap) {
            self.dogImageMap = {};
        }

        this.breedService.getRandomDogImageByBreed(breedName)
            .then((response) => {

                if (response.status === 'success') {
                    self.dogImage = response.message;
                } else {
                    console.log("Error");
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

    clickOnClose() {
        this.dogImage = undefined;
    }

    // getSubBreedsString(subBreedList) {
    //     return subBreedList.join();
    // }

    // injection here
    static get $inject() {
        return ['BreedService'];
    }
}

const ShowDogImageComponent = {
    bindings: {
        breed: "=",
        subBreeds: "="
    },
    templateUrl: './src/js/components/show-dog-image-component/show-dog-image.template.html',
    controllerAs: "ShowDogImageController",
    controller: ShowDogImageController
};

window.exports = {
    ShowDogImageController: angular.module('BreedModule').component('showDogImage', ShowDogImageComponent)
};