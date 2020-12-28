annualHomicide = document.getElementById('annualHomicide');
Plotly.newPlot(annualHomicide, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [39, 27, 33, 25, 31, 23, 39, 25, 32, 33, 42 ]
}], {
    margin: { t: 0 }
});
annualHomicideRate = document.getElementById('annualHomicideRate');
Plotly.newPlot(annualHomicideRate, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [5.0, 3.4, 4.0, 3.0, 3.6, 2.6, 4.3, 2.7, 3.4, 3.4 ,4.3]
}], {
    margin: { t: 0 }
});

monthlyHomicide13 = document.getElementById('monthlyHomicide13');
Plotly.newPlot(monthlyHomicide13, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [0, 3, 2, 4, 0, 2, 5, 0, 4, 2, 2, 3]
}], {
    margin: { t: 0 }
});
//2014-2017 are primarily matched with the chiefs reports but didn't match the Austin Statesman. Follow up on the discrepancy.
monthlyHomicide14 = document.getElementById('monthlyHomicide14');
Plotly.newPlot(monthlyHomicide14, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 2, 1, 1, 0, 2, 2, 1, 4, 4, 6, 6]
}], {
    margin: { t: 0 }
});

monthlyHomicide15 = document.getElementById('monthlyHomicide15');
Plotly.newPlot(monthlyHomicide15, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 2, 2, 4, 2, 0, 2, 1, 1, 0, 6, 4]
}], {
    margin: { t: 0 }
});

monthlyHomicide16 = document.getElementById('monthlyHomicide16');
Plotly.newPlot(monthlyHomicide16, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 0, 2, 1, 3, 5, 9, 4, 2, 3, 5, 5 ]
}], {
    margin: { t: 0 }
});

monthlyHomicide17 = document.getElementById('monthlyHomicide17');
Plotly.newPlot(monthlyHomicide17, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 3, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2]
}], {
    margin: { t: 0 }
});

monthlyHomicide18 = document.getElementById('monthlyHomicide18');
Plotly.newPlot(monthlyHomicide18, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 2, 5, 1, 3, 5, 2, 3, 5, 1, 3, 1]
}], {
    margin: { t: 0 }
});

monthlyHomicide19 = document.getElementById('monthlyHomicide19');
Plotly.newPlot(monthlyHomicide19, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 4, 2, 2, 3, 6, 4, 2, 1, 2, 3]
}], {
    margin: { t: 0 }
});



// //Since this is the present year and will require adding an API may be more practical if one can be found rather than adding onto monthly. 
// // Create a CSV 
monthlyHomicide20 = document.getElementById('monthlyHomicide20');
Plotly.newPlot(monthlyHomicide20, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [5, 4, 5, 2, 1, 5, 6 , 4, 3, 5, 0, 0 ]
}], {
    margin: { t: 0 }
});


var murders2013 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [0, 3, 2, 4, 0, 2, 5, 0, 4, 2, 2, 3],
    mode: 'lines',
    name: '2013'
};

var murders2014 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 2, 1, 1, 0, 2, 2, 1, 4, 4, 6, 6],
    mode: 'lines',
    name: '2014'
};

var murders2015 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 2, 2, 4, 2, 0, 2, 1, 1, 0, 6, 4],
    mode: 'lines',
    name: '2015'
};
var murders2016 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 0, 2, 1, 3, 5, 9, 4, 2, 3, 5, 5],
    mode: 'lines',
    name: '2016'
};
var murders2017 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 3, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2],
    mode: 'lines',
    name: '2017'
};
var murders2018 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 3, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2],
    mode: 'lines',
    name: '2018'
};
var murders2019 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 4, 2, 2, 3, 6, 4, 2, 1, 2, 3],
    mode: 'lines',
    name: '2019'
};
var murders2020 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [5, 4, 5, 2, 1, 5, 6, 4, 3, 5, 0, 0 ],
    mode: 'lines',
    name: '2020'
};

var data = [murders2013, murders2014, murders2015, murders2016, murders2017, murders2018, murders2019, murders2020];

var layout = {
    title: 'Austin Homicides 2013-2019'
};

Plotly.newPlot('myDiv', data, layout);