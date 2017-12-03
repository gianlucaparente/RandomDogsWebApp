/**
 * Controller of BreedItemComponent. Manage interaction between info content, image content and close box.
 * When click on breed item a new dog image is requested and show over the item while a close box appear, the condition 
 * on the variable 'dogImage'.
 */
class BreedItemController {

    /**
     * initialize breed service for retrieve dog images.
     * @param BreedService
     */
    constructor(BreedService) {
        this.breedService = BreedService;
    }

    $onInit() {}

    $onChanges(onChangesObj) {}

    /**
     * Retrieve dog image relative to a breed and set up properly to show it. 
     * @param breed
     */
    getRandomDogImageByBreed(breed) {
        let self = this;
        self.dogImage = undefined;

        this.breedService.getRandomDogImageByBreed(breed)
            .then((response) => {

                if (response.status === 'success') {
                    self.dogImage = response.message;
                } else {
                    console.log("Error occurred while retrieve dog image for breed: " + breed);
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

    /**
     * Method trigger when click on a breed item.
     * @param breed
     */
    clickOnBreed(breed) {
        this.getRandomDogImageByBreed(breed);
    }

    /**
     * Method trigger when click on a close box. Reset dog image to show info content. 
     */
    clickOnClose() {
        this.dogImage = undefined;
    }

    // injection here
    static get $inject() {
        return ['BreedService'];
    }
}

/**
 * Component for show random dog image. Manage interaction between info content, image content and close box. 
 */
const BreedItemComponent = {
    bindings: {
        breed: "=",
        subBreeds: "="
    },
    templateUrl: './src/js/components/breed-item-component/breed-item.template.html',
    controllerAs: "BreedItemCtrl",
    controller: BreedItemController
};

/**
 * Register angular component 
 */
window.exports = {
    BreedItemComponent: angular.module('BreedModule').component('breedItem', BreedItemComponent)
};