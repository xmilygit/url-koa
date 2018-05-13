var fn_index=async(ctx,next)=>{
    ctx.response.body=`
    <form action='/signin' method='post'>
        <p>Name:<input type='text' name='name' value='koa'></p>
        <p>Password:<input type='password' name='password'></p>
        <p><input type='submit' value='submit'></p>
    </form>
    `
}

var fn_signin=async(ctx,next)=>{
    let
    name=ctx.request.body.name||"xmily",
    password=ctx.request.body.password||"guest";
    console.log(`signin with name: ${name} , password: ${password}`);
    ctx.response.body=''
}

module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin
};