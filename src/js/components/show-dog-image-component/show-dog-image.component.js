class ShowDogImageController {

    constructor() {}

    $onChanges(onChangesObj) {
        console.log("CHANGE: " + onChangesObj.dogImage);
    }

    // injection here
    static get $inject() {
        return [];
    }
}

const ShowDogImageComponent = {
    bindings: {
        dogImage: "="
    },
    templateUrl: './src/js/components/show-dog-image-component/show-dog-image.template.html',
    controllerAs: "ShowDogImageController",
    controller: ShowDogImageController
};

window.exports = {
    ShowDogImageController: angular.module('BreedModule').component('showDogImage', ShowDogImageComponent)
};