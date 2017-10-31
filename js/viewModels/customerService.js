/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * customerService module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function customerServiceContentViewModel() {
        var vm = this;
        
        vm.ucText = function(text){
            if(text){
                return text.toUpperCase();
            }
        }
        
    }
    
    return new customerServiceContentViewModel;
});
