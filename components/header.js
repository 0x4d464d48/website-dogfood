var navbar = e(
  ReactBootstrap.Navbar,
  {bg: 'dark', variant: 'dark'},
  [
    e(ReactBootstrap.Navbar.Brand, {}, 'Ze Brand'),
    e(ReactBootstrap.Nav, {}, [
      e(ReactBootstrap.Nav.Link, {}, 'Link 1'),
      e(ReactBootstrap.Nav.Link, {}, 'Link 2'),
      e(ReactBootstrap.Nav.Link, {}, 'Link 3'),
    ]),
  ]
);

var jumboTron = e(
  ReactBootstrap.Jumbotron,
  {},
  [
    e('p', {}, 'Just a simple paragraph. Hello everybody!'),
    e('h3', {}, `The Time is: ${new Date().toTimeString()}`),
    e(ReactBootstrap.Button, {variant: 'danger'}, 'The Danger button!'),
  ]
);


var bootStrapElement = e(
  Alert,
  {variant: 'primary'},
  'This is a Bootstrap Alert!'
);

const generateElement = () => e(
  'div',
  {},
  navbar, 
  bootStrapElement,
  //jumboTron,
  e(
    ReactBootstrap.Jumbotron,
    {},
    [
      e('p', {}, 'Just a simple paragraph. Hello everybody!'),
      e('h3', {}, `The Time is: ${new Date().toTimeString()}`),
      e(ReactBootstrap.Button, {variant: 'danger'}, 'The Danger button!'),
    ]
  ),
  'Howdly diddly ding dong doodly!'
);


