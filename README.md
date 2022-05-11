# arena-subgraph

Exploring the Graph for Arena

# Requirements
* Install `node >= 14` (You can consider using [nvm](https://github.com/nvm-sh/nvm))
* Install [Yarn](https://classic.yarnpkg.com/en/docs/install)

# Installation

`git clone https://github.com/dfdao/arena-subgraph.git`

# Usage

`yarn`

`yarn ts-node query.ts`

# Modifiying Query

Update the `QUERY` variable in `query.ts` for any query you want to run.

This follows the GraphQL [syntax](https://thegraph.com/docs/en/developer/query-the-graph/).

# Details about Dark Forest Arena Subgraph

This is a work in progress, but if you go to the [playground](https://graph-optimism.gnosischain.com/subgraphs/name/arena/test/graphql) and click `Query`, you can see the schema that is available for querying.

> Currently only the `Arena` and `ArenaPlayer` entities are able to be queried!

