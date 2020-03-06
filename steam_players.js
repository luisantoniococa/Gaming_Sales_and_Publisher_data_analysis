// The entire code consist in 3 functions, one that runs all the other 2 and the 2 that change the options selected


//  this is the option changed one and is controlled by the dropdown in index.html
// it takes the value of game 1 and then it creates a json call to gather the data, then it 
// reads the dictionary and pushes the start and end dates of each game for further filtering
// once filtered it compared the the start date of the selected game 1 with the ones in the dataset
// based on the date it filters those that are more recent than the selected game 1 to avoid errors in the comparison.
// it gets pushed to newgamenames and then it is used to build the selector 2 with the games 2.
// finaly it updates the trace 1 with the plotly values
function optionChanged1(game1){

  // getting the data
  d3.json("top100_steam_player_data.json").then(function(data) {

    newgamenames = []
    // going over the dictionray to find the keys, start month and end month
    for (let [key, value] of Object.entries(data)) {
      var monthdict = data[key].Month
      var monthdictlength = Object.keys(monthdict).length
      var monthdictend = data[key].Month[1]
      var monthdictstart = data[key].Month[monthdictlength - 1]
      var  gameNamesDict = {'key' : key, 'startmonth' : monthdictstart, 'endmonth': monthdictend}
      // pushing changes to the dictionary so it can be built.
      newgamenames.push(gameNamesDict)
      // used methods to check that we were getting the rigth values
              // console.log(`this is ${key} key and startmonth ${monthdict}`)
              // console.log("this is going multiple times")
      // another method to check we are in the rigth path

              // if(game1 == key){
              //   console.log(`this is ${game1}`)
              //   // data.filter(x => x>)
              //   // console.log(monthdict)

              // }
      
      // we make sure to eliminate the last value of the dataset since it is refered to a non month datapoint

      delete value["Month"][0]
      delete value['Avg. Players'][0]
      delete value['Gain'][0]
      delete value['% Gain'][0]
      delete value['Peak Players'][0]
    }
    // another method to check if we are in the rigth path when building the dictionary
              // console.log(newgamenames)
    // we use a smilar code earlier but this time we are getting the end month of game 1 to compare 
    var monthdict = data[game1].Month
    var monthdictlength = Object.keys(monthdict).length
    var monthdictend = data[game1].Month[1]
    var monthdictstart = data[game1].Month[monthdictlength - 1]
    // make sure we are getting the right values
              // console.log(monthdictstart)
              // var date1 = Date.parse(monthdictstart)
              // var date2 = Date.parse(monthdictend)
              // if (date1 < date2){
              //   console.log(`date 1 is less than date2`)
              // }
    // create a var that will hold the names of the filtered games by date
    // we used the Date.parse() method to be able to compare the dates
    var actualPrintNames = newgamenames.filter(x=> Date.parse(x.startmonth) > Date.parse(monthdictstart) )

    // make sure we have the rigth values
              // console.log(actualPrintNames)

    // create the selector 2 that is going to be built based in the filtered var created before.

    var selector2 = d3.select("#selGame2")
    selector2.html("<option value='default'>--Game 2--</option>")
    actualPrintNames.forEach(element=>{
      selector2.append("option")
      .property("value",element.key)
      .text(element.key)

    })
    // update the trace to make sure it changes respectively with game 1 
    var update = {
    x: [Object.keys(data[game1]["Month"]).map(i => data[game1]["Month"][i]).reverse()],
    y: [Object.keys(data[game1]["Avg. Players"]).map(i => data[game1]["Avg. Players"][i]).reverse()],
    name: game1
  };
  // pushing the changes into the plot [0] is becuae we are changing the trace 1
  Plotly.restyle('myDiv', update,[0]);

  });
}
function optionChanged2(game2){
  // making sure we get the rigth values
                // console.log(game2)
  d3.json("top100_steam_player_data.json").then(function(data) {
  
  // geting read of the first datapoint since it is irrelevant and can mess the data
    for (let [key, value] of Object.entries(data)) {
      delete value["Month"][0]
      delete value['Avg. Players'][0]
      delete value['Gain'][0]
      delete value['% Gain'][0]
      delete value['Peak Players'][0]
    }
  // updating the trace 2 values with the selection game 2
  var update = {
    x: [Object.keys(data[game2]["Month"]).map(i => data[game2]["Month"][i]).reverse()],
    y: [Object.keys(data[game2]["Avg. Players"]).map(i => data[game2]["Avg. Players"][i]).reverse()],
    name: game2
  };
  

  // pushing the changes into the plot, [1] is becuae we are changing the trace 2
  Plotly.restyle('myDiv', update, [1]);

  });
}


