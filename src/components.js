const createElement = (tagName, opts = {}) => {
  const { children, ...rest } = opts;
  const element = Object.assign(
    document.createElement(tagName),
    rest,
  );

  if (children && typeof children.forEach === 'function') {
    children
      .filter(item => item)
      .forEach(element.appendChild.bind(element));
  }

  return element;
};

const getDate=()=> {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    return today;
};

const getTime = () => {
   let today = new Date();
   let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
   return time;
};

module.exports = createElement;

// const render = (Component, target) => {
//   const child = Component({});
//   if (child) {
//     Object.assign(target, { innerHTML: '' });
//     target.appendChild(child);
//   }
// };

// const label = (props) => {
//   createElement('label', {
//   innerText: props.text,
// });
// };

// const input = (props) => {
//   createElement('input', {
//     placeholder: props.placeholder,
//   })
// };
