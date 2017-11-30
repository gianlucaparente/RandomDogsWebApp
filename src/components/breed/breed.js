'use strict';

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

    getRandomImageByBreed(breedName) {

    }

    // injection here
    static get $inject() {
        return ['$resource'];
    }

}

class BreedListController {

    constructor(BreedService) {

        let self = this;

        BreedService.getAllBreeds()
            .then(function (response) {

                if (response.status === 'success') {
                    self.breeds = Object.keys(response.message);
                } else {
                    console.log("Error");
                }

            })
            .catch(function (error) {
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
    templateUrl: './src/components/breed/breed-list.template.html',
    controllerAs: "BreedListController",
    controller: BreedListController
};

window.exports = {
    BreedModule: angular
        .module('BreedModule', ['ngResource'])
        .service('BreedService', BreedService)
        .component('breedList', BreedListComponent)
}

//
// angular.module('BreedModule')
//     .component('breedList', {
//         template: '<div ng-repeat="breed in $ctrl.breeds"><p>{{breed}}</p></div>',
//         controller: ['Breed',
//             function BreedListCtrl(Breed) {
//
//                 let self = this;
//
//
//             }
//         ]
//     });

// Register `phoneList` component, along with its associated controller and template
//angular.
//  module('phoneList').
//  component('phoneList', {
//    templateUrl: 'phone-list/phone-list.template.html',
//    controller: ['Phone',
//      function PhoneListController(Phone) {
//        this.phones = Phone.query();
//        this.orderProp = 'age';
//      }
//    ]
//  });