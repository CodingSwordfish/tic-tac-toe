const counter = (function(){
    count = 0;
    return ()=>{
        count++
        console.log(count)
    }
})()
console.log(counter)
// counter()