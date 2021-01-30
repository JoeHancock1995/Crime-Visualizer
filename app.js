//Cumulative
annualHomicide = document.getElementById('annualHomicide');
Plotly.newPlot(annualHomicide, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [39, 27, 33, 25, 31, 23, 39, 25, 32, 33, 47 ],
    type: 'bar',
    name: 'Homicides By year'
}], {
    margin: { t: 0 }
});
annualHomicideRate = document.getElementById('annualHomicideRate');
Plotly.newPlot(annualHomicideRate, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [4.93, 3.32, 3.96, 2.92, 3.52, 2.55, 4.21, 2.69, 3.42, 3.45 ,4.8],
    type: 'bar',
    name: 'Homicides By year'
}], {
    margin: { t: 0 }
});
//Cumulative
annualAgg = document.getElementById('annualAgg');
Plotly.newPlot(annualAgg, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [2277, 2135, 2193, 2126, 2127, 2092, 2403, 2561, 2388, 2612, 3193],
    type: 'line',
    name: 'Aggravated Assaults By year'
}], {
    margin: { t: 0 }
});

annualRob = document.getElementById('annualRob');
Plotly.newPlot(annualRob, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [1227, 1106, 978, 770, 875, 931, 1059, 988, 1021, 1057, 1109],
    type: 'line',
    name: 'Robbery By year'
}], {
    margin: { t: 0 }
});
annualAuto = document.getElementById('annualAuto');
Plotly.newPlot(annualAuto, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [2268, 2173, 2339, 2180, 2289, 2095, 2153, 2083, 2557, 2975, 3909],
    type: 'line',
    name: 'Auto theft (# of vehicles) By year'
}], {
    margin: { t: 0 }
});
annualBurglary = document.getElementById('annualBurglary');
Plotly.newPlot(annualBurglary, [{
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [8847, 7042, 7244, 6549, 5000, 5736, 5255, 4379, 4552, 4295, 4712],
    type: 'line',
    name: 'Burglary By year'
}], {
    margin: { t: 0 }
});




// Plotly.d3.csv(
//     "https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv",
//     function (err, rows) {
//         function unpack(rows, key) {
//             return rows.map(function (row) {
//                 return row[key];
//             });
//         }

//         var data = [
//             {
//                 type: "scattermapbox",
//                 text: unpack(rows, "Globvalue"),
//                 lon: unpack(rows, "Lon"),
//                 lat: unpack(rows, "Lat"),
//                 marker: { color: "fuchsia", size: 4 }
//             }
//         ];

//         var layout = {
//             dragmode: "zoom",
//             mapbox: { style: "open-street-map", center: { lat: 30.286666, lon: -97.733330 }, zoom: 9 },
//             margin: { r: 400, t: 5, b: 5, l: 400 }
//         };

//         Plotly.newPlot("myDiv", data, layout);
//     }
// );
//-------------------------------//
//Part of Combined Monthly graph
var murders2010 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 1, 3, 5, 3, 2, 3, 2, 5, 4, 5, 3 ],
    mode: 'bar',
    name: '2010'
};
var murders2011 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 2, 4, 2, 1, 0, 5, 4, 2, 2, 2],
    mode: 'bar',
    name: '2011'
};
var murders2012 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 1, 2, 5, 2, 4, 3, 1, 4, 2, 5, 1],
    mode: 'bar',
    name: '2012'
};
var murders2013 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [0, 3, 1, 4, 0, 1, 4, 0, 4, 2, 2, 4],
    mode: 'bar',
    name: '2013'
};

var murders2014 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 2, 1, 1, 0, 2, 2, 1, 4, 4, 5, 6],
    mode: 'bar',
    name: '2014'
};

var murders2015 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 1, 2, 4, 1, 0, 2, 1, 1, 0, 6, 3],
    mode: 'bar',
    name: '2015'
};
var murders2016 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 0, 2, 1, 2, 5, 7, 4, 2, 3, 5, 6],
    mode: 'bar',
    name: '2016'
};
var murders2017 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 1, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2],
    mode: 'bar',
    name: '2017'
};
var murders2018 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 0, 6, 1, 3, 5, 2, 2, 6, 1, 3, 2],
    mode: 'bar',
    name: '2018'
};
var murders2019 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 4, 1, 2, 3, 6, 4, 2, 1, 3, 4],
    mode: 'bar',
    name: '2019'
};
var murders2020 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [5, 4, 5, 2, 1, 4, 5, 5, 3, 5, 5, 1 ],
    mode: 'bar',
    name: '2020'
};

var data = [murders2010, murders2011, murders2012, murders2013, murders2014, murders2015, murders2016, murders2017, murders2018, murders2019, murders2020];

var layout = {
    title: 'Austin Homicides 2010-2020',
    barmode: 'group', 
    
    
};


Plotly.newPlot('myDiv', data, layout);


