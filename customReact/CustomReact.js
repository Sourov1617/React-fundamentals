function customRender(reactElement, container) {

    // Create a DOM element based on the reactElement type
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.Children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);

    // Create a DOM element based on the reactElement type using function
    const domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    domElement.innerHTML = reactElement.Children;
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
},
Children:'click me to go to google'
}

const mainContainer = document.getElementById('root');
customRender(reactElement,mainContainer);