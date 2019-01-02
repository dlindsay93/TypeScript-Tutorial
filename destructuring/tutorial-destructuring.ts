var randVals = {x:1, y:2, z:3};

var{x, y, z} = randVals;

document.write(x + y + z + "<br />");

[x, y, z] = [z, y, x];

document.write("Switch : " + x + y + z + "<br />");
