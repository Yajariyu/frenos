// ... el código inicial que pegaste ...
'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Piensa que esto es un navbar'
    );
  }
}
// ... el código inicial que pegaste ...

const domContainer = document.querySelector('#navbar_container');
ReactDOM.render(e(NavBar), domContainer);