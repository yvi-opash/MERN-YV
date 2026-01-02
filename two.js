function min_max(a){
    let max = a[0];
    let min = a[0];
    for(let i=0; i<=a.length; i++){
        if (a[i] >= max){
            max = a[i];
        }

        if (a[i] <= min){
            min = a[i];
        }
        
    }
    console.log(max, "is a maximum number");
    console.log(min, "is a minimum number");
    
}

const arr = [6, 8, 2, 5, 9, 45, 548 ,84 ,51 ,5, -5215] 

min_max(arr);