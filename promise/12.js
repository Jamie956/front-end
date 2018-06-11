//return new create promise object
function anAsyncCall(){
    var promise = Promise.resolve()
    return promise.then(()=>{
        //do something
        return newVar
    })
}