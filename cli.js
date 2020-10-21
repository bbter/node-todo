#!/usr/bin/env node
const program = require('commander')
const api = require('./index.js')

if(process.argv.length === 2){
    //说明用户直接运行 node cli
    void api.showAll()
}else {
    program
        .option('-x, --xxx', 'what the x')
    program
        .command('add')
        .description('add a task')
        .action((...args) => {
            const words = args.slice(-1).join(' ')
            api.add(words).then(()=>{'添加成功'},()=>{console.log('添加失败')})
        });
    program
        .command('clear')
        .description('clear  all task')
        .action(() => {
            api.clear().then(()=>{'清除完毕'},()=>{console.log('清除失败')})
        });
}




program.parse(process.argv);


