const render = (Component, target) => {
  const child = Component({});
  if (child) {
    Object.assign(target, { innerHTML: '' });
    target.appendChild(child);
  }
};
