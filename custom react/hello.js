function customRender(element,hello){
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.child
    for (let prop in element.props){
        domElement.setAttribute(prop,element.props[prop])
    }
    hello.appendChild(domElement)
}

const element={
    type:'a',
    props:{
        href:'https://www.youtube.com/',
        target:'_blank'
    },
    child: 'here is the youtube link, the best teacher :)'
}

const hello=document.getElementById('root')

customRender(element,hello)

//This shows the working of basic react, how react renders the components onto the DOM. 
//The provided code demonstrates a basic rendering process without the optimization and features that React provides, such as virtual DOM diffing and reconciliation.