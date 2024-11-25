
class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<nav class="navbar navbar-expand-lg  bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">Olu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="fend.html">API usage</a></li>
                    <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
                    
                  </ul>
              </li>
            

        </div>
      </div>
    </nav>`
    }

}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
    this.innerHTML =`
      <footer class="footer bg-dark text-light text-center py-3">
        <div class="container text-light text center">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <h6>© Created by | Olugbenga Akindele</h6>       
                </div>

                <div class="col-sm-12 col-md-4">
                    <h6>Email | akindelegbenga@gmail.com</h6>       
                </div>

                <div class="col-sm-12 col-md-4">
                    <h6>Country | Canada</h6>       
                </div>


            </div>
             
        </div>
      </footer>
      `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);