import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

async function component1() {
    Object.from();
}

document.body.appendChild(component());
