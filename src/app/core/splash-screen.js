

class SplashScreen {
  render() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .splash-screen {
        background: url('../assets/splash-screen.jpg');
        width: 650px;
        height: 650px;
      }
    `;
    document.head.appendChild(styleElement);
    const splashElement = document.createElement('div')
    const rootElement = document.getElementById("root");
    rootElement.appendChild(splashElement);

    splashElement.classList.add('splash-screen');

  // Add it to the index.html

  // Set the background to render the assets
  // Image that we chose for this screen!
    splashElement.classList.add('splash-screen');
  }
  destroy() {}
}