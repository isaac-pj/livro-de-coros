import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  expanded = false;
  orientation = '';
  phone: 'tel:88997138594';
  facebook = 'https://www.facebook.com/isaac.lima.7549';
  mail = 'mailto:isaac-pj@hotmail.com';

  short = `O Judah's Lion Studio, é uma empresa fundada e administrada pelo designer digital 
  Isaac Brandão Lima, que atua nas áreas de design e desenvolvimento de softawre,
  desenvolvendo...`;

  text = `O Judah's Lion Studio, é uma empresa fundada e administrada pelo designer digital 
  Isaac Brandão Lima, que atua nas áreas de design e desenvolvimento de softawre,
  desenvolvendo soluções de design digitais e impressas, para seus clientes. Entre 
  os serviços disponíveis estão: a criação de artes gráficas em geral como, marca, 
  idetidade visual, cartazes, cartão de visita, etc.. Edição de Imagens, Audio e Video.
  Illustração manual, vetorial e pintura digital e animação 2D. Modelagem e animação 3D.
  UX design, criação de web sites, aplicativos mobile e desktop, desenvolvimento de 
  jogos 2D e 3D, entre outros.`;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
  ) {
    platform.ready().then((readySource) => {
      this.orientation = platform.width() > platform.height() ? 'horizontal' : 'vertical';
    });
  }

  ngOnInit() {
  }

  load(url) {
    window.open(url, '_blank');
  }

  expand() {
    this.expanded = this.expanded ? false : true;
  }

}
