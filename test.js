function pairElement(str) {
  var part="";
  var array1=[];

  for (var i=0;i<str.length;i+=1){
    switch(str[i]){
       case "A":
       part="T";
        array1.push([str[i],part]);
       break;
       case "G":
       part="C";
        array1.push([str[i],part]);
       break;
       case "C":
       part="G";
        array1.push([str[i],part]);
       break;
       case "T":
       part="A";
        array1.push([str[i],part]);
       break;
      }
    }
      
  return array1;
}

pairElement("GCG");
