function updateProgress()
{
	mepsLenght = [meps.length];
	$.jqplot('chartProgress',[mepsLenght],{
       seriesDefaults: {
           renderer: $.jqplot.MeterGaugeRenderer,
           rendererOptions: {
               label: 'Current digitalizing progress',
               labelPosition: 'bottom',
               labelHeightAdjust: 0,
               intervalOuterRadius: 100,
			   min:0,
			   max:908,
               ticks: [0, 300, 600, 908],
               intervals:[150, 750, 908],
               intervalColors:[ '#cc6666', '#E7E658', '#66cc66']
           }
       }
   });
}
