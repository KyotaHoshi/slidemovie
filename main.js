// 時間間隔を設定
// appearクラスを付け替える関数

// setInterval(function関数, 時間)=> 繰り返し関数が実行される
// setTimeout(関数, 時間)=> 一回だけ関数が実行される
let i = 0
let j = 1

const change = () => {
    const imgs = document.getElementsByClassName("pig__img")
    if(i < imgs.length - 1) {
        imgs[i].classList.remove("appear")
        imgs[++i].classList.add("appear")
        
    } else {
        imgs[i].classList.remove("appear")
        i = 0
        imgs[i].classList.add("appear")
    }
    if(j < imgs.length - 1) {
        imgs[j].classList.remove("back")
        imgs[++j].classList.add("back")
        
    } else {
        imgs[j].classList.remove("back")
        j = 0
        imgs[j].classList.add("back")
    }
}

setInterval(change, 2000)