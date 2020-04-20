

function GetLandData(Reihenfolge) {
 
  console.log("Reihe  " + Reihenfolge);
  
  var url = "https://axieinfinity.com/graphql-server/graphql"
  
  if(Reihenfolge === "Genesis") {
    GetGen(url, Reihenfolge);
  } else if(Reihenfolge === "Mystic") {
    GetMystic(url, Reihenfolge);
  } else if(Reihenfolge === "Arctic") {
    GetArctic(url, Reihenfolge);
  } else if(Reihenfolge === "Forest") {
    GetForest(url, Reihenfolge);
  } else if(Reihenfolge === "Savannah") {
    GetSavannah(url, Reihenfolge);
  } 


  /*not working
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
      LeaderboardMaker(data, 'GList');
      console.log("entire data:", data);
  });
*/


}


function GetGen(url, Reihenfolge){
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
      LeaderboardMaker(data, 'GList', Reihenfolge);
      console.log("entire data:", data);
  });
}

function GetMystic(url, Reihenfolge){
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
      LeaderboardMaker(data, 'MList', Reihenfolge);
      console.log("entire data:", data);
  });
}

function GetArctic(url, Reihenfolge){
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
      LeaderboardMaker(data, 'AList', Reihenfolge);
      console.log("entire data:", data);
  });
}

function GetForest(url, Reihenfolge){
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
      LeaderboardMaker(data, 'FList', Reihenfolge);
      console.log("entire data:", data);
  });
}

function GetSavannah(url, Reihenfolge){
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
      LeaderboardMaker(data, 'SList', Reihenfolge);
      console.log("entire data:", data);
  });
}



//Testbed

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
      "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) {
      LeaderboardMaker(data, 'GList');
      console.log("entire data:", data);
  });

 
}


function LeaderboardMaker(JSONData, IDList, Reihenfolge){

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

  ProfileNamer(OwnersLeaderboard, IDList, Reihenfolge);

}

async function ProfileNamer(Array, IDList, Reihenfolge) {

  var url = "https://axieinfinity.com/graphql-server/graphql"
  var x = 0;
  for(i=0; Array.length > i; i++) {
    var loomAddy = Array[x].owner;
    console.log(Array);
    ethAddy = JSON.stringify(loomAddy);


    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      
      body: JSON.stringify({
        operationName:"GetProfileByLoomAddress",
        variables:{
          loomAddress:loomAddy
        },
        query:"query GetProfileByLoomAddress($loomAddress: String!) {\n  publicProfileWithLoomAddress(loomAddress: $loomAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
  
    .then(function(data) {
      var realName = "";
      try {
        realName = data.data.publicProfileWithLoomAddress.name;
      }
      catch {
        realName = "Nor user Profile";
      }
      Array[x].owner = realName;
      console.log("NameData:" + realName + "Arraycheck" + Array[x].owner);
      x++;
    });
  
  }
  ListMaker(Array, IDList, Reihenfolge);
}

function ListMaker(Array, IDList, Reihenfolge) {

  console.log("returned Array" + JSON.stringify(Array));
  document.getElementById(IDList).innerHTML = '<ol class="LL">' + Array.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';

  if(Reihenfolge === "Genesis"){
    GetLandData("Mystic");
  } else if(Reihenfolge === "Mystic") {
    GetLandData("Arctic");
  } else if(Reihenfolge === "Arctic") {
    GetLandData("Forest");
  } else if(Reihenfolge === "Forest") {
    GetLandData("Savannah");
  } else if(Reihenfolge === "Savannah") {
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";
  }
}

