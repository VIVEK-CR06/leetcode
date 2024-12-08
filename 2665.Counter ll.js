var createCounter = function(init) {
    let current=init;
    return{
        increment:function(){
            current+=1;
            return current;
        },
        decrement:function(){
            current-=1;
            return current;
        },
        reset(){
            current=init;
            return current;
        }
            }
};