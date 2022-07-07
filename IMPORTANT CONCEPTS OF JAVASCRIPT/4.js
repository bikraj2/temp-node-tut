const sayName= (name,cb)=>{
    console.log('running some code')
    console.log('running some code')
    console.log('running some code')
    console.log('running some code')
    console.log('running some code')
    console.log('running some code')
    cb();
}
function callBack(){
    console.log('I ran at last');
}
sayName('ed',callBack)