const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journeys) => {
      return journeys.startLocation;

    });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeys) => {
    return journeys.endLocation;

  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journeys) => {
    return journeys.transport === transport;
  });


};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journeys)=> {
    return journeys.distance > minDistance;
  })



};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.journeys.map(journeys => journeys.distance);
  return distances.reduce((runningTotal, total) => runningTotal + total);
  

};



Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportType = this.journeys.map(journey => journey.transport);
  return transportType.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  })
};



module.exports = Traveller;
