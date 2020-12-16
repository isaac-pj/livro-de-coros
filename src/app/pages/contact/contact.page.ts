import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  expanded = false;
  orientation = "";
  phone: "tel:88997138594";
  facebook = "https://www.facebook.com/isaac.lima.7549";
  mail = "mailto:isaac-pj@hotmail.com";

  short = `A Crown Studio, é uma pequena empresa fundada e administrada pelo designer digital 
  Isaac Brandão Lima, que atua nas áreas de design e desenvolvimento de software, oferecendo 
  soluções...`;

  text = `A Crown Studio, é uma pequena empresa fundada e administrada pelo designer digital 
  Isaac Brandão Lima, que atua nas áreas de design e desenvolvimento de software, oferecendo 
  soluções de design digitais e impressas, para seus clientes. Entre os serviços disponíveis 
  estão: a criação de artes gráficas em geral como, marca, identidade visual, cartazes, cartão 
  de visita, etc. Edição digital de imagens, áudio e vídeo. Ilustração manual, vetorial, pintura digital, 
  animação 2D, modelagem e animação 3D. Soluções de UX design, criação de web sites, aplicativos 
  mobile e desktop, desenvolvimento de jogos 2D e 3D, entre outros.`;

  constructor(public platform: Platform, public navCtrl: NavController) {
    platform.ready().then((readySource) => {
      this.orientation =
        platform.width() > platform.height() ? "horizontal" : "vertical";
    });
  }

  ngOnInit() {}

  load(url) {
    window.open(url, "_blank");
  }

  expand() {
    this.expanded = this.expanded ? false : true;
  }
}
