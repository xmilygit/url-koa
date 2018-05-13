const Koa = require('koa')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const app = new Koa();

app.use(async (ctx, next) => {
    //console.log('${ctx.request.method} ${ctx.request.url}');
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next();
})

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`耗时: ${ms} ms`);
})

app.use(bodyParser());
app.use(controller());
//app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...')