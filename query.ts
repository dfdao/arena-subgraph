import axios from 'axios';
import fetch from 'node-fetch';

const API_URL_GRAPH =
  "https://graph-optimism.gnosischain.com/subgraphs/name/arena/test";

const PLAYERS_QUERY = `
  query {
    arenas(first: 1000) {
      id
    }
  }
`
async function fetchGQL(query: any, graphApiUrl = API_URL_GRAPH) {

    console.log(JSON.stringify({query}))
    const response = await fetch(graphApiUrl, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return await response.json();
  }
  

async function main () {
  const { data } = await fetchGQL(PLAYERS_QUERY)
  console.log(data.arenas.length);
}

main().catch(console.log);
