#!node
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS

var fs = require('fs');

fs.readFile('_toc.markdown', 'utf8', function(er, input) {
  if (er) throw er;
  // process the input for @include lines
  require('./json.js')(input, 'toc.json', function(er, obj) {
    console.log(JSON.stringify(obj, null, 2));
    if (er) throw er;
    });
});

