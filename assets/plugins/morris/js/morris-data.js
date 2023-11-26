
$(function () {
    "use strict";
    
	// Use Morris.Bar
	//Penduduk
	Morris.Bar({
	  element: 'bar-chart-penduduk',
	  data: [
		{x: '2010', y: 1522076},
		{x: '2011', y: 1545118},
		{x: '2012', y: 1567398},
		{x: '2013', y: 1588781},
		{x: '2014', y: 1609512},
		{x: '2015', y: 1629423},
		{x: '2016', y: 1648387},
		{x: '2017', y: 1666510},
		{x: '2018', y: 1683711},
		{x: '2019', y: 1699896},
		{x: '2020', y: 1714982}
	  ],
	  xkey: 'x',
	  ykeys: ['y'],
	  labels: ['Penduduk'],
	  barColors: ['#0D08F2', '#03d0ea', '#d13adf', '#fba540'],
	  gridTextColor : "#585757",
	  resize: true
	});
	
	Morris.Bar({
	  element: 'chart-ipm',
	  data: [
		{x: '2011 Q1', y: 3, z: 2, a: 1},
		{x: '2011 Q2', y: 2, z: 3, a: 1},
		{x: '2011 Q3', y: 1, z: 2, a: 4},
		{x: '2011 Q4', y: 2, z: 4, a: 3}
	  ],
	  xkey: 'x',
	  ykeys: ['y', 'z', 'a'],
	  labels: ['Y', 'Z', 'A'],
	  barColors: ['#03d0ea', '#d13adf', '#fba540'],
	  gridTextColor : "#585757",
	  resize: true
	});
	
	
	Morris.Donut({
	  element: 'donut-chart',
	  data: [
		{value: 50, label: 'Primary'},
		{value: 15, label: 'Danger'},
		{value: 10, label: 'Info'},
		{value: 5, label: 'Success'}
	  ],
	  colors: [
			'#14abef',
			'#eb5076',
			'#03d0ea',
			'#02ba5a'
		],
		resize: true,
		labelColor: "#000",
	  formatter: function (x) { return x + "%"}
	});
	
	
	// Use Morris.Area instead of Morris.Line
		Morris.Area({
		  element: 'line-chart',
		  behaveLikeLine: true,
		  data: [
			{x: '2011 Q1', y: 1, z: 0},
			{x: '2011 Q2', y: 6, z: 2},
			{x: '2011 Q3', y: 2, z: 6},
			{x: '2011 Q4', y: 8, z: 1}
		  ],
		  xkey: 'x',
		  ykeys: ['y', 'z'],
		  labels: ['Y', 'Z'],
		  lineColors: ['#fba540', '#03d0ea'],
		  resize: true,
		  gridTextColor : "#585757",
		  fillOpacity: 0.1,
		});
	
	
	
	// Use Morris.Area instead of Morris.Line
	Morris.Area({
	  element: 'area-chart',
	  data: [
		{x: '2010 Q4', y: 0, z: 1},
		{x: '2011 Q1', y: 5, z: 4},
		{x: '2011 Q2', y: 2, z: 1},
		{x: '2011 Q3', y: 2, z: 5},
		{x: '2011 Q4', y: 8, z: 2},
		{x: '2012 Q1', y: 4, z: 5}
	  ],
	  xkey: 'x',
	  ykeys: ['y', 'z'],
	  labels: ['Y', 'Z'],
	  lineColors: ['#eb5076', '#14abef'],
	  gridTextColor : "#585757",
	  resize: true
	});
	
	
	
 });    