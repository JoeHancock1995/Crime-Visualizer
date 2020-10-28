annualHomicide = document.getElementById('annualHomicide');
Plotly.newPlot(annualHomicide, [{
    x: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [27, 37, 33, 42, 20, 32, 12]
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