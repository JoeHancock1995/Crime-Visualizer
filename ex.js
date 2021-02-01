Plotly.d3.csv('./crime.csv', function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var allYear = unpack(rows, 'year'),
        allMonths = unpack(rows, 'month'),
        allMurders = unpack(rows, 'murders')
        listofYear = [],
        currentYear,
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

    // Default Country Data
    setBubblePlot('2020');

    function setBubblePlot(chosenYear) {
        getYearData(chosenYear);

        var trace1 = {
            x: currentMonth,
            y: currentMurders,
            mode: 'lines+markers',
            marker: {
                size: 12,
                opacity: 0.5
            }
        };

        var data = [trace1];

        var layout = {
            title: 'Line and Scatter Plot',
            height: 400,
            width: 480
        };

        Plotly.newPlot('myDiv', data, layout);
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