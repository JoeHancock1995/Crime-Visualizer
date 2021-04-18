//Cumulative homicide
annualHomicide = document.getElementById('annualHomicide');
Plotly.newPlot(annualHomicide, [{
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [27, 33, 25, 31, 23, 39, 25, 32, 33, 47, 26 ],
    type: 'bar',
    name: 'Homicides By year'
}], {
    yaxis: { range: [0, 50] }
});

//Cumulative agg assault
annualAgg = document.getElementById('annualAgg');
Plotly.newPlot(annualAgg, [{
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [ 2135, 2193, 2126, 2127, 2092, 2403, 2561, 2388, 2612, 3193],
    type: 'line',
    name: 'Aggravated Assaults By year'
}], {
        yaxis: { range: [1800, 3500] }
});

//Cumulative Robbery
annualRob = document.getElementById('annualRob');
Plotly.newPlot(annualRob, [{
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [1106, 978, 770, 875, 931, 1059, 988, 1021, 1057, 1109],
    type: 'line',
    name: 'Robbery By year'
}], {
        yaxis: { range: [400, 1250] }
});

//Cumulative Auto theft
annualAuto = document.getElementById('annualAuto');
Plotly.newPlot(annualAuto, [{
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [2173, 2339, 2180, 2289, 2095, 2153, 2083, 2557, 2975, 3909],
    type: 'line',
    name: 'Auto theft (# of vehicles) By year'
}], {
    yaxis: { range: [1500, 4000] }
});
//Cumulative property crime
annualProperty = document.getElementById('annualProperty');
Plotly.newPlot(annualProperty, [{
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [42484, 43496, 41671, 37463, 35377, 33590, 31001, 33679, 52953, 53024],
    base: 0,
    type: 'line',
    name: 'Total property crimes by year'
}], {
  yaxis: {range: [30000, 55000]}
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

//=======================stacked graph/y=======================//
Plotly.d3.csv('../CrimeStats/crime.csv', function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var allYear = unpack(rows, 'year'),
        allMonths = unpack(rows, 'month'),
        allMurders = unpack(rows, 'murders')
    listofYear = [],
        currentYear = [],
        currentMonth = [],
        currentMurders = [];

    for (var i = 0; i < allYear.length; i++) {
        if (listofYear.indexOf(allYear[i]) === -1) {
            listofYear.push(allYear[i]);
        }
    }

    function getYearData(chosenYear) {
        currentMonth = [];
        currentMurders = [];
        for (var i = 0; i < allYear.length; i++) {
            if (allYear[i] === chosenYear) {
                currentMonth.push(allMonths[i]);
                currentMurders.push(allMurders[i]);
            }
        }
    };

    setBubblePlot('2020');

    function setBubblePlot(chosenYear) {
        getYearData(chosenYear);

        var trace1 = {
            x: currentMonth,
            y: currentMurders,
            mode: 'lines+markers',
            marker: {
                size: 0,
                opacity: 0
            }
        };

        var data = [trace1];

        var layout = {
            title: 'Homicides in Austin by month and year',
            height: 500,
            width: 1400
        };

        Plotly.newPlot('plotdiv', data, layout);
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        yearSelector = innerContainer.querySelector('.yeardata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofYear, yearSelector);

    function updateYear() {
        setBubblePlot(yearSelector.value);
    }

    yearSelector.addEventListener('change', updateYear, false);
});

//==================historogram==================//
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
var trace12 = {
    x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y: [5, 6, 7, 6],
    name: '2021',
    type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12];

var layout = { barmode: 'group' };

Plotly.newPlot('myDiv', data, layout);
