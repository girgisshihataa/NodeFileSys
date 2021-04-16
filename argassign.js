// Name: Girgis Shihataa
// Date: 04/16/2021
// Emp Id: 1973480

var fs = require('fs')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var read = ""
var array = "myfiles.txt"
var message = "You are awesome"

rl.question('Enter file name: ', (answer) => {
  read = answer
  fs.readFile(array, function(error,data){
    if(error){
        console.log("Error is , ", error)
    }else{
        if(!data.toString().includes(read)){
            fs.writeFile(read, message, function(error){
                if(error){
                    console.log("Error is , ", error)
                }else{
                    fs.appendFile(array, read+'\n', function(error){
                        if(error){
                            console.log("Error is , ", error)
                        }
                    })
                }
            })
        }else{
            console.log("File already exists")
        }
        
    }
})
  rl.close()
})


