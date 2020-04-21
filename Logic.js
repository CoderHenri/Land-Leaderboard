

function GetLandData(Reihenfolge) {

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
        realName = "No User Profile";
      }
      Array[x].owner = realName;
      console.log("NameData:" + realName + "Arraycheck" + Array[x].owner);
      x++;
    });
  
  }
  ListMaker(Array, IDList, Reihenfolge);
}

var TotalPlotsOwned = [];

function ListMaker(Array, IDList, Reihenfolge) {

  console.log("returned Array" + JSON.stringify(Array));
  document.getElementById(IDList).innerHTML = '<ol class="LL">' + Array.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';

  if(Reihenfolge === "Genesis"){
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Mystic");
  } else if(Reihenfolge === "Mystic") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Arctic");
  } else if(Reihenfolge === "Arctic") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Forest");
  } else if(Reihenfolge === "Forest") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Savannah");
  } else if(Reihenfolge === "Savannah") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";
  }

  console.log("gets displayed: " + JSON.stringify(TotalPlotsOwned));

  if(Reihenfolge === "Savannah") {
    TotalLeaderboardWriter(TotalPlotsOwned);
  }

}

function TotalLeaderboardWriter(ArrayAr) {
  console.log("Gets called <3");
  
  var amount = ArrayAr;
  var EinzelTotal = [];

  var seen = {};
  amount = amount.filter(function(entry) {
      var previous;
  
      // Have we seen this label before?  owner ersetzt label
      if (seen.hasOwnProperty(entry.owner)) {
          // Yes, grab it and add this data to it -> amount is taking place of data
          previous = seen[entry.owner];
          previous.amount.push(entry.amount);
  
          // Don't keep this entry, we've merged it into the previous one
          return false;
      }
  
      // entry.data probably isn't an array; make it one for consistency
      if (!Array.isArray(entry.amount)) {
          entry.amount = [entry.amount];
      }
  
      // Remember that we've seen it
      seen[entry.owner] = entry;
  
      // Keep this one, we'll merge any others that match into it
      return true;
  });

  console.log(JSON.stringify(ArrayAr));
  console.log("Testo1.5.owner: " + JSON.stringify(amount));
  console.log("TEEEEEESSSSSST: " + JSON.stringify(amount[1]));

  var OneOwnerOneNumber = [];

  for(i=0; amount.length > i; i++) {
    amount[i].amount = sum(amount[i].amount);

    amount.sort((a,b) => b.amount - a.amount || a.owner - b.owner);

    document.getElementById("TList").innerHTML = '<ol class="LL">' + amount.map(function (genesis) {
      return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
    }).join('') + '</ol>';

  }
}


function sum(input){
             
  if (toString.call(input) !== "[object Array]")
     return false;
       
             var total =  0;
             for(var i=0;i<input.length;i++)
               {                  
                 if(isNaN(input[i])){
                 continue;
                  }
                   total += Number(input[i]);
                }
              return total;
             }