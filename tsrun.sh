#!/bin/bash

# pass the filename to this script as an argument when calling
npx tsc $1.ts && node $1.js;
