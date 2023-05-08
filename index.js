const append = (data) => {
    let cont = document.getElementById("container")
   
    const arr = data;
    let i = 0;
    
        const show = setInterval(function(){
            if(i<arr.length){
                let p = document.createElement("p");

        let span = document.createElement("span");

        let btn = document.createElement("button")
        btn.setAttribute("class", "change")

        btn.innerText = "Change Color";
        p.innerHTML = `"<b>Title</b>:  <i>${arr[i].title}</i> "`;
        span.innerHTML = `<b>Status is: ${arr[i].completed}</b>`;


        p.append(span, btn)
        cont.append(p)
        

        p.style.textAlign = "center"
        p.style.height = "50px"
        p.style.marginBottom = '2px'


        btn.style.marginLeft = "8px"
        btn.style.padding = "10px"

        span.style.display = "inline-block"
        span.style.marginTop = "8px"
        span.style.marginLeft = "8px"
        span.style.padding = "6px"
        span.style.textAlign = "center"

        if (arr[i].completed === false) {
            span.style.backgroundColor = "red"
            span.style.color = "white"
        }
        else {
            span.style.backgroundColor = "lightgreen"
        }

        function color() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const bgColor = "rgb(" + red + "," + green + "," + blue + ")";

            p.style.backgroundColor = bgColor;
            btn.style.backgroundColor = bgColor
        }
        color();

        btn.addEventListener('click', color)
            }
            else{
                clearInterval(show)
            }
            i++
        },2000)
    
    
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(res) {

        return res.json()
    })
    .then(function(val) {
        console.log(typeof val)
        append(val);


    })