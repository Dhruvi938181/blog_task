const isAuth=async(req,res,next)=>{
    const id=req.cookies.user;
    if(id){
        next()
    }
    else{
        res.redirect("/user/login")
    }
}

module.exports=isAuth