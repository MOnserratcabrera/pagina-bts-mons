const lista = document.getElementById('lista')
const  arrayItem=["Jin", "Suga", "J-Hope", "RM", "Jimin", "V" , "Jungkook"];

const fragment = document.createDocumentFragment()
 arrayItem.forEach((item) => {
    const li = document.createElement('li')
    li.textContent = item
    const childNode = fragment.firstChild
    console.log(item,childNode)
    //fragment.appendChild(li)
    fragment.insertBefore(li,childNode )

  })
  lista.appendChild(fragment)