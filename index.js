// get all <p>
var paragraphs = document.getElementsByTagName("p");
var regex1 = /(<([^>]+))/ig
var regex2 = /(([^>]+)>)/ig
var t = 0;

// cycle through
for(var i = 0; i < paragraphs.length; i++) {
    // get <p> text
    let text = paragraphs[i].innerHTML
    // splitting the text
    let words = text.split(" ")
    let result = ''
    // process every word
    words.map((elem) => {
        if (elem == '<a') {t = 1};
        if (t == 1) {
            if (elem.slice(-1) == '>') {t = 0}
            return result += `${elem} `
        }
        if (elem.match(regex1) == null || elem.match(regex2) == null) {
            let mid = Math.floor(elem.length / 2);
            return result += `<span style="font-weight: bold">${elem.slice(0, mid)}</span>${elem.slice(mid)} `;
        } else {
            return result += `${elem} `;
        }

    });
    //console.log(result);
    // write result
    paragraphs[i].innerHTML = result
}

// thk https://github.com/crisanlucid/vite-react-tailwind-bionic-reading