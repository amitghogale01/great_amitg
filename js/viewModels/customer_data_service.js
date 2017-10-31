/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * punkService module
 */
define(['ojs/ojcore', 'knockout', 'jquery',
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function punkServiceContentViewModel() {
        var vm = this;
        
        vm.dummyCustObj = {
            id:0,
            name:"",
            email:"",
            Customer_details:"",
            photo:""
           };
        
        var getLocalcustData = window.localStorage.getItem('custData') !== null ? JSON.parse(window.localStorage.getItem('custData')) : null;
                
        if(getLocalcustData === undefined || getLocalcustData === null){
            console.log('Local data not found, fetching it from server ');

            vm.fetchBeers = $.ajax({
                url: 'js/data.json',
                success: function (resp) {     
                    window.localStorage.setItem('custData', JSON.stringify(resp));
                    return resp;
                },
                error: function(err){
                    if(err.responseJSON){
                        var respVal = err.responseJSON;                        
                        return 'API ERROR : Status Code ' + respVal.statusCode + ' >> ' + respVal.error + ' >> ' + respVal.message;
                    }
                }
            });
        }
        else{
            console.log('Local data found');
            var defer = $.Deferred();
            vm.fetchBeers = getLocalcustData !== null ? defer.resolve(getLocalcustData) : defer.reject(getLocalcustData);

        }
        
        
        
    }
    
    return punkServiceContentViewModel;
});
