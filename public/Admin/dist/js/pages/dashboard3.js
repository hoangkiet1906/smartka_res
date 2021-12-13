/* global Chart:false */

$(function() {
    'use strict'

    var ticksStyle = {
        fontColor: '#495057',
        fontStyle: 'bold'
    }

    var mode = 'index'
    var intersect = true

    var $salesChart = $('#sales-chart')
        // eslint-disable-next-line no-unused-vars
    var salesChart = new Chart($salesChart, {
        type: 'bar',
        data: {
            labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    data: [190, 260, 300, 500, 250, 590, 330]
                },
                {
                    backgroundColor: '#ced4da',
                    borderColor: '#ced4da',
                    data: [150, 170, 270, 200, 180, 150, 200]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: mode,
                intersect: intersect
            },
            hover: {
                mode: mode,
                intersect: intersect
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, .2)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: $.extend({
                        beginAtZero: true,

                        // Include a dollar sign in the ticks
                        callback: function(value) {
                            if (value >= 1000) {
                                value /= 1000
                                value += 'k'
                            }

                            return '$' + value
                        }
                    }, ticksStyle)
                }],
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    ticks: ticksStyle
                }]
            }
        }
    })

    var $visitorsChart = $('#visitors-chart')
    var date = new Date();
    //alert(passedArray[0]['date_checkout'].slice(8, 10));
    var a6 = 0;
    var a5 = 0;
    var a4 = 0;
    var a3 = 0;
    var a2 = 0;
    var a1 = 0;
    var a0 = 0;

    var a66 = 0;
    var a55 = 0;
    var a44 = 0;
    var a33 = 0;
    var a22 = 0;
    var a11 = 0;
    var a00 = 0;
    passedArray.forEach(element => {
        switch (Number(element['date_checkout'].slice(8, 10))) {
            case Number(date.getDate()):
                a0 = element['total_money'];
                break;
            case Number(date.getDate() - 1):
                a1 = element['total_money'];
                break;
            case Number(date.getDate() - 2):
                a2 = element['total_money'];
                break;
            case Number(date.getDate() - 3):
                a3 = element['total_money'];
                break;
            case Number(date.getDate() - 4):
                a4 = element['total_money'];
                break;
            case Number(date.getDate() - 5):
                a5 = element['total_money'];
                break;
            case Number(date.getDate() - 6):
                a6 = element['total_money'];
                break;
            default:
                break;
        }
    });
    // alert(a4['total_money']);

    passedArray2.forEach(element => {
        switch (Number(element['date_checkout'].slice(8, 10))) {
            case Number(date.getDate() - 7):
                a00 = element['total_money'];
                break;
            case Number(date.getDate() - 8):
                a11 = element['total_money'];
                break;
            case Number(date.getDate() - 9):
                a22 = element['total_money'];
                break;
            case Number(date.getDate() - 10):
                a33 = element['total_money'];
                break;
            case Number(date.getDate() - 11):
                a44 = element['total_money'];
                break;
            case Number(date.getDate() - 12):
                a55 = element['total_money'];
                break;
            case Number(date.getDate() - 13):
                a66 = element['total_money'];
                break;
            default:
                break;
        }
    });


    var visitorsChart = new Chart($visitorsChart, {

        data: {
            labels: [date.getDate() - 6 + 'th', date.getDate() - 5 + 'th', date.getDate() - 4 + 'th', date.getDate() - 3 + 'th', date.getDate() - 2 + 'th', date.getDate() - 1 + 'th', date.getDate() + 'th'],
            datasets: [{
                    type: 'line',
                    data: [a6, a5, a4, a3, a2, a1, a0],
                    backgroundColor: 'transparent',
                    borderColor: '#007bff',
                    pointBorderColor: '#007bff',
                    pointBackgroundColor: '#007bff',
                    fill: false
                        // pointHoverBackgroundColor: '#007bff',
                        // pointHoverBorderColor    : '#007bff'
                },
                {
                    type: 'line',
                    data: [a66, a55, a44, a33, a22, a11, a00],
                    backgroundColor: 'tansparent',
                    borderColor: '#ced4da',
                    pointBorderColor: '#ced4da',
                    pointBackgroundColor: '#ced4da',
                    fill: false
                        // pointHoverBackgroundColor: '#ced4da',
                        // pointHoverBorderColor    : '#ced4da'
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: mode,
                intersect: intersect
            },
            hover: {
                mode: mode,
                intersect: intersect
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, .2)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: $.extend({
                        beginAtZero: true,
                        suggestedMax: 250,

                        callback: function(value) {


                            return '$' + value
                        }

                    }, ticksStyle)
                }],
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    ticks: ticksStyle
                }]
            }
        }
    })
})

// lgtm [js/unused-local-variable]
$('#calendar').datetimepicker({
    format: 'L',
    inline: true
})