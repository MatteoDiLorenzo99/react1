import React from 'react';

// Componente corretto che accetta props
class ImgComponent extends React.Component {
  render() {
    const { src, alt } = this.props; // Destruttura le props
    return (
      <section>
        <img src={src} alt={alt} />
      </section>
    );
  }
}

export default ImgComponent;