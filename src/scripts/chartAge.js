function updateAge()
{
	var ticks = [];
	var male = [];
	var male2 = [];
	var female = [];
	var female2 = [];

	var startYear = 2000;
	for( var i = startYear; i > 1900; --i) {
		ticks.push( ''+i);
		male.push( 0);
		male2.push( 0);
		female.push( 0);
		female2.push( 0);
	}
	ticks.push( '');
	male.push( 0);
	male2.push( 0);
	female.push( 0);
	female2.push( 0);

	for( var i = 0; i < meps.length; ++i) {
		if( 'F' == meps[i]['gender']) {
			++female[ startYear - parseInt( meps[i]['date_birth'].slice( -4))];
		} else if( 'M' == meps[i]['gender']) {
			++male[ startYear - parseInt( meps[i]['date_birth'].slice( -4))];
		} else {
			++male2[ startYear - parseInt( meps[i]['date_birth'].slice( -4))];
		}
	}

	while( ticks.length > 2) {
		if(( male[0] == 0) && (female[0] == 0) && (male2[0] == 0) && (female2[0] == 0)) {
			ticks.shift();
			male.shift();
			male2.shift();
			female.shift();
			female2.shift();
		} else {
			break;
		}
	}
	while( ticks.length > 2) {
		pos = ticks.length - 2;
		if(( male[pos] == 0) && (female[pos] == 0) && (male2[pos] == 0) && (female2[pos] == 0)) {
			ticks.pop();
			ticks.pop();
			male.pop();
			male.pop();
			male2.pop();
			male2.pop();
			female.pop();
			female.pop();
			female2.pop();
			female2.pop();
			ticks.push( '');
			male.push( 0);
			male2.push( 0);
			female.push( 0);
			female2.push( 0);
		} else {
			break;
		}
	}

    var plotOptions = {
        title: '<div style="float:left;width:50%;text-align:center">Male</div><div style="float:right;width:50%;text-align:center">Female</div>',
        seriesColors: ["#99b2bf", "#bf99b2", "#000000", "#000000"],
        grid: {
            drawBorder: false,
            shadow: false,
            background: 'white',
            rendererOptions: {
                plotBands: {
                    show: false
                }
            }
        },
        defaultAxisStart: 0,
        seriesDefaults: {
            renderer: $.jqplot.PyramidRenderer,
            rendererOptions: {
                barPadding: 0,
                offsetBars: true
            },
            yaxis: 'yaxis',
            shadow: false
        },
        series: [
            {
                rendererOptions:{
                    side: 'left',
                    synchronizeHighlight: 1
                }
            },
            {
                yaxis: 'y2axis',
                rendererOptions:{
                    synchronizeHighlight: 0
                }
            },
            {
                rendererOptions: {
                    fill: false,
                    side: 'left'
                }
            },
            {
                yaxis: 'y2axis',
                rendererOptions: {
                    fill: false
                }
            }
        ],
        axes: {
            xaxis: {
                tickOptions: {},
                rendererOptions: {
                    baselineWidth: 1
                }
            },
            yaxis: {
                label: 'Year of birth',
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                tickOptions: {},
                tickInterval: 5,
                showMinorTicks: false,
                ticks: ticks,
                rendererOptions: {
                    category: false,
                    baselineWidth: 1
                }
            },
            yMidAxis: {
                label: 'Year of birth',
                tickOptions: {},
                tickInterval: 5,
                showMinorTicks: false,
                ticks: ticks,
                rendererOptions: {
                    category: false,
                    baselineWidth: 1
                }
            },
            y2axis: {
                label: 'Year of birth',
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                tickOptions: {},
                tickInterval: 5,
                showMinorTicks: false,
                ticks: ticks,
                rendererOptions: {
                    category: false,
                    baselineWidth: 1
                }
            }
        }
    };

    $.jqplot('chartAge', [male, female, male2, female2], plotOptions);
}
