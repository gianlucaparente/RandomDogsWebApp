/**
 * Service for access breeds api. Use angularjs service $resource for contact rest web services.
 */
class BreedService {

    constructor($resource) {
        this.$resource = $resource;
    }

    /**
     * List all breed names including sub breeds.
     * @returns Promise associate to service invoked
     */
    getAllBreeds() {
        return this.$resource('https://dog.ceo/api/breeds/list/all').get().$promise;
    }

    getRandomDogImageByBreed(breedName) {
        return this.$resource('https://dog.ceo/api/breed/' + breedName + '/images/random').get().$promise;
    }

    // injection here
    static get $inject() {
        return ['$resource'];
    }

}

window.exports = {
    BreedService: angular.module('BreedModule').service('BreedService', BreedService)
};