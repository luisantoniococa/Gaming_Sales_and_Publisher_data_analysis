import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import * as d3 from 'd3'
//import Map from '../components/components'

//import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
//import API_KEY from './config.js'

const Plot = createPlotlyComponent(Plotly);			

var dataTemp = []
const regions = ['NA', 'EU', 'JP', 'Other']
const colors  = ['red', 'yellow', 'blue', 'grey']
const companies = [{company: 'Nintendo', NASales: 816.87, EUSales: 418.74, JPSales: 455.42, OtherSales: 95.33}, {company: 'Take-Two Interactive', NASales: 220.49, EUSales: 118.14, JPSales: 5.83, OtherSales: 55.24}, {company: 'Sony', NASales: 30, JPSales: 10, EUSales: 20, OtherSales: 5}, {company: 'compC', NASales: 10, JPSales: 50, EUSales: 30, OtherSales: 10} ]
var tempGames = [{ rank: 1, game : 'Wii Sports', NASales : 41.49, EUSales : 29.02,JPSales : 3.77, OtherSales : 8.46},
{ rank: 2, game : 'Super Mario Bros.', NASales : 29.08, EUSales : 3.58,JPSales : 6.81, OtherSales : 0.77},
{ rank: 3, game : 'Mario Kart Wii', NASales : 15.85, EUSales : 12.88,JPSales : 3.79, OtherSales : 3.31},
{ rank: 4, game : 'Wii Sports Resort', NASales : 15.75, EUSales : 11.01,JPSales : 3.28, OtherSales : 2.96},
{ rank: 5, game : 'Pokemon Red/Pokemon Blue', NASales : 11.27, EUSales : 8.89,JPSales : 10.22, OtherSales : 1},
{ rank: 6, game : 'Tetris', NASales : 23.2, EUSales : 2.26,JPSales : 4.22, OtherSales : 0.58},
{ rank: 7, game : 'New Super Mario Bros.', NASales : 11.38, EUSales : 9.23,JPSales : 6.5, OtherSales : 2.9},
{ rank: 8, game : 'Wii Play', NASales : 14.03, EUSales : 9.2,JPSales : 2.93, OtherSales : 2.85},
{ rank: 9, game : 'New Super Mario Bros. Wii', NASales : 14.59, EUSales : 7.06,JPSales : 4.7, OtherSales : 2.26},
{ rank: 10, game : 'Duck Hunt', NASales : 26.93, EUSales : 0.63,JPSales : 0.28, OtherSales : 0.47}
]

var tempGames2 = [{ rank: 17, game : 'Grand Theft Auto V', NASales : 7.01, EUSales : 9.27,JPSales : 0.97, OtherSales : 4.14},
{ rank: 18, game : 'Grand Theft Auto: San Andreas', NASales : 9.43, EUSales : 0.4,JPSales : 0.41, OtherSales : 10.57},
{ rank: 24, game : 'Grand Theft Auto V', NASales : 9.63, EUSales : 5.31,JPSales : 0.06, OtherSales : 1.38},
{ rank: 25, game : 'Grand Theft Auto: Vice City', NASales : 8.41, EUSales : 5.49,JPSales : 0.47, OtherSales : 1.78},
{ rank: 39, game : 'Grand Theft Auto III', NASales : 6.99, EUSales : 4.51,JPSales : 0.3, OtherSales : 1.3},
{ rank: 45, game : 'Grand Theft Auto V', NASales : 3.8, EUSales : 5.81,JPSales : 0.36, OtherSales : 2.02},
{ rank: 52, game : 'Grand Theft Auto IV', NASales : 6.76, EUSales : 3.1,JPSales : 0.14, OtherSales : 1.03},
{ rank: 57, game : 'Grand Theft Auto IV', NASales : 4.76, EUSales : 3.76,JPSales : 0.44, OtherSales : 1.62},
{ rank: 91, game : 'Grand Theft Auto: Liberty City Stories', NASales : 2.9, EUSales : 2.83,JPSales : 0.24, OtherSales : 1.75},
{ rank: 124, game : 'Red Dead Redemption', NASales : 2.79, EUSales : 2.61,JPSales : 0.17, OtherSales : 1.03},
{ rank: 135, game : 'Red Dead Redemption', NASales : 3.7, EUSales : 1.97,JPSales : 0.09, OtherSales : 0.57}
]

//Start with a few hardcoded options in case load fails
var options = ["Nintendo", "Microsoft Game Studios", "Take-Two Interactive", "Sony Computer Entertainment", "Activision", "LucasArts", "Virgin Interactive"]

//Create a tempory variable to hold promise data
var temp = getCompNames()

//Check if response received. If empty, just proceed with generating page. If data, update options
//Basically, this section lets hardcoded values be used if promise doesn't fulfill quick enough
if (temp === undefined) {
  console.log("Company names not received before page build")
}
else {
  options = temp
}

//console.log("Options:")
//console.log(options)
const defaultOption = options[0] //Set default option

//Create Initial Chart
//Get initial data
var tempData = filterCompData(defaultOption)

//Extract sales data
var tempSales = [tempData[0].NASales, tempData[0].EUSales, tempData[0].JPSales, tempData[0].OtherSales]

//Create barchart object
//var barchart = buildCharts(regions, tempSales, regions, regions, 'bar', 'h', defaultOption, 'bar', 'none')
console.log(defaultOption)
//compChanged({value: defaultOption})

 //console.log(newList)
