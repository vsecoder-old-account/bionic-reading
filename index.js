// get all <p>
var paragraphs = document.getElementsByTagName("p");

// cycle through
for(var i = 0; i < paragraphs.length; i++) {
    // get <p> text
    let text = paragraphs[i].innerText
    // splitting the text
    let words = text.split(" ")
    let result = ''
    // process every word
    words.map((elem) => {
        let mid = Math.floor(elem.length / 2)
        result += `<span style="font-weight: bold">${elem.slice(0, mid)}</span>${elem.slice(mid)} `
    });
    //console.log(result);
    // write result
    paragraphs[i].innerHTML = result
}

// thk https://github.com/crisanlucid/vite-react-tailwind-bionic-reading