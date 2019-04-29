const newVisitorRegistry = () => { 
  // document.querySelector('.getVisitors').addEventListener('click', () => {
    window.location = '#visitors';
    location.reload();
};

const newCoworkerRegistry = () => { 
  // document.querySelector('.getVisitors').addEventListener('click', () => {
    window.location = '#coworkers';
    location.reload();
};

const getAdmin = () => { 
  // document.querySelector('.getVisitors').addEventListener('click', () => {
    window.location = '#admin';
    location.reload();
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
