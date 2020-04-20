//Testbed

function GetLandData() {
 
  var url = "https://axieinfinity.com/graphql-server/graphql"
  
  //Total
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) {
      var GenesisData = data;
      LeaderboardMaker(data, 'GList');
      console.log("entire data:", data);
  });

  
  //Genesis
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) {
      var GenesisData = data;
      LeaderboardMaker(data, 'GList');
      console.log("entire data:", data);
  });
    
  //Mystic
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":2400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Mystic"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) { 
      LeaderboardMaker(data, 'MList');
      console.log("entire data:", data);
  });
 
  //Arctic
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":3900,"sort":"PriceAsc","criteria":{"owner":null,"type":["Arctic"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) { 
      LeaderboardMaker(data, 'AList');
      console.log("entire data:", data);
  });

  //Forest
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Forest"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) { 
      LeaderboardMaker(data, 'FList');
      console.log("entire data:", data);
  });

  //Savannah
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Savannah"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) { 
      LeaderboardMaker(data, 'SList');
      console.log("entire data:", data);
  });
}


function GetLandData2() {
 
  var url = "https://axieinfinity.com/graphql-server/graphql"


  //Total, needs 3 fetch
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
      
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":2000,"sort":"PriceAsc","criteria":{"owner":null,"type":[]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) {
      //LeaderboardMaker(data, 'GList');
      console.log("entire data:", data);
  });

 
}


function LeaderboardMaker(JSONData, IDList){

  console.log("LeaderboardMaker" + JSON.stringify(JSONData));

  var Owners = [];
  var OwnersLeaderboard = [];

  var LandNumber = null;
  var LoopNumber = 0;
  var LandText = "empty";

  LandNumber = JSONData.data.lands.total;  //works

  while(LoopNumber < LandNumber) {
    LandText = JSONData.data.lands.result[LoopNumber].owner;
    Owners.push(LandText);
    LoopNumber = LoopNumber + 1;
  }

  Owners.sort();

  
  var current = null;
  var cnt = 0;
  for (var i = 0; i < Owners.length; i++) {
      if (Owners[i] != current) {
          if (cnt > 0) {

            OwnersLeaderboard.push({amount : cnt, owner : current});
          }
          current = Owners[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
  if (cnt > 0) {
    OwnersLeaderboard.push({amount : cnt, owner : current});
  }

  OwnersLeaderboard.sort((a,b) => b.amount - a.amount || a.owner - b.owner);

  document.getElementById(IDList).innerHTML = '<ol class="LL">' + OwnersLeaderboard.map(function (genesis) {
      return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';
  console.log("OwnerLead: " + JSON.stringify(OwnersLeaderboard));


  /*
    var GenesisPlotOwners = [];
    var GenLeaders = [];

    var text = "Invalid";
    try {       //catches the error if there is either a street or no land owner account
      text = data.data.land.ownerProfile.name;
      if(text == null) {
        text = data.data.land.owner;
      } 

      if(text != "Invalid") {
        GenesisPlotOwners.push(text);
        
      } 
    }
    catch {
      text = "Non-Registered Users";

      GenesisPlotOwners.push(text);
    }
    console.log(GenesisPlotOwners);
    console.log("entire data:", data);

    if(y == 81) {

      GenesisPlotOwners.sort();

      for(d=0; d < 7; d++){     // Deletes the street plots between the Genesis plots
        const index = GenesisPlotOwners.indexOf("Non-Registered Users");
        if (index > -1) {
          GenesisPlotOwners.splice(index, 1);
        }
      }

      var current = null;
      var cnt = 0;
      for (var i = 0; i < GenesisPlotOwners.length; i++) {
          if (GenesisPlotOwners[i] != current) {
              if (cnt > 0) {

                  GenLeaders.push({amount : cnt, owner : current});
              }
              current = GenesisPlotOwners[i];
              cnt = 1;
          } else {
              cnt++;
          }
      }
      if (cnt > 0) {
          GenLeaders.push({amount : cnt, owner : current});
      }

      GenLeaders.sort((a,b) => b.amount - a.amount || a.owner - b.owner);

      document.getElementById('GList').innerHTML = '<ol id="GL">' + GenLeaders.map(function (genesis) {
          return '<li>' + String(genesis["amount"]) + " Genesis Plot(s) owned by " + String(genesis["owner"]) + '</li>';
      }).join('') + '</ol>';
      console.log(GenLeaders);
    }
    console.log(y);
    y++;
  if(row > -30) {
    row = row - 1;
  } else if(col < -9) {
    col = col + 1;
  }
  console.log(row, col);
  i++;
}  
*/
}