//Create page
const Companies = (props) => {
    return (
      <div>
        <div className="row">
            {/* Sidebar */}
            <div className="col-md-2 bg-light py-auto" style={{borderRight: "2px solid lightgrey"}}>
                
                <div className="container" > 
                  <div className="px-auto"> Company </div>
                    <Dropdown options={options} onChange={compChanged} value={defaultOption} placeholder="Select an option"/>
                </div> 
            </div>
            <div className="col-md-10">
              <div className="row">
                {/* Map */}
                <div className="col-md-6">
                    {/* Temporarily removed; need to review how to send json data 
                    <Map />*/}
                </div>
                {/* Bar Chart */}
                <div className="col-md-6">
                    <div id="bar">
                    <Plot
                      data={[
                        {
                          x: [],
                          y: [],
                          type: 'bar',
                        },
                      ]}
                      layout={ {width: 750, height: 500, title: ''} }
                    />
                    </div>
                </div>
              </div>
              {/* Top Games for Company */}
              <div className="row">
                <div id="table"/>
                <table className="table">
                  <thead className="thead-light">
                    <tr><th>Rank</th><th>Game</th><th>NASales</th><th>EUSales</th><th>JPSales</th><th>OtherSales</th></tr>
                  </thead>
                <tbody id='gameTableBody'></tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    );
  };

function getData() {
  /*
    FIXME: ToDo
    Get updated data
  */
  console.log('Squirrel!')
};

function getCompNames() {
  //Returns list of company names
  d3.json('http://127.0.0.1:5000/getCompanyNames')
    .then(function(data){
    console.log(data)
    console.log("response received")
    compChanged({value: defaultOption})
    return (data)
  });
};
function filterCompData(companyName) {
  /*
    Filter data depending on company name
  */
  console.log(companyName) //Testing
  var data = companies //Pull in bulk data JSON

  //Retrieve data. Expects json to have a dictionary key for company name
  var filteredData = data.filter(item => item.company === companyName)

  //Return data
  return(
    filteredData
  )
};

function compChanged(newCompany) {
  /*
    Handle Company Dropdown Change Event
  */

  //Get data related to the selected company
  var filteredData = filterCompData(newCompany.value)
console.log(newCompany.value)
  if (newCompany.value == "Nintendo") {
    dataTemp = tempGames
  }
  else {
    dataTemp = tempGames2
  }
  //Get list of sales
  var salesList = [filteredData[0].NASales, filteredData[0].EUSales, filteredData[0].JPSales, filteredData[0].OtherSales]
  //Build out chart data
  var data=[
    {
      x: regions,
      y: salesList,
      type: 'bar',
      marker: {
        color: colors
      }
    },
  ]

  //Define Chart layout
  var layout= {width: 750, height: 500, title: newCompany.value,
    xaxis: {
      title: {
        text: 'Regions'}},
        yaxis: {
          title: {
            text: 'Sales (mil)'}}} 

  //Update plot (div, data info, layout info)
  Plotly.react('bar', data, layout)  

  //Populate table
  var temp1 = buildTable(dataTemp)
};

// function buildCharts(xValues, yValues,textValues, hoverTextValues, chartType, orientation, chartTitle, controlObj, chartMode) {
//   //Build Chart given x value array, y value array, array of textValues, array of hoverText values, chartType, orientation, and name of table element
//   //Check chart type. Different chart types can require vastly different data to be passed
//   //However, some elements always flow the same, e.g. the plotly.newplot call doesn't change.
//   //FIXME: Add Update Mode
//   switch(chartType) {
//     case "bar":
//       return(
//         <Plot
//           data={[
//             {
//               x: xValues,
//               y: yValues,
//               type: 'bar',
//             },
//           ]}
//           layout={ {width: 750, height: 500, title: chartTitle} }
//         />
//                 )

//     // case "bubble":
//     //   //Bubble Chart
//     //   var trace1 = {
//     //     x: xValues,
//     //     y: yValues,
//     //     text: textValues,
//     //     mode: chartMode,
//     //     marker: {
//     //       size: yValues,
//     //       color: xValues,
//     //     }
//     //   };
      
//     //   var data = [trace1];
      
//     //   var layout = {
//     //     title: chartTitle,
//     //     showlegend: false,
//     //     height: 600,
//     //     width: 1200
//     //   };
//     //   break;
//     default:
//       console.log('Unsupported Chart Type.')
          
//   };
  
//     console.log("Built " + chartType + " chart successfully");
// }
function buildTable(dataTemp1) {
  //Grab reference to div
  //var selector = d3.select('#table')
  //console.log(selector)
  d3.selectAll(".new-row")
    .remove()

  var tr = d3.select("#gameTableBody")
    .selectAll("tr")
    .data(dataTemp1)
    .enter().append("tr").attr("class", "new-row");

  var td = tr.selectAll("td")
    .data(function(d, i) { return Object.values(d); })
    .enter().append("td")
      .text(function(d) { return d; });
  // var ul = selector
  //   .append('ul');
  // console.log(ul)
  
  // ul
  //   .selectAll('li')
  //   .data(tempGames)
  //   .enter().append('li')
  //   .text(function(d) {return d;})

  return('Success')
}

  export default Companies;