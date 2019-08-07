/*将code写到#code和style标签中*/
let domCode = document.querySelector('#code')
function writeCode(prefix, code, fn) {
    let n = 0
    let timeId = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleCode.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n >= code.length) {
            clearInterval(timeId)
            fn && fn.call()
        }
    }, 10)
}

let result1 = `
/*长草颜团子开始啦!*/

/*先准备一下*/

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 1s;
}
*::before {
    box-sizing: border-box;
}
*::after {
    box-sizing: border-box;
}

body {
    background: skyblue;
    height: 100vh;
}

#code {
    width: 40%;
    height: 100vh;
    padding: 10px;
    overflow: auto;
}

`

let result2 = `
/*开始画吧*/

#paper {
    transition: all 1s;
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    box-shadow: 0px 3px 67px 0px rgba(255,255,255,1) inset;
    display: flex;
    justify-content: center;
    align-items: center;
}

.paperContent {
    display: block;
    margin-top: 146px;
    width: 260px;
    height: 260px;
    border: 5px solid #141776;
    border-radius: 200px 174px 200px 178px;
    background: #fff;
    position: relative;
}

.blush {
    display: block;
    width: 35px;
    height: 28px;
    background: #F8DADA;
    position: absolute;
    top: 106px;
    left: 87px;
    border-radius: 35px;
    transform: rotate(133deg);
}

.blush::after {
    content: '';
    display: block;
    width: 35px;
    height: 28px;
    background: #F8DADA;
    position: absolute;
    top: -15px;
    left: -122px;
    border-radius: 35px;
    transform: rotate(188deg);
}

.eye{
    width: 34px;
    height: 34px;
    background: #141776;
    position: absolute;
    left: 165px;
    top: 25px;
    border-radius: 100%;
}
.eye::after {
    content: '';
    display: block;
    width: 34px;
    height: 34px;
    background: #141776;
    position: absolute;
    right: 75px;
    top: 60px;
    border-radius: 100%;
}

.mouse {
    width: 28px;
    height: 18px;
    position: absolute;
    border: 5px solid #141776;
    border-bottom: 0;
    left: 146px;
    top: 50px;
    border-radius: 50px 50px 0 0;
    transform: rotate(133deg);
    transform-origin: 0 100%;
}
.mouse::after {
    content: '';
    width: 25px;
    height: 18px;
    position: absolute;
    border: 5px solid #141776;
    border-bottom: 0;
    left: -27px;
    top: -9px;
    border-radius: 50px 50px 0 0;
    transform: rotate(10deg);
    transform-origin: 0 100%;
}

.clover {
    display: block;
    width: 8px;
    height: 34px;
    border: 2px solid #141776;
    position: absolute;
    border-radius: 30px;
    top: -13px;
    left: 48px;
    transform: rotate(133deg);
    background: #141776;
}

.clover::before {
    content: '';
    width: 37px;
    height: 35px;
    border-radius: 174px 200px 14px 200px;
    position: absolute;
    left: -40px;
    top: 16px;
    background: #B0E758;
    border: 3px solid #141776;
    transform: rotate(-46deg);
}

.clover::after {
    content: '';
    width: 37px;
    height: 35px;
    border-radius: 174px 200px 14px 200px;
    position: absolute;
    left: 8px;
    top: 19px;
    background: #B0E758;
    transform: rotate(146deg);
    border: 3px solid #141776;
}

.hands {
    width: 45px;
    height: 40px;
    position: absolute;
    border: 5px solid #141776;
    border-bottom: 0;
    left: 118px;
    top: 125px;
    border-radius: 50px 50px 0 0;
    transform: rotate(31deg);
    transform-origin: 0 100%;
}

.hands::after {
    content: '';
    width: 45px;
    height: 40px;
    position: absolute;
    border: 5px solid #141776;
    border-bottom: 0;
    left: 23px;
    top: -130px;
    border-radius: 50px 50px 0 0;
    transform: rotate(1deg);
    transform-origin: 0 100%;
    background: #fff;
}
  
  .balloon{
    position: absolute;
    left: 208px;
    top: -271px;
    width: 100px;
    height: 130px;
    background: #F8DADA;
    border-radius: 50%;
    box-shadow: inset -20px -20px 20px #F8DADA;
    opacity: 0.9;
    -webkit-animation: float 5s ease-in-out infinite;
   
  }
  
  .balloon:before{
    content: "";
    position: absolute;
    top: 130px;
    left: 40px;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #F8DADA;
  }
  
  .balloon:after{
    content: "";
    position: absolute;
    left: 50px;
    top: 135px;
    width: 1px;
    height: 140px;
    background: rgba(33,33,33,0.6);
  }

  @-webkit-keyframes float{
    0%,100%{
      -webkit-transform: translateY(0px) rotate(3deg);
    }
    50%{
      -webkit-transform: translateY(-25px) rotate(-5deg);
    }
  
  }

`

writeCode('', result1, () => {
    createPaper(() => {
        writeCode(result1, result2)
    })
})

function createPaper(fn) {
    let paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    let paperContent = document.createElement('per')
    paperContent.className = 'paperContent'
    paper.appendChild(paperContent)
    let blush = document.createElement('per')
    blush.className = 'blush'
    paperContent.appendChild(blush)
    let eye = document.createElement('per')
    eye.className = 'eye'
    paperContent.appendChild(eye)
    let mouse = document.createElement('per')
    mouse.className = 'mouse'
    paperContent.appendChild(mouse)
    let clover = document.createElement('per')
    clover.className = 'clover'
    paperContent.appendChild(clover)
    let balloon = document.createElement('per')
    balloon.className = 'balloon'
    paperContent.appendChild(balloon)
    let hands = document.createElement('per')
    hands.className = 'hands'
    paperContent.appendChild(hands)
    fn && fn.call()
}