function chartResize(eleArr){
    for(let i = 0; i<eleArr.length; i++){
        // 定时器是为了在页面存在多个图时，resize方法的调用时间微微错开，避免明显的卡顿
        setTimeout(function(){
            eleArr[i].resize();
            console.log(i)
        }, 200);
    }
}

export {chartResize}