//---------------------------------------------------------///
//each group of code represents an Individual monthly graph 
monthlyHomicide10 = document.getElementById('monthlyHomicide10');
Plotly.newPlot(monthlyHomicide10, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 1, 3, 5, 3, 2, 3, 2, 5, 4, 5, 3 ],
    name: '2010',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide11 = document.getElementById('monthlyHomicide11');
Plotly.newPlot(monthlyHomicide11, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 2, 4, 2, 1,0, 5, 4, 2, 2, 2],
    name: '2011',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide12 = document.getElementById('monthlyHomicide12');
Plotly.newPlot(monthlyHomicide12, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 1, 2, 5, 2, 4, 3, 1, 4, 2, 5, 1],
    name: '2012',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide13 = document.getElementById('monthlyHomicide13');
Plotly.newPlot(monthlyHomicide13, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [0, 3, 1, 4, 0, 1, 4, 0, 4, 2, 2, 4],
    name: '2013',
    type: 'bar'
}], {
    margin: { t: 0 }
});
//2014-2017 are primarily matched with the chiefs reports but didn't match the Austin Statesman. Follow up on the discrepancy.
monthlyHomicide14 = document.getElementById('monthlyHomicide14');
Plotly.newPlot(monthlyHomicide14, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [3, 2, 1, 1, 0, 2, 2, 1, 4, 4, 5, 6],
    name: '2014',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide15 = document.getElementById('monthlyHomicide15');
Plotly.newPlot(monthlyHomicide15, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 1, 2, 4, 1, 0, 2, 1, 1, 0, 6, 3],
    name: '2015',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide16 = document.getElementById('monthlyHomicide16');
Plotly.newPlot(monthlyHomicide16, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 0, 2, 1, 2, 5, 7, 4, 2, 3, 5, 6 ],
    name: '2016',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide17 = document.getElementById('monthlyHomicide17');
Plotly.newPlot(monthlyHomicide17, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 1, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2],
    name: '2017',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide18 = document.getElementById('monthlyHomicide18');
Plotly.newPlot(monthlyHomicide18, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [1, 0, 6, 1, 3, 5, 2, 2, 6, 1, 3, 2],
    name: '2018',
    type: 'bar'
}], {
    margin: { t: 0 }
});

monthlyHomicide19 = document.getElementById('monthlyHomicide19');
Plotly.newPlot(monthlyHomicide19, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [2, 1, 4, 1, 2, 3, 6, 4, 2, 1, 3, 4],
    name: '2019',
    type: 'bar'
}], {
    margin: { t: 0 }
});

// //Since this is the present year and will require adding an API may be more practical if one can be found rather than adding onto monthly. 
// // Create a CSV 
monthlyHomicide20 = document.getElementById('monthlyHomicide20');
Plotly.newPlot(monthlyHomicide20, [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [5, 4, 5, 2, 1, 5, 6 ,4, 3, 5, 5, 2 ],
    name: '2020',
    type: 'bar'
}], {
    margin: { t: 0 }
});


//historogram
var trace1 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [3, 1, 3, 5, 3, 2, 3, 2, 5, 4, 5, 3 ],
    name: '2010',
    type: 'bar'
};

var trace2 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [2, 1, 2, 4, 2, 1, 0, 5, 4, 2, 2, 2],
    name: '2011',
    type: 'bar'
};
var trace3 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [3, 1, 2, 5, 2, 4, 3, 1, 4, 2, 5, 1],
    name: '2012',
    type: 'bar'
};
var trace4 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [0, 3, 1, 4, 0, 1, 4, 0, 4, 2, 2, 4],
    name: '2013',
    type: 'bar'
};
var trace5 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [3, 2, 1, 1, 0, 2, 2, 1, 4, 4, 5, 6],
    name: '2014',
    type: 'bar'
};
var trace6 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [1, 1, 2, 4, 1, 0, 2, 1, 1, 0, 6, 3],
    name: '2015',
    type: 'bar'
};
var trace7 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [2, 0, 2, 1, 2, 5, 7, 4, 2, 3, 5, 6 ],
    name: '2016',
    type: 'bar'
};
var trace8 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [1, 1, 4, 1, 2, 2, 2, 5, 2, 2, 1, 2],
    name: '2017',
    type: 'bar'
};
var trace9 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [1, 0, 6, 1, 3, 5, 2, 2, 6, 1, 3, 2],
    name: '2018',
    type: 'bar'
};
var trace10 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [2, 1, 4, 1, 2, 3, 6, 4, 2, 1, 3, 4],
    name: '2019',
    type: 'bar'
};
var trace11 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [5, 4, 5, 2, 1, 5, 6, 4, 3, 5, 5, 2 ],
    name: '2020',
    type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11];

var layout = { barmode: 'group' };

Plotly.newPlot('myDiv', data, layout);
