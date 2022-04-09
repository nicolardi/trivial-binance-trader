function csv2json(csv) {
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
        var obj = [];
        var currentline=lines[i].split(",");
        for (var j = 0; j < headers.length; j++){
           

            if (isNaN(currentline[j])) {
                obj.push(currentline[j]);
            } else {
                let f = parseFloat(currentline[j]);
                if (isNaN(f)) {
                    continue;
                } 
                obj.push(parseFloat(currentline[j]));
            }
        }
        result.push(obj);
    }
    return result;
}


exports.csv2json = csv2json;
