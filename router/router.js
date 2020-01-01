const somethingRandom = e('h1', {}, 'CANT SEE NADDA HERE!');
const router = (path) => {
  var element = routes[path.slice(1)]
  if (!element) return somethingRandom;
  return element();
};
