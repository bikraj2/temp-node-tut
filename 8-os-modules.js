const os = require('os')

//info about current user

const user = os.uptime()
console.log(user)

const currentOS ={
    name:os.type(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)