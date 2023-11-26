
(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		
//Grafik Kemiskinan dari sini
		if ($('#barChart-miskin').length) {
			var ctx = document.getElementById("barChart-miskin").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', 
							'2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'Ribu',
						data: [261.7, 251.7, 232.7, 222.9, 219.8, 209.9, 206.0, 197.9, 
								205.7, 192.5, 190.9, 169.0, 159.0, 179.5, 190.8, 183.7, 179.4],
						backgroundColor: "#A63F04"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .5,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#lineChart-miskin').length) {
			
			var ctx = document.getElementById('lineChart-miskin').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', 
							'2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'Rupiah perkapita sebulan',
						data: [147512, 167326, 202705, 216388, 227988, 241892, 256789, 
								264244, 275327, 294823, 309304, 329415, 341307, 362212, 374470, 393956, 426355],
						backgroundColor: "transparent",
						borderColor: "#14abef",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:false,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
		
		if ($('#lineChart-P0').length) {
			
			var ctx = document.getElementById('lineChart-P0').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', 
							'2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'Persen',
						data: [18.7, 17.61, 16.03, 14.68, 14.22, 13.35, 12.92, 12.26, 
								12.67, 11.71, 11.49, 10.06, 9.38, 10.49, 11.30, 10.82, 10.52],
						backgroundColor: "transparent",
						borderColor: "#d13adf",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
		
		if ($('#lineChart-P1').length) {
			
			var ctx = document.getElementById('lineChart-P1').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', 
							'2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'P1',
						data: [3.73, 4.24, 2.94, 2.40, 2.17, 1.82, 2.29, 1.61, 2.15, 
								1.92, 2.32, 1.45, 1.54, 1.40, 1.62, 1.70, 1.54],
						backgroundColor: "transparent",
						borderColor: "#F9055D",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
		
		if ($('#lineChart-P2').length) {
			
			var ctx = document.getElementById('lineChart-P2').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', 
							'2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'P2',
						data: [1.05, 1.31, 0.85, 0.58, 0.48, 0.38, 0.64, 0.39, 0.59, 
								0.51, 0.71, 0.35, 0.33, 0.25, 0.32, 0.41, 0.34],
						backgroundColor: "transparent",
						borderColor: "#AD0341",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
		
		if ($('#lineChart-gini').length) {
			
			var ctx = document.getElementById('lineChart-gini').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2018', '2019', '2020', '2021', '2022'],
					datasets: [{
						label: 'Indeks Gini',
						data: [0.394, 0.362, 0.376, 0.356, 0.368],
						backgroundColor: "transparent",
						borderColor: "#F95E05",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:false,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
//Grafik Kemiskinan sampai sini

//Grafik Ketenagakerjaan mulai
		
		if ($('#lineChart-tpt').length) {
			
			var ctx = document.getElementById('lineChart-tpt').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'Persen',
						data: [9.33, 8.55, 8.24, 12.25, 11.65, 9.63, 8.11],
						backgroundColor: "transparent",
						borderColor: "#d13adf",
						pointRadius :"0",
						borderWidth: 2
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:false,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
			
		}
		
		if ($('#barChart-tpak').length) {
			var ctx = document.getElementById("barChart-tpak").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					datasets: [{
						label: 'Persen',
						data: [61.73, 61.26, 61.97, 59.91, 60.75, 64.37, 67.01],
						backgroundColor: "#02ba5a"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .9,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#donatChart-pengangguran').length) {
			var ctx = document.getElementById("donatChart-pengangguran").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["Berusaha sendiri", "Berusaha dibantu buruh tidak tetap/pekerja keluarga", "Berusaha dibantu buruh tetap dan dibayar", "Buruh/karyawan/pegawai", "Pekerja bebas di pertanian", "Pekerja bebas di nonpertanian", "Pekerja keluarga/tidak dibayar"],
					datasets: [{
						backgroundColor: [
							"#eb5076",
							"#fba540",
							"#F806C8",
							"#03d0ea",
							"#08F765",
							"#1305AF",
							"#F8F406"
							
						],
						data: [160099, 69843, 13944, 251878, 48718, 63841, 47764],
						borderWidth: [0, 0, 0, 0, 0, 0, 0]
					}]
				},
			options: {
			   responsive: true,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#585757',  
					  boxWidth:15
				   }
				}
			   },
			plotOptions: {
				pie: {
					size:'100%',
					dataLabels: {
						enabled: false
					}
				}
			}
			});
		}
		
//Grafik IPM mulai		

		if ($('#chart-ipm').length) {
			var ctx = document.getElementById("chart-ipm").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020', '2021', '2022'],
					datasets: [{
						label: 'IPM',
						data: [61.34,	62.36,	63.17,	63.93,	64.27,	65.23,	
								65.81,	66.63,	67.46, 68.27, 68.08, 68.29, 69.04],
						backgroundColor: "#03d0ea"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .5,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#chart-ahh').length) {
			var ctx = document.getElementById("chart-ahh").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Tahun',
						data: [71.50,	71.53,	71.55,	71.56,	71.56,	71.76,	
								71.82,	71.87,	72.03, 72.18, 72.34, 72.52, 72.79 ],
						backgroundColor: "#F806C8"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .6,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#chart-rls').length) {
			var ctx = document.getElementById("chart-rls").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Tahun',
						data: [7.03,	7.33,	7.36,	7.39,	7.51,	7.53,	
								7.63,	7.74,	7.97, 8.18,	8.19, 8.20, 8.22 ],
						backgroundColor: "#4206F8"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .7,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#chart-hls').length) {
			var ctx = document.getElementById("chart-hls").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Tahun',
						data: [9.68,	10.09,	10.53,	11.00,	11.06,	11.39,	
								11.56,	11.79,	11.83, 11.86,	11.87, 11.88, 11.89],
						backgroundColor: "#06F868"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .8,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#chart-ppp').length) {
			var ctx = document.getElementById("chart-ppp").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Ribu Rupiah',
						data: [6702,	6788,	6976,	7112,	7188,	7522,	
								7698,	8002,	8329, 8684, 8455, 8546, 9044],
						backgroundColor: "#F8BD06"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .9,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#line-chart-ipm').length) {
			var ctx = document.getElementById("line-chart-ipm").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2011','2012','2013','2014','2015','2016','2017',
							'2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Persen',
						data: [1.66,	1.30,	1.20,	0.53,	1.49,	0.89,	
								1.25,	1.25,	1.20,	-0.28, 0.31, 1.09],
						backgroundColor: "#03d0ea"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .5,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}

//Grafik PDRB mulai
		
		if ($('#chart-pdrb').length) {
			var ctx = document.getElementById("chart-pdrb").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['2010','2011','2012','2013','2014','2015','2016',
							'2017','2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Harga Berlaku',
						data: [19.32, 21.34, 24.14, 27.38, 30.68, 33.99, 37.04, 
								40.20, 43.81, 47.18, 46.48, 48.76, 52.92],
						backgroundColor: "#0659F8"
					}, {
						label: 'Harga Konstan',
						data: [19.32, 20.42, 21.65, 22.94, 24.26, 25.49, 26.92, 
								28.33, 29.89, 31.39, 30.64, 31.70, 33.39],
						backgroundColor: "#03d0ea"
					}]
				},
			options: {
				legend: {
				  position: "bottom",
				  display: true,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .9,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#chart-lpe').length) {
			var ctx = document.getElementById("chart-lpe").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['2011','2012','2013','2014','2015','2016','2017',
							'2018','2019','2020','2021','2022'],
					datasets: [{
						label: 'Persen',
						data: [5.68, 6.04, 5.94, 5.79, 5.03, 5.65, 5.21, 5.50, 
								5.05, -2.41, 3.46, 5.34],
						backgroundColor: "#C206F8"
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true
				},	
			  scales: {
				  xAxes: [{
					  barPercentage: .5,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.07)"
					},
				  }]
				 }

			 }
			});
		}
		
		if ($('#donut-pdrbx').length) {
			var ctx = document.getElementById("donut-pdrbx").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Pengeluaran Konsumsi Rumah Tangga", 
							"Pengeluaran Konsumsi LNPRT", 
							"Pengeluaran Konsumsi Pemerintah", 
							"Pembentukan Modal Tetap Bruto", 
							"Perubahan Inventori", 
							"Net Ekspor Barang dan Jasa"],
					datasets: [{
						backgroundColor: [
							"#14abef",
							"#02ba5a",
							"#eb5076",
							"#d13adf",
							"#0659F8",
							"#F5F806"
						],
						data: [67.65, 0.97, 6.39, 20.83, 2.37, 1.79],
						borderWidth: [0, 0, 0, 0, 0, 0]
					}]
				},
			options: {
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#585757',  
					  boxWidth:15
				   }
				}
			   }
			});
		}

		if ($('#polarChart').length) {
			var ctx = document.getElementById("polarChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'polarArea',
				data: {
					labels: ["Lable1", "Lable2", "Lable3", "Lable4"],
					datasets: [{
						backgroundColor: [
							"#14abef",
							"#02ba5a",
							"#03d0ea",
							"#d13adf"
						],
						data: [13, 20, 11, 18],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
			   legend: {
				 position :"right",	
				 display: true,
				    labels: {
					  fontColor: '#585757',  
					  boxWidth:15
				   }
				},
			scale: {
				  gridLines: {
					   color: "rgba(0, 0, 0, 0.07)" 
					 }, 
				}
			   }
			});
		}


		if ($('#pieChart').length) {
			var ctx = document.getElementById("pieChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["Lable1", "Lable2", "Lable3", "Lable4"],
					datasets: [{
						backgroundColor: [
							"#eb5076",
							"#fba540",
							"#000000",
							"#03d0ea"
						],
						data: [13, 120, 11, 20],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
			   legend: {
				 position :"right",	
				 display: true,
				    labels: {
					  fontColor: '#585757',  
					  boxWidth:15
				   }
				}
			   }
			});
		}


		if ($('#doughnutChart').length) {
			var ctx = document.getElementById("doughnutChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Lable1", "Lable2", "Lable3", "Lable4"],
					datasets: [{
						backgroundColor: [
							"#14abef",
							"#02ba5a",
							"#eb5076",
							"#d13adf"
						],
						data: [13, 120, 11, 20],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
			   legend: {
				 position :"right",	
				 display: true,
				    labels: {
					  fontColor: '#585757',  
					  boxWidth:15
				   }
				}
			   }
			});
		}


	});

})(window, document, window.jQuery);