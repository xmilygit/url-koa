const fs = require('fs');

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    })

    for(var f of js_files){
        console.log(`正在处理controller:${f}...`);
        let mapping=require(__dirname+'/controllers/'+f);
        addMapping(router,mapping);
    }
}

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`注册路由路径:GET ${path} 成功`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`注册路由路径:POST ${path} 成功`);
        } else {
            console.log(`无效路径:${url}`)
        }
    }
}

module.exports=function(dir){
    let 
    controllers_dir=dir||'controllers',
    router=require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();
}