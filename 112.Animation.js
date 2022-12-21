let animate= (obj,target,callback)=>{
    clearInterval(obj.timer);
    obj.timer=setInterval(()=>{
        let step= Math.ceil((target- obj.offsetLeft)/10);
        step= step>0? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft==target) {
            clearInterval(obj.timer);
            // 毁掉函数写到定时器结束里面
            if(callback){
                // 调用
                callback();
            }
        }
        obj.style.left = obj.offsetLeft+step+'px';
    },15);
};