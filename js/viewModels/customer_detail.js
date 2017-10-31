define(['ojs/ojcore', 'ojs/ojrouter'], function (oj) {
    function Customer_detailViewModel() {
        var self = this;
        self.newfnction =ko.observable();
        self.newfnction = function(){
            
            
        }
        self.newfnction1 = function(){
            
        }
        self.newfnction2 = function(){
            
        }
        self.newfnction3 = function(){
            
        }
        self.newfnction4 = function(){
            
        }
        self.currentRowListener = function (event, ui) {
            oj.Router.rootInstance.go('dashboard');
        }
    }
    return Customer_detailViewModel;
});
