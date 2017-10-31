/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojlegend', 'ojs/ojchart', 'ojs/ojtoolbar','ojs/ojlabel', 'ojs/ojradioset'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;

                    // Attribute Groups Handler for Consistent Coloring
                    var attrGroups = new oj.ColorAttributeGroupHandler();

                    // Categories
                    var categories = ["High", "Very High", "Medium", "Low", "Very Low"];
                    var hiddenCategories = [categories[0]];
                    self.hiddenCategoriesValue = ko.observableArray(hiddenCategories);

                    // Chart Data
                    var categoricalSeries = [{items: []}];
                    var categoricalSeriesItems = categoricalSeries[0].items;
                    categoricalSeriesItems.push({value: 42, color: attrGroups.getValue(categories[0]), categories: [categories[0]]});
                    categoricalSeriesItems.push({value: 55, color: attrGroups.getValue(categories[1]), categories: [categories[1]]});
                    categoricalSeriesItems.push({value: 36, color: attrGroups.getValue(categories[2]), categories: [categories[2]]});
                    categoricalSeriesItems.push({value: 15, color: attrGroups.getValue(categories[3]), categories: [categories[3]]});
                    categoricalSeriesItems.push({value: 12, color: attrGroups.getValue(categories[4]), categories: [categories[4]]});

                    var timeSeries = [{name: categories[0], items: [74, 62, 70, 76, 66]},
                        {name: categories[1], items: [50, 38, 46, 54, 42]},
                        {name: categories[2], items: [34, 22, 30, 32, 26]},
                        {name: categories[3], items: [18, 6, 14, 22, 10]},
                        {name: categories[4], items: [3, 2, 3, 3, 2]}];

                    var pieSeries = [{name: categories[0], items: [42]},
                        {name: categories[1], items: [55]},
                        {name: categories[2], items: [36]},
                        {name: categories[3], items: [10]},
                        {name: categories[4], items: [5]}];

                    var bubbleSeries = [{name: categories[0], items: [{x: 15, y: 25, z: 5}, {x: 25, y: 30, z: 12}]},
                        {name: categories[1], items: [{x: 15, y: 15, z: 8}, {x: 20, y: 35, z: 14}]},
                        {name: categories[2], items: [{x: 10, y: 10, z: 8}, {x: 18, y: 55, z: 10}]},
                        {name: categories[3], items: [{x: 8, y: 20, z: 6}, {x: 11, y: 30, z: 8}]},
                        {name: categories[4], items: [{x: 25, y: 45, z: 12}, {x: 40, y: 55, z: 35}]}];

                    var timeGroups = [1980, 1990, 2000, 2010, 2020];

                    self.categoricalSeriesValue = ko.observableArray(categoricalSeries);
                    self.categoricalGroupsValue = ko.observableArray(categories);
        self.timeSeriesValue = ko.observableArray(timeSeries);
        self.timeGroupsValue = ko.observableArray(timeGroups);
        self.pieSeriesValue = ko.observableArray(pieSeries);
        self.bubbleSeriesValue = ko.observableArray(bubbleSeries);

        // Legend Data
        var legendSections = [{items : []}];
        var legendItems = legendSections[0].items;
        for(var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
          var category = categories[categoryIndex];
          legendItems.push({text : category, color : attrGroups.getValue(category), shortDesc: "Filter: " + category});
        }

        self.legendSections = ko.observableArray(legendSections);
    }
    

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
