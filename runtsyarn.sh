#!/bin/bash

# pass the filename to this script as an argument when calling
currdir=$(pwd)
yarn tsc $1.ts --outDir $currdir/js && node $currdir/js/$1.js;
