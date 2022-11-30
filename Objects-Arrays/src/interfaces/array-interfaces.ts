interface arr{ //array interface with number index
    [index:number] : string;
}

interface arr2{ //array interface with string index
    [index:string] : number
}

var st : arr;
st = ["Joe", "Ban", "Eon"]

var st2 : arr2;
st2 = {}
st2["Jan"] = 1
st2["feb"] = 2

for (var item in st2){
    console.log("array interface with string index key: "+ st2)
    console.log("array interface with string index: "+ st2[item])
}

for (var item in st){
    console.log("array interface with number index: "+ st)
}