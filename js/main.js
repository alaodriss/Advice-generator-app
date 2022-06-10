function genAdviceDom(data,) {


    const $citaion = document.body 
    const info =
        `   
        <div class="container">
            <div class="block">
                <p class="num">ADVICE # ${data.slip.id}</p>
                <p  class="text">" ${data.slip.advice}" </p>
                <span>
                <img src="/images/pattern-divider-desktop.svg" alt="">
                </span>

                <button id="btn"><img src="/images/icon-dice.svg" alt=""></button>
            </div>
        </div> 
        `;
    
    $citaion.innerHTML = info;


    return   $citaion ;

}


function refreshAdvice() {
 
    let btn = document.getElementById('btn');

    const refreshPage = () => {
        location.reload();
      }

       btn.addEventListener('click',refreshPage)
}
