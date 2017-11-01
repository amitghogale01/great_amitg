/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/customerService', 'viewModels/customerDetail', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojbutton'],
        function (oj, ko, $, cs) {

            function CustomerViewModel() {
                var self = this;
                
                self.editFlag = ko.observable(false);
                self.dataSource = ko.observable();
                self.pageHeading = ko.observable();
                self.listDetail = ko.observableArray([""]);
                self.goToDetail = goToDetail;
                self.pageHeading(cs.ucText('Customers'));
                self.bkButton = bkButton;
                self.editButton = editButton;
                self.saveButton = saveButton;
                   
                $.getJSON("js/data.json",
                        function (data)
                        {
                            console.log(data);
                            self.dataSource(new oj.ArrayTableDataSource(data));
                            localstorage.localdata(data);


//                            setTimeout(function(){
//                                self.pageHeading('Data Table loaded');
//                            },1000);
                        }
                );

                function goToDetail(data) {
                    console.log(data);
                    self.pageHeading(cs.ucText('Customers details'));
                    $("#listView").css("display", "none");
                    $("#listDetail").css("display", "block");
                    self.listDetail(data);
                }
                function bkButton() {
                    $("#listView").css("display", "block");
                    $("#listDetail").css("display", "none");
                    self.pageHeading(cs.ucText('Customers'));
                }
                function editButton() {
//                  $(".abc > span").html('<input type="text" />').css("margin-botoom","5px");
                    
                    self.editFlag(true);
                    $(".abc > input, .abc > span").toggleClass('hide');

                    console.log(self.listDetail());
                    

                }
                function saveButton() {
                    console.log(self.listDetail());
                    $(".abc > input, .abc > span").toggleClass('hide');
                    self.editFlag(false);
                    $(".abc > span").val(self.listDetail([]));
                    
                    
                }


            }

            return new CustomerViewModel();
        }
);
