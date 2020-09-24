const nombres = process.argv.slice(2);

function triSansTri(array){
var fini = false;
    while (!fini){
    fini = true;
        for (var i = 1; i < array.length; i += 1){
        if (array[i - 1] > array[i]){
        fini = false;
            var box = array[i - 1];
            array[i - 1] = array[i];
            array[i] = box;
        }
        }
    }
    return array;
}

triSansTri(nombres);
console.log(nombres);
