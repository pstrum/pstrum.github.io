(function graphChart() {

  function parseData(str) {
    var parseResponse = JSON.parse(str);
    var getDataSeries = parseResponse.geoset.series;
    return getDataSeries;
  }

  function displayData(dataSeries, state) {

    var graphData = dataSeries[state].data;

    var margin = {
      top: 80,
      right: 10,
      bottom: 30,
      left: 40
    };

    var width = parseInt(d3.select(".state-chart").style("width"), 10);
    width = width - margin.left - margin.right;

    var height = 300 - margin.top - margin.bottom;

    var x0 = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(graphData.map(function(d) {
          return d[0];
        }));

    var energyData = ["Renewable", "Total"];
    graphData.forEach(function(d) {
      d.energyTotals = energyData.map(function(name) { 
        var index = energyData.indexOf(name);
        return { name: name, value: d[index + 1] };
      });
    });

    var x1 = d3.scale.ordinal()
        .rangeRoundBands([0, x0.rangeBand()])
        .domain(energyData);

    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(graphData, function(d) {
          return d3.max(d.energyTotals, function(d) { 
            return d.value; });
        })]);

    var color = d3.scale.ordinal()
        .range( ["#31E981", "#FFED65"]);

    var barChart = d3.select(".bar-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    var year = barChart.selectAll(".bar")
        .data(graphData)
      .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function(d) {
          return "translate(" + x0(d[0]) +",0)";
        });

    var bars = year.selectAll("g")
        .data(function(d) { return d.energyTotals; })
      .enter().append("g");

    bars.append("rect")
        .attr("width", x1.rangeBand())
        .attr("x", function(d) {
          return x1(d.name);
        })
        .attr("y", function(d) {
          return y(d.value);
        })
        .attr("height", function(d) {
          return height - y(d.value);
        })
        .style("fill", function(d) { return color(d.name); });

    bars.append("text")
        .attr("x", function(d) { return x1(d.name) + 29; })
        .attr("y", function(d) { return y(d.value) - 4; })
        .attr("dy", "0px")
        .text(function(d) { return d.value; });

    var xAxis = d3.svg.axis()
        .scale(x0)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format("s"));

    barChart.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

    barChart.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 5)
          .attr("dy", "10px")
          .style("text-anchor", "end")
          .text("BTUs");

    var legend = barChart.selectAll(".legend")
          .data(energyData.slice().reverse())
        .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { 
            return "translate(0," + (i * -20 - 60) + ")"; });

    legend.append("rect")
          .attr("x", width - 20)
          .attr("width", 20)
          .attr("height", 20)
          .style("fill", color);

    legend.append("text")
          .attr("x", width - 30)
          .attr("y", 9)
          .attr("dy", "10px")
          .style("text-anchor", "end")
          .text(function(d) { return d; });
  }

  function compareEnergy(totalPromise, renewPromise) {

    return Promise.all( [totalPromise, renewPromise] )

    .then( function(values) {
      var mergeData = {};
      var parseTotal = parseData(values[0]);
      var parseRenew = parseData(values[1]);

      for (var prop in parseTotal) {
        if (parseTotal.hasOwnProperty(prop)) {
          var state = parseTotal[prop];

          if (parseRenew.hasOwnProperty(state.region)) {
            var renewData = parseRenew[state.region];

            for (var i = 0; i < state.data.length; i++) {
              renewData.data[i].push(state.data[i][1]);
            }
          }
        }
      }
      return parseRenew;
    });
  }

  compareEnergy( eiaRequest.makeReq('GET', totalEnergy), eiaRequest.makeReq('get', totalRenewable) )
  .then( function(newObj) {

    $("#stateId").change(function() {
      $(".bar-chart").html("");
      var state = "USA-";
      $("select option:selected").each(function() {
        state += $(this).val();
        $("#state-header").html($(this).html());
      });
      var stateMerged = displayData(newObj, state);
    });

  } );

})();
