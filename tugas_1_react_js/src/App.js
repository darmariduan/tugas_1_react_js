import React, { Component } from "react";
import Header from "./Header.js";
import MenuUtama from "./Page/MenuUtama.js";
import MenuProduct from "./Page/MenuProduct.js";
import MenuKontak from "./Page/MenuKontak.js";
import MenuTentangKami from "./Page/MenuTentangKami.js";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
<Header/>
<MenuUtama/>
<MenuProduct/>
<MenuKontak/>
<MenuTentangKami/>
<Footer/>
      </div>
    );
  }
}
export default App;
