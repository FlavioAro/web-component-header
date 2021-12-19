import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('rocketseat-header')
export class MyElement extends LitElement {

  @property({ type: Boolean }) logo = false;

  @property({ type: String }) menu = '';

  @property({ type: Array }) data = new Array;

  @property({ type: String }) login = '';

  @property({ type: String }) button = '';
  
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 16px;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      list-style: none;
    }
    
    ul li a {
      height: 80px;
      margin: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #707184;
      text-transform: capitalize;
      position: relative;
    }
    
    ul li a:hover {
      color: #ececec;
    }
    
    ul li a:hover::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 0;
      border: 1px solid #9466ff;
    }

    .active::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 0;
      border: 1px solid #9466ff;
    }

    .account {
      color: #fff;
      cursor: pointer;
    }
    
    .account a {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .register {
      padding: 12px 19px;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
    }

    .login {
      padding: 12px 23px;
      background-color: #121214;
      border: 1px solid #9466ff;
      color: #fff;
      border-radius: 4px;
    }

    .login:hover {
      padding: 12px 23px;
      background-color: #9466ff;
      border: 1px solid #121214;
      color: #fff;
      border-radius: 4px;
    }

    nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mainbar {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header {
      margin-bottom: 85px;
      width: 100%;
      background-color: #121214;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      border-bottom: 1px solid #242424;
    }
    
    .header nav {
      width: 80%;
    }
    
    #img-login {
      position: absolute;
      display: block;
    }
  `

renderDefault() {
  return html``;
}

renderLogo() {
  return html`
      <div class="logo">
          <svg width="180" height="34" viewBox="0 0 180 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.504 9.98303C35.9895 9.98303 34.7407 11.1875 34.7407 12.7062V18.4666V24.227H37.504V18.4666V12.7062H40.7986H44.0932V9.98303H40.7986H37.504Z" fill="#E1E1E6"></path><path d="M60.5662 17.0789V12.68C60.5662 11.1875 59.344 9.95684 57.8029 9.95684H53.3392H48.8755C47.3611 9.95684 46.1123 11.1613 46.1123 12.68V17.0789V21.4777C46.1123 22.9702 47.3345 24.2009 48.8755 24.2009H53.3392H57.8029C59.3174 24.2009 60.5662 22.9964 60.5662 21.4777V17.0789ZM57.8029 17.0789V21.4777H53.3392H48.8755V17.0789V12.68H53.3392H57.8029V17.0789Z" fill="#E1E1E6"></path><path d="M66.0928 9.98303C64.5784 9.98303 63.3296 11.1875 63.3296 12.7062V17.105V21.5039C63.3296 22.9964 64.5518 24.227 66.0928 24.227L75.8173 24.0961V21.5039H66.0928V17.105V12.7062H75.8173V10.1139L66.0928 9.98303Z" fill="#E1E1E6"></path><path d="M91.6553 9.98303H87.9089L82.4356 15.7173H81.3462V9.98303H78.583V17.0789V24.2009H81.3462V18.4404H82.7279H82.9404L88.6263 24.2009H92.4258L85.1191 16.7647L91.6553 9.98303Z" fill="#E1E1E6"></path><path d="M95.7711 21.4777V18.4404L107.462 18.3095V15.7173V12.68C107.462 11.1875 106.239 9.95684 104.698 9.95684H100.235H95.7711C94.2566 9.95684 93.0078 11.1613 93.0078 12.68V17.0789V21.4777C93.0078 22.9702 94.23 24.2009 95.7711 24.2009L107.462 24.07V21.4777H95.7711ZM95.7711 12.68H100.235H104.698V15.7173H101.616H95.7711V12.68Z" fill="#E1E1E6"></path><path d="M114.396 5.82017H113.334L111.633 7.8887V9.95723H109.534V12.6803L111.633 12.6542V21.4781C111.633 22.9706 112.855 24.2013 114.396 24.2013L118.86 24.0703V21.4781H114.396V12.628L119.259 12.5494V9.95723H114.396V5.82017Z" fill="#E1E1E6"></path><path d="M133.819 18.4404C133.819 16.9479 132.597 15.7173 131.056 15.7173H127.575H124.094V12.68H133.819V10.0878L124.094 9.95684C122.58 9.95684 121.331 11.1613 121.331 12.68V15.7173C121.331 17.2098 122.553 18.4404 124.094 18.4404H127.575H131.056V21.4777H121.331V24.07L131.056 24.2009C132.57 24.2009 133.819 22.9964 133.819 21.4777V18.4404Z" fill="#E1E1E6"></path><path d="M148.246 9.98303H143.782H139.318C137.804 9.98303 136.555 11.1875 136.555 12.7062V17.105V21.5039C136.555 22.9964 137.777 24.227 139.318 24.227L151.009 24.0961V21.5039H139.318V18.4666L151.009 18.3357V15.7435V12.7062C151.009 11.1875 149.787 9.98303 148.246 9.98303ZM148.246 15.7173H139.318V12.68H143.782H148.246V15.7173Z" fill="#E1E1E6"></path><path d="M165.463 9.98303L153.772 10.1139V12.7062H165.463V15.7435L153.772 15.8744V18.4666V21.5039C153.772 22.9964 154.994 24.227 156.535 24.227H160.999H165.463C166.977 24.227 168.226 23.0226 168.226 21.5039V17.105V12.7062C168.199 11.1875 166.977 9.98303 165.463 9.98303ZM165.463 21.4777H160.999H156.535V18.4404H165.463V21.4777Z" fill="#E1E1E6"></path><path d="M175.138 12.6276L180 12.549V9.95684H175.138V5.79361H174.075L172.374 7.86213V9.93066H170.275V12.6538L172.374 12.6276V21.4516C172.374 22.944 173.597 24.1747 175.138 24.1747L179.601 24.0438V21.4516H175.138V12.6276Z" fill="#E1E1E6"></path><path d="M27.4347 0.661562L22.9445 0.00696484C22.8116 -0.019219 22.6788 0.0331455 22.6256 0.0855133L20.7126 2.5468C20.5798 2.7039 20.5532 2.91337 20.6063 3.09666C20.6595 3.27995 20.5001 3.43705 20.3141 3.41087L18.7465 3.07047C18.5073 3.01811 18.2416 3.09666 18.0822 3.30614L11.8649 11.1613C11.7587 11.3184 11.5461 11.3708 11.3601 11.2922L8.99542 10.2449C8.78286 10.1401 8.54374 10.1663 8.35775 10.2972L7.16212 11.1089C6.97613 11.2398 6.71043 11.266 6.49787 11.1613L5.91334 10.8733C5.54137 10.69 5.08969 10.8995 4.98341 11.2922L4.55829 13.1513C4.45201 13.5964 4.638 14.0415 5.03655 14.2772L5.93991 14.827L8.836 16.5814L10.2442 17.4454C10.6427 17.6811 11.1476 17.6287 11.493 17.3407L13.8577 15.2984C14.0436 15.1412 14.3359 15.0889 14.5485 15.2198L15.2658 15.5864C15.505 15.7173 15.7972 15.6649 15.9832 15.4816L17.1789 14.3819C17.3648 14.1986 17.6571 14.1724 17.8697 14.2772L19.6498 15.0889C19.9155 15.2198 20.2344 15.1412 20.4204 14.9056L21.244 13.8582L27.4879 5.97689C27.7801 5.61031 27.5941 5.06045 27.1159 4.95572L25.7343 4.64151C25.442 4.58914 25.3092 4.22257 25.5217 4.0131L27.6739 1.36852C27.8864 1.05432 27.7536 0.71393 27.4347 0.661562Z" fill="#8257E6"></path><path d="M6.84272 16.529C6.70987 16.4505 6.57702 16.5814 6.63016 16.7123L7.2944 18.4404C7.34754 18.5713 7.34754 18.7023 7.32097 18.8332L6.73644 21.085C6.70987 21.2421 6.76301 21.3992 6.86929 21.4778L8.54317 22.7608C8.70259 22.8655 8.91515 22.8655 9.04799 22.7346L10.8016 21.2159C10.9079 21.1374 11.0407 21.085 11.147 21.0588L13.1397 20.8493C13.2726 20.8232 13.3257 20.6399 13.1929 20.5613L6.84272 16.529Z" fill="#8257E6"></path><path d="M6.25834 22.3418C6.15206 22.2633 5.99265 22.2371 5.8598 22.2895L4.45161 22.9702C4.3719 22.9964 4.31876 23.075 4.26562 23.1535L1.26326 30.4588C1.26326 30.485 1.26326 30.485 1.26326 30.5112C1.28983 30.5374 1.3164 30.5636 1.36953 30.5636L2.06035 30.3017C2.08692 30.3017 2.11348 30.3017 2.14005 30.3017C2.16662 30.3279 2.19319 30.3803 2.16662 30.4065L0.0144825 33.8889C-0.0386568 33.9675 0.0676241 34.046 0.120763 33.9675L7.90566 26.2694C7.98537 26.1909 8.01194 26.1123 8.03851 26.0076L8.19793 24.0176C8.19793 23.8867 8.14479 23.7819 8.06508 23.7034L6.25834 22.3418Z" fill="#8257E6"></path></svg>
      </div>
  `;
}

renderButton() {
  return html`
      <a class="login">${this.button}</a>
  `;
}

renderLogin() {
  return html`
      <a class="register">
          <img src="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Fuser.svg&w=16&q=100" alt="Login" id="img-login">
          ${this.login}
      </a>
  `;
}

  render() {
    this.data = this.menu.split(',');
    return html`
        <header class="header">
                <nav>
                      ${
                          this.logo ? this.renderLogo() : 
                          this.renderDefault()
                      }
                    <ul>
                        <li><a href="#">${this.data[0]}</a></li>
                        <li><a href="#">${this.data[1]}</a></li>
                        <li><a href="#">${this.data[2]}</a></li>
                        <li><a href="#">${this.data[3]}</a></li>
                    </ul>
                    <div class="account">
                        ${
                            this.login ? this.renderLogin() : 
                            this.renderDefault()
                        }
                        ${
                            this.button ? this.renderButton() :
                            this.renderDefault()
                        }
                    </div>
                </nav>
        </header>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rocketseat-header': MyElement
  }
}