// the init function builds the first plot with the first game in the list.
function init(){
  var selector1 = d3.select("#selGame1"); 
  // an attempt of building the selector in this function
            // var selector2 = d3.select("#selGame2");
  d3.json('top100_steam_player_data.json').then((data)=> {
    var gameNames = []
    for (let [key, value] of Object.entries(data)) {
  // similar to the function above after calling our data, we filter to find the names and the start and end date
      var monthdict = data[key].Month
      var monthdictlength = Object.keys(monthdict).length
      var monthdictend = data[key].Month[1]
      var monthdictstart = data[key].Month[monthdictlength - 1]
      var  gameNamesDict = {'key' : key, 'startmonth' : monthdictstart, 'endmonth': monthdictend}
      gameNames.push(gameNamesDict)
      delete value["Month"][0]
      delete value['Avg. Players'][0]
      delete value['Gain'][0]
      delete value['% Gain'][0]
      delete value['Peak Players'][0]
    }
    // mkaing sure we get the rigth values
                // console.log(keys)
    gameNames.forEach(element => {
    // making sure we get the rigth values
                // console.log(element)
      selector1.append("option")
      .property("value",element.key)
      .text(element.key)
    // if we wanted to add a selector 2 in this function as the example above 
                // selector2.append("option")
                // .property("value",element.key)
                // .text(element.key)


    });

    // creating the first plot with 2 traces, we also empty trace 2 to make sure it does not show unnesesary data
    var trace1 = {
        x: Object.keys(data["Counter-Strike: Global Offensive"]["Month"]).map(i => data["Counter-Strike: Global Offensive"]["Month"][i]).reverse(),
        y: Object.keys(data["Counter-Strike: Global Offensive"]["Avg. Players"]).map(i => data["Counter-Strike: Global Offensive"]["Avg. Players"][i]).reverse(),
        name: "Counter-Strike: Global Offensive",
        type: 'scatter'
      };
      
      var trace2 = {
        // x: Object.keys(data["Dota 2"]["Month"]).map(i => data["Dota 2"]["Month"][i]).reverse(),
        // y: Object.keys(data["Dota 2"]["Avg. Players"]).map(i => data["Dota 2"]["Avg. Players"][i]).reverse(),
        // name: "Dota 2",
        x:  [],
        y: [],
        name: "",
        type: 'scatter'

      };
      var layout = {
        title: "Average Players per month ",
        xaxis: {
          title: 'Month',
          tickformat: '%B %Y',
          autorange: true,
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'lightgrey'
          },
          showticklabels: true,
          tickangle: 'auto',
           //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 8,
            color: 'black'
          },
        },
        yaxis: {
          title: 'AVG. Players per month',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'lightgrey'
          },
          showticklabels: true,
          tickangle: 45,
          tickfont: {
            family: 'Old Standard TT, serif',
            color: 'black'
          },
        }
      };
      
      var dataPlot = [trace1, trace2];
      // var dataPlot = [trace2]
      
      Plotly.newPlot('myDiv', dataPlot, layout);
  })
}
// calling the function to run the script
init();