# Nodejs - Madura API

This package is developed for fetch data from https://maduraonline.com. 

All credits should goes to Madura Kulathunga who develop the madura online dictionary.

[![npm version](https://badge.fury.io/js/%40sl-codeblaster%2Fnodejs-madura-api.svg)](https://badge.fury.io/js/%40sl-codeblaster%2Fnodejs-madura-api)

# Install
`npm install @sl-codeblaster/nodejs-madura-api`

# Demo
[![Edit 0qx6yljwlv](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nodejs-madura-api-demo-s8pu2?file=/src/index.js)

# Example
    const http = require("http");
    const maduraAPI = require("@sl-codeblaster/nodejs-madura-api");

    //create a server object:
    http
    .createServer(async (req, res) => {

        // "name" is the search text.you can pass your own text.
        const result = await maduraAPI.query("name"); 

        res.send(result);
    })
    .listen(8080); 

# Response
```
{
    query: 'name',
    source: 'https://www.maduraonline.com',
    credits: 'All credits should goes to Madura Kulathunga who create the Madura Online Dictionary.',
    meanings:[   
        { category: 'n.', meaning: 'අපදේශය' },
        { category: 'n.', meaning: 'අභිධා' },
        { category: 'n.', meaning: 'අභිධානය' },
        { category: 'n.', meaning: 'නම' },
        { category: 'vt.', meaning: 'නම් කරනවා' },
        { category: 'v.', meaning: 'නම් තබනවා' },
        { category: 'n.', meaning: 'නාමය' },
        { category: 'vt.', meaning: 'නියම කරනවා' },
        { category: 'n.', meaning: 'ප්‍රඥප්තිය' },
        { category: 'n.', meaning: 'ප්‍රසිද්ධිය' },
        { category: 'n.', meaning: 'සංඥා කරනවා' },
        { category: 'n.', meaning: 'සංඥාව' },
        { category: 'st.', meaning: 'සන්' },
        { category: 'vt.', meaning: 'සඳහන් කරනවා' } 
    ] 
}
```