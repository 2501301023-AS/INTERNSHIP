se((res,rej)=>{
    setTimeout(()=>rej("server error")
,2000)}).catch(console.log)