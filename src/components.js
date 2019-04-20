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
