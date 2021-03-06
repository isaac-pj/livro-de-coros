webpackJsonp([12],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContatoPage = /** @class */ (function () {
    function ContatoPage(platform, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.expanded = false;
        this.orientation = "";
        platform.ready().then(function (readySource) {
            _this.orientation = platform.width() > platform.height() ? 'horizontal' : 'vertical';
        });
    }
    ContatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatoPage');
    };
    ContatoPage.prototype.load = function (url) {
        window.open(url, '_blank');
    };
    ContatoPage.prototype.expand = function () {
        this.expanded = this.expanded ? false : true;
    };
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contato',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/contato/contato.html"*/'<!--\n  Generated template for the ContatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <h1 text-center ion-col col-12>Judah\'s Lion Studio</h1>\n  </ion-row>\n  \n  <ion-list>\n    <ion-item>\n      <p (tap)="expand()" class="expand-wrapper" [class.collapsed]="!expanded" [class.expanded]="expanded">\n        O Judah\'s Lion Studio, é uma empresa fundada e administrada pelo designer digital \n        Isaac Brandão Lima, que atua nas áreas de design e desenvolvimento de softawre,\n        desenvolvendo soluções de design digitais e impressas, para seus clientes. Entre \n        os serviços disponíveis estão: a criação de artes gráficas em geral como, marca, \n        idetidade visual, cartazes, cartão de visita, etc.. Edição de Imagens, Audio e Video.\n        Illustração manual, vetorial e pintura digital e animação 2D. Modelagem e animação 3D.\n        UX design, criação de web sites, aplicativos mobile e desktop, desenvolvimento de \n        jogos 2D e 3D, entre outros.\n      </p>\n    </ion-item>\n    <ion-item>\n      <h5 ion-col col-12>email:</h5>\n      <h2 text-style-bold ion-col>judahslionstudio@gmail.com</h2>\n    </ion-item>\n    <ion-item>\n      <h5 ion-col col-12>Responsável:</h5>\n      <h2 ion-col >Isaac Brandão Lima</h2>\n      <p ion-col>Designer Digital - Universidade Federal do Ceará</p>\n    </ion-item>\n    <ion-item>\n      <h5 ion-col col-12>Contato:</h5>\n      <h2 ion-col >isaac-pj@hotmail.com</h2>\n      <h2 ion-col >+55 88 997.138.594</h2>\n      <h2 ion-col >www.facebook.com/isaac.lima.7549</h2>\n      <h2 ion-col >www.instagram.com/isaac_pj</h2>\n    </ion-item>\n    <ion-item>\n      <h5 ion-col col-12>Github:</h5>\n      <h2 ion-col >isaac-pj.github.io</h2>\n    </ion-item>\n    <ion-item>\n      <h5 ion-col col-12>Behance:</h5>\n      <h2 ion-col >www.behance.net/isaac-pjcf95</h2>\n    </ion-item>\n  </ion-list>\n\n  <!--<ion-row>\n    <button ion-col col-4 color="whatsapp" ion-button full>\n      <ion-icon padding name="logo-whatsapp" > </ion-icon>\n      whatsapp\n    </button>\n    <button ion-col col-4 color="facebook" ion-button full>\n      <ion-icon padding name="logo-facebook" > </ion-icon>\n      facebook\n    </button>\n    <button ion-col col-4 color="e-mail" ion-button full>\n      <ion-icon padding name="mail" > </ion-icon>\n      e-mail\n    </button>\n  </ion-row>-->\n\n  <ion-row>\n    <button (tap)="load(\'tel:88997138594\')" icon-only ion-col col-4 color="whatsapp" ion-button full>\n      <ion-icon name="logo-whatsapp" > </ion-icon>\n      <label *ngIf="orientation == \'horizontal\'"  for="">whatsapp</label>\n    </button>\n    <button (tap)="load(\'https://www.facebook.com/isaac.lima.7549\')" icon-only ion-col col-4 color="facebook" ion-button full>\n      <ion-icon name="logo-facebook" > </ion-icon>\n      <label *ngIf="orientation == \'horizontal\'" for="">facebook</label>      \n    </button>\n    <button (tap)="load(\'mailto:isaac-pj@hotmail.com\')" icon-only ion-col col-4 color="e-mail" ion-button full>\n      <ion-icon name="mail" > </ion-icon>\n      <label *ngIf="orientation == \'horizontal\'" for="">e-mail</label>            \n    </button>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/contato/contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_popover__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_songs_dao_songs_dao__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_nav_right_nav__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(toastCtrl, alertCtrl, songsDao, modalCtrl, navCtrl, navParams, popoverCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.songsDao = songsDao;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.songs = [];
        this.start();
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.start = function () {
        this.songs = this.songsDao.getSongs().filter(function (song) { return song.favorit; });
        return this.songs;
    };
    //remover item dos favoritos
    FavoritesPage.prototype.remove = function (index) {
        // this.songs.splice(index, 1);
        this.songsDao.favorit(index);
        this.start();
    };
    //mudar para a pagina de musica  
    FavoritesPage.prototype.pushPageMusic = function (index) {
        // this.presentProfileModal(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right_nav_right_nav__["a" /* RightNavPage */], { index: index });
        return true;
    };
    //mudar para a pagina de musica por modal  
    FavoritesPage.prototype.presentProfileModal = function (index) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__right_nav_right_nav__["a" /* RightNavPage */], { index: index });
        profileModal.present();
    };
    FavoritesPage.prototype.clearAll = function () {
        for (var i in this.songs) {
            this.remove(this.songs[0].ID);
        }
    };
    FavoritesPage.prototype.more = function (event, options) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__popover_popover__["a" /* PopoverPage */], { data: options });
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) { return _this.popoverResponse(data ? data.idx : null); });
    };
    FavoritesPage.prototype.popoverResponse = function (value) {
        if (value != 0 && !value)
            return false;
        switch (value) {
            case 0:
                this.showConfirm("Deseja mesmo remover?", "todas os itens existentes serão removidos da lista de favoritos");
                break;
            case 1:
                // alert("opção: "+value);
                break;
            default:
                // alert("opção: "+value);
                break;
        }
    };
    FavoritesPage.prototype.showConfirm = function (title, msg) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Não',
                    handler: function (negative) {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function (positive) {
                        console.log('Agree clicked');
                        _this.clearAll();
                        _this.showToast("Todos os favoritos foram apagadas!", 3000, "bottom");
                        // setTimeout(() => {
                        //   window.location.reload();
                        //   // document.location.href = 'index.html';
                        // },3000);
                    }
                }
            ]
        });
        confirm.present();
    };
    FavoritesPage.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>favorites</ion-title>\n    <ion-buttons start>\n      <button (tap)="more($event, [\'Remover todos\'])" ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf="songs.length == 0" >\n    <!--<ion-card-header>\n      Ainda não há listas! :(\n    </ion-card-header>-->\n    <ion-card-content>\n      Ainda não há favoritos! :(  \n    </ion-card-content>\n  </ion-card>\n\n  <ion-list [virtualScroll]="start()" no-lines virtualTrackBy>\n    <ion-item *virtualItem="let song; let i = index" (click)="pushPageMusic(song.ID)">\n      <!--<ion-icon item-start name="heart" color="red"></ion-icon>-->\n      <ion-icon item-start name="remove-circle" color="secondaryTextColor" (click)="remove(song.ID); $event.stopPropagation();"></ion-icon>\n      <ion-label>\n        <h2>{{song.numero+". "}}{{song.titulo}}</h2>\n        <p>{{song.tags}}</p>\n      </ion-label>\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_general_dao_lists_dao__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__right_nav_right_nav__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, listsDaoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listsDaoProvider = listsDaoProvider;
        this.songs = [];
        this.checked = [];
        this.expanded = false;
        this.desmarcado = false;
        this.marcado = true;
        this.start();
        this.editing = this.list.comments ? false : true;
        console.log(this.input);
    }
    ListPage.prototype.save = function (msg) {
        if (msg) {
            this.list.comments = msg;
            this.listsDaoProvider.update(this.index, this.list);
            this.comments = this.list.comments;
            this.editing = false;
        }
    };
    ListPage.prototype.edit = function () {
        this.editing = true;
    };
    ListPage.prototype.cancel = function (value) {
        this.editing = this.list.comments ? false : true;
        this.expanded = false;
    };
    ListPage.prototype.clear = function () {
        if (!this.list.comments)
            return false;
        this.listsDaoProvider.update(this.index, this.list);
        this.list.comments = "";
        this.comments = this.list.comments;
        this.editing = true;
    };
    ListPage.prototype.expandItem = function () {
        this.expanded = this.expanded ? false : true;
    };
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListsPage');
    };
    ListPage.prototype.pushPageMusic = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__right_nav_right_nav__["a" /* RightNavPage */], { index: index, lista: this.list.songs });
    };
    ListPage.prototype.check = function (song) {
        this.checked.unshift(song);
        this.updateList();
    };
    ListPage.prototype.uncheck = function (index) {
        this.checked.splice(index, 1);
        this.updateList();
    };
    ListPage.prototype.updateList = function () {
        var _this = this;
        this.songs = this.list.songs.filter(function (elem, index, songs) {
            // return array.indexOf( elem ) === index;
            return (_this.checked.indexOf(elem) == -1);
        });
    };
    ListPage.prototype.start = function () {
        this.list = this.navParams.get("lista");
        this.songs = this.list.songs;
        this.index = this.navParams.get("index");
        this.comments = this.list.comments;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], ListPage.prototype, "input", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/list/list.html"*/'<!--\n  Generated template for the ListsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{list.name}}</ion-title>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-toolbar color="light">\n\n    <button ion-button clear color="secondaryTextColor" (tap)="expandItem()">\n      Comentários\n    </button>\n\n    <ion-buttons start>\n      <button [class.rotate]="expanded" ion-button icon-only color="secondaryTextColor" (tap)="expandItem()">\n        <ion-icon name="arrow-dropdown"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <div class="expand-wrapper" [class.collapsed]="!expanded" [class.expanded]="expanded">\n\n    <!--<ion-input type="text-area" placeholder="Escreva um lembrete ou comentário!  :)"></ion-input>-->\n    <ion-textarea #input [disabled]="!editing" [value]="comments" rows="3" maxLength="250" placeholder="Escreva um lembrete ou comentário!  :)"></ion-textarea>\n    <ion-toolbar color="light" text-right>\n\n        <button *ngIf="!editing" ion-button color="secondaryTextColor" clear (tap)="clear()">\n          Limapar\n        </button>\n        <button *ngIf="!editing" ion-button color="secondary" clear (tap)="edit();">\n          Editar\n        </button>\n        <button *ngIf="editing" ion-button color="secondaryTextColor" clear (tap)="cancel(input.value); input.value = comments;">\n          Cancelar\n        </button>\n        <button *ngIf="editing" ion-button color="secondary" clear (tap)="save(input.value);">\n          Salvar\n        </button>\n    </ion-toolbar>\n\n  </div>\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let song of songs; let i = index;" (click)="pushPageMusic(song.ID)">\n      <ion-label>\n        {{song.numero}}. {{song.titulo}}\n      </ion-label>\n      <ion-checkbox item-end color="dark" (click)="check(song); $event.stopPropagation();" [checked]="desmarcado"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines *ngIf="checked.length > 0" >\n    <ion-list-header>cantadas</ion-list-header>\n    <ion-item class="cantadas" *ngFor="let song of checked; let i = index;">\n      <ion-label>\n        {{song.numero}}. {{song.titulo}}\n      </ion-label>\n      <!--<ion-checkbox item-end color="dark" [(ngModel)]="checked[song.ID]" (ionChange)="isChecked()" ></ion-checkbox>-->\n      <ion-checkbox item-end color="dark" (click)="uncheck(i); $event.stopPropagation();" [checked]="marcado" ></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RandomPage = /** @class */ (function () {
    function RandomPage(alertCtrl, toastCtrl, viewCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songs = [];
        this.range = [];
        this.musics = 8;
        this.categories = ["Oração", "Adoração", "Natal", "Pascoa", "Cristo", "Deus"];
        this.songs = this.navParams.get("songs");
    }
    RandomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RandomPage');
    };
    RandomPage.prototype.close = function () {
        this.viewCtrl.dismiss({});
    };
    RandomPage.prototype.createList = function () {
        this.range.length > 4 ? this.viewCtrl.dismiss({ list: this.range }) : this.showToast("A lista precisa de no mínimo 5 músicas", 3000, "bottom");
    };
    RandomPage.prototype.update = function (index) {
        this.range[index] = this.songs[this.getRandomInt(0, this.songs.length - 1)];
    };
    RandomPage.prototype.add = function () {
        this.range.length < 20 ? this.range.push(this.songs[this.getRandomInt(0, this.songs.length - 1)]) : this.showToast("A lista deve ter no máximo 20 músicas", 3000, "bottom");
    };
    RandomPage.prototype.remove = function (index) {
        this.range.length > 5 ? this.range.splice(index, 1) : this.showToast("A lista precisa de no mínimo 5 músicas", 3000, "bottom");
    };
    RandomPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    RandomPage.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RandomPage.prototype.generateList = function (size) {
        this.range = [];
        for (var i = 0; i < size; i++) {
            var index = this.getRandomInt(0, this.songs.length - 1);
            this.range.push(this.songs[index]);
            // alert(this.getRandomInt(0, this.songs.length-1));
        }
    };
    RandomPage.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    RandomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-random',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/random/random.html"*/'<!--\n  Generated template for the RandomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gerar Lista</ion-title>\n    <ion-buttons start>\n      <button (tap)="close()" ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label>Quantida de Musicas</ion-label>\n      <ion-badge item-end>{{musics}}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-range min="5" max="20" step="1" snaps="true" pin="true" [(ngModel)]="musics" color="primary">\n        <ion-label range-left>5</ion-label>\n        <ion-label range-right>20</ion-label>\n      </ion-range>\n    </ion-item>\n    <!--<ion-item>\n      <ion-label>Categorias</ion-label>\n      <ion-select [(ngModel)]="categoria" multiple="true">\n        <ion-option *ngFor="let category of categories; let i = index;"  value="i">{{category}}</ion-option>\n      </ion-select>\n    </ion-item>-->\n  </ion-list>\n  <ion-list no-lines>\n    <p *ngIf="range.length == 0">\n      Toque no botão abaixo para criar uma lista aleátoriamente\n    </p>\n    <ion-item *ngFor="let song of range; let i = index" >\n      <ion-icon item-start name="refresh" (tap)="update(i)"></ion-icon>\n      <ion-label>\n        {{song.numero}}. {{song.titulo}}\n      </ion-label>\n      <ion-icon item-end name="remove-circle" (tap)="remove(i)"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-buttons start>\n    <button ion-button (tap)="generateList(musics)" >gerar lista</button>\n    <button ion-button icon-only outline (tap)="add()" >\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="light" text-right>\n      <button ion-button color="secondaryTextColor" clear (tap)="close()">\n        Cancelar\n      </button>\n      <button ion-button color="secondary" clear [disabled]="range.length < 5" (tap)="createList()">\n        Criar Lista\n      </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/random/random.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */]])
    ], RandomPage);
    return RandomPage;
}());

//# sourceMappingURL=random.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_storage_data_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(toastCtrl, alertCtrl, dataStorageProvider, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataStorageProvider = dataStorageProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.reset = function () {
        this.showConfirm("Deseja apagar tudo?", "Todos os dados serão apagados incluindo as listas criadas e os favoritos");
    };
    //apaga todo o banco de dados
    SettingsPage.prototype.clear = function () {
        this.dataStorageProvider.clear();
    };
    SettingsPage.prototype.showConfirm = function (title, msg) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Não',
                    handler: function (negative) {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function (positive) {
                        console.log('Agree clicked');
                        _this.dataStorageProvider.clear();
                        _this.showToast("Todos os dados foram apagados!", 1000, "bottom");
                        setTimeout(function () {
                            window.location.reload(true);
                            // window.location.href = 'index.html';
                            // navigator.app.loadUrl("file:///android_asset/www/index.html");
                            // document.location.href = 'index.html';
                            // window.location.href = 'index.html'
                        }, 1000);
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cofigurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item (click)="reset()">\n      <ion-icon item-start name="trash"></ion-icon>\n      <ion-label>\n        <h2>Apagar todos os dados pessoais</h2>\n        <p>Todos os dados no app serão excluidos</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_data_storage_data_storage__["a" /* DataStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage.prototype.load = function (url) {
        window.open(url, '_blank');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row ion-col col-12>\n      <ion-col col-12 col-lg-6>\n        <h3>Quem somos:</h3>\n        <p >\n          O Judah\'s Lion Studio, é uma empresa fundada e administrada pelo designer digital \n          Isaac Brandão Lima, filho e menbro da Igreja Bíblica de Morada Nova e que atua nas áreas de design e desenvolvimento de softawre,\n          desenvolvendo soluções de design digitais e impressas, para seus clientes.\n        </p>\n      </ion-col>\n      <ion-col col-12 col-lg-6>\n        <h3>Sobre o app:</h3>\n        <p>\n          Este aplicativo foi desenvolvido como uma solução dgital do livro de coros, \n          hinário base ultilizado pelo grupo das Igrejas Bíblicas. Meu agradecimento \n          especial em primeiro lugar a Deus, por ter nos capacitado a iniciar esse \n          projeto, em segundo lugar a <strong (tap)="load(\'https://www.facebook.com/deboravieira.mn\')" ion-text color="facebook">Débora Vieira da Silva</strong> \n          que ajudou bastante no trabalho revisão do app. Que ele possa ser últil na \n          obra do Senhor, contribuindo para a honra e gloria de Deus.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n  <h1 for="">Igreja Bíblica de Morada Nova</h1>\n  <label ion-col col-12>Localização: </label>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.0152359413219!2d-38.37259434198406!3d-5.098775127477717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDUnNTUuNiJTIDM4wrAyMicxNy40Ilc!5e0!3m2!1spt-BR!2sbr!4v1533713527284" width="100%" height="70%" frameborder="0" style="border:0" allowfullscreen></iframe>\n  <button (tap)="load(\'https://www.facebook.com/IgrejaBiblicaDeMoradaNova\')" icon-only color="facebook" ion-button block>\n    <ion-icon color="white" name="logo-facebook" > </ion-icon>\n    facebook/igreja bíblica - mn\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/sobre/sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cifras/cifras.module": [
		292,
		11
	],
	"../pages/contato/contato.module": [
		293,
		10
	],
	"../pages/favorites/favorites.module": [
		294,
		9
	],
	"../pages/list/list.module": [
		295,
		8
	],
	"../pages/lists/lists.module": [
		296,
		7
	],
	"../pages/popover/popover.module": [
		298,
		6
	],
	"../pages/random/random.module": [
		297,
		5
	],
	"../pages/right-nav/right-nav.module": [
		299,
		4
	],
	"../pages/select/select.module": [
		300,
		3
	],
	"../pages/settings/settings.module": [
		301,
		2
	],
	"../pages/slides/slides.module": [
		302,
		1
	],
	"../pages/sobre/sobre.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_general_dao_lists_dao__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_select__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__right_nav_right_nav__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_songs_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_songs_dao_songs_dao__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(songsService, songsDao, listsDaoProvider, navCtrl, modalCtrl, loadingCtlr) {
        this.songsService = songsService;
        this.songsDao = songsDao;
        this.listsDaoProvider = listsDaoProvider;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtlr = loadingCtlr;
        this.searching = false;
        this.type = "text";
        this.placeHolder = "Search";
        // this.listsDaoProvider.reset();
        // this.songsService.changeSongs();
    }
    // #LIFECYCLE
    HomePage.prototype.ionViewDidEnter = function () {
        this.songsDao.update();
    };
    // #ACTIONS
    HomePage.prototype.list = function () {
        return !this.searching ?
            this.songsDao.getSongs() :
            this.getSearchItems();
    };
    //realizar busca passando o tipo
    HomePage.prototype.getSearchItems = function () {
        return this.type == "number" ?
            this.songsDao.searchByNumber(this.searchbar.value) :
            this.songsDao.searchByString(this.searchbar.value);
    };
    HomePage.prototype.search = function () {
        var _this = this;
        this.searching = true;
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 150);
    };
    HomePage.prototype.changeSearchToNumber = function () {
        this.type = "number";
        this.placeHolder = "Digite o numero:";
        this.search();
    };
    HomePage.prototype.changeSearchToString = function () {
        this.type = "text";
        this.placeHolder = "Digite o nome ou um trecho:";
        this.search();
    };
    HomePage.prototype.searchClose = function () {
        this.searching = false;
        this.searchbar.value = "";
        this.songsDao.update();
    };
    //favoritar uma musica
    HomePage.prototype.favorit = function (index) {
        this.songsDao.favorit(index);
    };
    // #NAVIGATION
    //mudar para a pagina de seleção
    HomePage.prototype.pushPageSelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__select_select__["a" /* SelectPage */], {});
        this.searchClose();
        return false;
    };
    //mudar para a pagina de musica  
    HomePage.prototype.pushPageMusic = function (index) {
        // this.presentProfileModal(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__right_nav_right_nav__["a" /* RightNavPage */], { index: index });
        if (this.type == 'number')
            this.searchClose();
        return false;
    };
    // #INTERFACE
    //mudar para a pagina de musica por modal  
    HomePage.prototype.presentProfileModal = function (index) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__right_nav_right_nav__["a" /* RightNavPage */], { index: index, modal: true });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "searchbar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar >\n    <button *ngIf="!searching" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!searching" >Início</ion-title>\n    <ion-searchbar \n      #searchbar \n      [placeholder]="placeHolder" \n      [class.hide]="!searching" \n      [type]="type" \n      [showCancelButton]="true" \n      (ionCancel)="searchClose()">\n    </ion-searchbar>\n    <ion-buttons *ngIf="!searching" start>\n      <button (click)="changeSearchToString()" ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>  \n</ion-header>\n\n<ion-content>\n\n  <ion-list \n    [virtualScroll]="list()" \n    (press)="pushPageSelect()" \n    approxItemHeight="67px" \n    no-lines \n    virtualTrackBy>\n\n    <section padding *ngIf="searching && list().length == 0" >\n      <h2>Sinto muito! Nenhum resultado correspondente :(</h2>\n      <p>Tente novamente. Você pode buscar por número, \n        título ou mesmo por um trecho na música</p>      \n    </section>\n    \n    <ion-item \n      *virtualItem="let song; let i = index" \n      (click)="pushPageMusic(song.ID)">\n      <ion-icon \n        [class.favorit]="song.favorit"\n        [class.color]="!song.favorit"\n        (click)="$event.stopPropagation(); favorit(song.ID);"\n        item-start \n        name="heart">\n      </ion-icon>\n      <ion-label>\n        <h2>{{song.numero+". "}}{{song.titulo}}</h2>\n        <p>{{song.tags}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button \n      (tap)="changeSearchToNumber()" \n      ion-fab><ion-icon \n      name="keypad">\n    </ion-icon></button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_songs_service__["a" /* SongsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_storage_data_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_songs_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SetupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupProvider = /** @class */ (function () {
    function SetupProvider(dataStorageProvider, songsService) {
        this.dataStorageProvider = dataStorageProvider;
        this.songsService = songsService;
        console.log('Hello SetupProvider Provider');
        // this.start();
    }
    //inicializa a primeira vez pegando do arquivo
    SetupProvider.prototype.start = function () {
        this.check();
    };
    SetupProvider.prototype.check = function () {
        var _this = this;
        console.log('Hello check');
        this.dataStorageProvider.get("Songs").then(function (value) {
            if (!value)
                _this.populate();
        }).catch(function (error) {
            console.log(error);
        });
    };
    SetupProvider.prototype.populate = function () {
        console.log('não tem dados');
        this.songs = this.songsService.getSongs();
        this.dataStorageProvider.insert("Songs", this.songs);
        // alert('populou!')
    };
    SetupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_storage_data_storage__["a" /* DataStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_songs_service__["a" /* SongsService */]])
    ], SetupProvider);
    return SetupProvider;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CifrasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CifrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CifrasPage = /** @class */ (function () {
    function CifrasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CifrasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CifrasPage');
    };
    CifrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cifras',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/cifras/cifras.html"*/'<!--\n  Generated template for the CifrasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cifras</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/cifras/cifras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CifrasPage);
    return CifrasPage;
}());

//# sourceMappingURL=cifras.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidesPage');
    };
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/slides/slides.html"*/'<!--\n  Generated template for the SlidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Slides</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/slides/slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_popover_popover__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_random_random__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_slides_slides__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cifras_cifras__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lists_lists__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_right_nav_right_nav__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_select_select__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_songs_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_general_dao_lists_dao__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_songs_dao_songs_dao__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_locales_pt__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_data_storage_data_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_setup_setup__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























Object(__WEBPACK_IMPORTED_MODULE_9__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_24__angular_common_locales_pt__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                //para gerar um build de production comente os modulos abaixo
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_right_nav_right_nav__["a" /* RightNavPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cifras_cifras__["a" /* CifrasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_random_random__["a" /* RandomPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cifras/cifras.module#CifrasPageModule', name: 'CifrasPage', segment: 'cifras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contato/contato.module#ContatoPageModule', name: 'ContatoPage', segment: 'contato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lists/lists.module#ListsPageModule', name: 'ListsPage', segment: 'lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/random/random.module#RandomPageModule', name: 'RandomPage', segment: 'random', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/right-nav/right-nav.module#RightNavPageModule', name: 'RightNavPage', segment: 'right-nav', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select/select.module#SelectPageModule', name: 'SelectPage', segment: 'select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_right_nav_right_nav__["a" /* RightNavPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cifras_cifras__["a" /* CifrasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_random_random__["a" /* RandomPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__services_songs_service__["a" /* SongsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                __WEBPACK_IMPORTED_MODULE_25__providers_data_storage_data_storage__["a" /* DataStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_setup_setup__["a" /* SetupProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
var List = /** @class */ (function () {
    function List(name, date, time, comments, songs) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.songs = songs;
    }
    return List;
}());

//# sourceMappingURL=list.model.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_sobre_sobre__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contato_contato__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_favorites_favorites__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_setup_setup__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CifrasPage } from './../pages/cifras/cifras';
// import { SlidesPage } from './../pages/slides/slides';










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, setupProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.setupProvider = setupProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Listas', component: __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__["a" /* ListsPage */], icon: 'list-box' },
            // { title: 'Slides', component: SlidesPage, icon: 'browsers' },
            // { title: 'Cifras', component: CifrasPage, icon: 'musical-note' },
            // { title: 'Historico', component: HomePage, icon: 'bookmark' },
            { title: 'Favoritos', component: __WEBPACK_IMPORTED_MODULE_3__pages_favorites_favorites__["a" /* FavoritesPage */], icon: 'heart' },
            { title: 'Configurações', component: __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__["a" /* SettingsPage */], icon: 'settings' },
            { title: 'Contato', component: __WEBPACK_IMPORTED_MODULE_2__pages_contato_contato__["a" /* ContatoPage */], icon: 'call' },
            // { title: 'Ajuda', component: HomePage, icon: 'help-circle' },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_1__pages_sobre_sobre__["a" /* SobrePage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault(); 
            // this.statusBar.styleBlackTranslucent()
            _this.setupProvider.start();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#008ba3');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!--<ion-img style="width: 100%; height: 30%; object-fit: cover" src="../assets/imgs/capa.jpg"></ion-img>-->\n    <!--<img style="width: 100%; height: 25%; object-fit: cover" src="../assets/imgs/capa.jpg"/>-->\n    \n    <!--<ion-img style="width: 100%; height: 25%; object-fit: cover" src="../assets/imgs/capa.jpg"></ion-img>-->\n\n    <ion-list no-lines>\n      <!--<button class="menu" menuClose ion-item *ngFor="let p of pages; let i = index" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-start></ion-icon>\n        {{p.title}}\n      </button>-->\n      <button class="menu" menuClose ion-item (click)="openPage(pages[0])">\n        <ion-icon [name]="pages[0].icon" item-start></ion-icon>\n        {{pages[0].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[1])">\n        <ion-icon [name]="pages[1].icon" item-start></ion-icon>\n        {{pages[1].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[2])">\n        <ion-icon [name]="pages[2].icon" item-start></ion-icon>\n        {{pages[2].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[3])">\n        <ion-icon [name]="pages[3].icon" item-start></ion-icon>\n        {{pages[3].title}}\n      </button>\n      <ion-item-divider>\n        Outras\n      </ion-item-divider>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[4])">\n        <ion-icon [name]="pages[4].icon" item-start></ion-icon>\n        {{pages[4].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[5])">\n        <ion-icon [name]="pages[5].icon" item-start></ion-icon>\n        {{pages[5].title}}\n      </button>\n      <!--<button class="menu" menuClose ion-item (click)="openPage(pages[6])">\n        <ion-icon [name]="pages[6].icon" item-start></ion-icon>\n        {{pages[6].title}}\n      </button>-->\n      <!--<ion-list-divider>\n        Mais\n      </ion-list-divider>-->\n      <!--<button class="menu" menuClose ion-item (click)="openPage(pages[7])">\n        <ion-icon [name]="pages[7].icon" item-start></ion-icon>\n        {{pages[7].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[8])">\n        <ion-icon [name]="pages[8].icon" item-start></ion-icon>\n        {{pages[8].title}}\n      </button>\n      <button class="menu" menuClose ion-item (click)="openPage(pages[9])">\n        <ion-icon [name]="pages[9].icon" item-start></ion-icon>\n        {{pages[9].title}}\n      </button>-->\n    \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_setup_setup__["a" /* SetupProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
var SongsService = /** @class */ (function () {
    function SongsService() {
        // changeSongs() {
        this.songs = [{ "ID": 0, "numero": 1, "titulo": "A bíblia é para mim", "letra": ["A Bíblia é para mim, um livro sem igual,<br />A sã doutrina da Lei de Deus é viva e eternal.<br />", "<br />A Bíblia eu abrirei, a Bíblia eu lerei<br />E tudo quanto ela me disser de coração farei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 1, "numero": 2, "titulo": "Alegrei-me", "letra": ["Alegrei-me quando me disseram:<br />Vamos, vamos à casa do Senhor. (bis)<br />", "<br />O servo do Senhor foi à casa do Senhor<br />no dia do Senhor na hora do Senhor<br />Movido pela fé em nosso Salvador<br />Pra entoar um hino de louvor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 2, "numero": 3, "titulo": "A porta é uma só", "letra": ["A porta é uma só, porém dois lados há<br />Dentro e fora, você onde está?<br />", "<br />A porta é uma só. porém dois lados há<br />Deus está dentro e você onde está?<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 3, "numero": 4, "titulo": "A Tua Palavra", "letra": ["A Tua Palavra escondi<br />No meu coração escondi,<br />Para eu não pecar, contra Ti não pecar.<br />A Tua Palavra escondi.<br />", "<br />O meu coração já é Teu<br />Pois Tu me comprastes Senhor;<br />Só quero viver para ti só viver.<br />Viver no teu santo amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 4, "numero": 5, "titulo": "Porque Cristo vive", "letra": ["Porque Cristo vive, tenho esperança,<br />Porque Ele vive, eu tenho paz,<br />Não temerei mais nada do futuro.<br />E a vida vale apena, pois Ele vivo está.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 5, "numero": 6, "titulo": "Com Cristo no barco", "letra": ["Com Cristo no barco tudo vai bem<br />Vai muito bem, vai muito bem.<br />Com Cristo no barco tudo vai muito bem<br />E passa o temporal.<br />", "<br />Passa o temporal, passa o temporal<br />Com Cristo no barco tudo vai muito bem<br />E passa o temporal.<br />", "<br />Com Cristo na vida tudo vai muito bem<br />Vai muito bem, vai muito bem.<br />Com Cristo na vida tudo vai muito bem<br />E passa a tentação.<br />", "<br />Passa a tentação, passa a tentação,<br />Com Cristo na vida tudo vai muito bem<br />E passa a tentação.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 6, "numero": 7, "titulo": "Cuidado olhinho", "letra": ["Cuidado olhinho no que vê (2x)<br />O Salvador do céu está olhando pra você.<br />Cuidado olhinho no que vê.<br />", "<br />Cuidado boquinha no que fala (2x)<br />O Salvador do céu está olhando pra você.<br />Cuidado boquinha no que fala.<br />", "<br />Cuidado mãozinha no que pega (2x)<br />O Salvador do céu está olhando pra você.<br />Cuidado mãozinha no que pega.<br />", "<br />Cuidado pezinho onde pisa (2x)<br />O Salvador do céu está olhando pra você.<br />Cuidado pezinho onde pisa.<br />", "<br />Cuidado olho, boca, mão e pé (2x)<br />O Salvador do céu está olhando pra você.<br />Cuidado olho, boca, mão e pé.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 7, "numero": 8, "titulo": "Pare! Eu vou contar-lhe", "letra": ["Pare! Eu vou contar-lhe,<br />O que Cristo fez por mim (bis)<br />", "<br />Ele me salvou e me deu perdão<br />E agora vive no meu coração;<br />Pare! Eu vou contar-lhe<br />O que Cristo fez por mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 8, "numero": 9, "titulo": "Eu do meu Rei sou soldado", "letra": ["Eu do meu Rei sou soldado,<br />Soldado do Rei dos Reis.<br />Eu do meu Rei sou soldado,<br />Por isso canto toda vez.<br />Eu luto contra o pecado,<br />Assim como Davi lutou.<br />Nenhum mal eu vou temer<br />Cumprindo o meu dever,<br />Com Jesus, pois Ele é o Rei dos Reis.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 9, "numero": 10, "titulo": "Céu é um lugar maravilhoso", "letra": ["Céu é um lugar maravilhoso,<br />Cheio de glória e gozo!<br />Eu quero ver meu Salvador:<br />Céu é um lugar, lugar pra onde eu vou.<br />Céu é um lugar maravilhoso.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 10, "numero": 11, "titulo": "Com a armadura de meu Deus", "letra": ["Com a armadura de meu Deus o inimigo vou vencer.<br />Com a Bíblia e com a fé vou permanecer.<br />", "<br />Firme, sim! Firme, sim!<br />Firme vou ficar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 11, "numero": 12, "titulo": "Jesus ama as criancinhas", "letra": ["Jesus ama as criancinhas todas elas por igual;<br />Preta e branca e amarelas, todas preciosas são.<br />Jesus ama as criancinhas por igual.<br />", "<br />Jesus ama as criancinhas, do Brasil e do Japão.<br />Quer lourinha, quer de cor, Ele as chama com amor.<br />Jesus ama as criancinhas como são.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 12, "numero": 13, "titulo": "Alelu, alelu, alelu, aleluia", "letra": ["Alelu, alelu, alelu, aleluia.<br />Louvai a Deus. (bis)<br />", "<br />Louvai a Deus, aleluia! (3x)<br />Louvai a Deus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 13, "numero": 14, "titulo": "Mais vasto que o mundo", "letra": ["Mais vasto que o mundo, ainda mais alto que os céus.<br />Mais fundo que os mares, é o amor de meu Deus.<br />Eu sou tão fraquinho, tenho, porém, no Senhor<br />Santa alegria e prazer todo dia, no Seu amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão", "teste"], "comments": "", "notes": "", "favorit": false }, { "ID": 14, "numero": 15, "titulo": "Num berço de palha", "letra": ["Num berço de palha dormia Jesus,<br />O meigo menino que ali veio à luz.<br />Num rude presépio de noite em Belém,<br />Enquanto as estrelas brilhavam além.<br />", "<br />Acorda o menino o gado a mugir,<br />Mas Ele não chora, sim põe a sorrir.<br />Eu Te amo querido menino gentil,<br />Vem guarda também o meu berço infantil.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 15, "numero": 16, "titulo": "Pedro, Tiago e João", "letra": ["Pedro, Tiago e João no barquinho (3x)<br />No mar da Galiléia.<br />", "<br />Lançaram as redes, mas não pegaram peixes (3x)<br />No mar da Galiléia.<br />", "<br />Cristo, porém, mandou lançar as redes (3x)<br />No mar da Galiléia.<br />", "<br />Puxaram as redes cheias de peixinhos (3x)<br />No mar da Galiléia.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 16, "numero": 17, "titulo": "Quem fez as lindas estrelas?", "letra": ["Quem fez as lindas estrelas,<br />As lindas estrelas, as lindas estrelas?<br />Quem fez as lindas estrelas?<br />Deus nosso Pai.<br />", "<br />Quem fez o mar azul,<br />O mar azul, o mar azul?<br />Quem fez o mar azul?<br />Deus nosso Pai.<br />", "<br />Quem fez as aves que voam,<br />As aves que voam, as aves que voam?<br />Quem fez as aves que voam?<br />Deus nosso Pai.<br />", "<br />Quem fez você e eu,<br />Você e eu, você e eu?<br />Quem fez você e eu?<br />Deus nosso Pai.<br />", "<br />Quem fez as lindas estrelas,<br />O mar azul, as aves que voam?<br />Quem fez você e eu?<br />Deus nosso Pai.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 17, "numero": 18, "titulo": "Sobre a rocha", "letra": ["Sobre a rocha o sábio construiu,<br />A sua casa ele construiu.<br />Sobre a rocha o sábio construiu<br />E a chuva já caiu.<br />", "<br />A chuva caiu e a água subiu (3x)<br />E a casa na rocha ficou.<br />", "<br />Sobre a areia o néscio construiu<br />A sua casa ele construiu.<br />Sobre a areia o néscio construiu<br />E a chuva já caiu.<br />A chuva caiu e água subiu (3x)<br />E a casa na areia tombou.<br />", "<br />Construa sua vida no Senhor Jesus (3x)<br />E as bênçãos descerão.<br />As bênçãos descerão pela oração (3x)<br />Construa sua vida no Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 18, "numero": 19, "titulo": "Eu tenho um tesouro", "letra": ["Eu tenho um tesouro<br />Que é mais precioso que ouro.<br />Dele não me separo,<br />Minha Bíblia e eu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 19, "numero": 20, "titulo": "Meu barco é pequeno", "letra": ["Meu barco é pequeno, tão grande é o mar.<br />Jesus segura minha mão.<br />Ele é meu piloto e tudo vai bem<br />Na viagem pra Santa Sião. (Jerusalém) (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 20, "numero": 21, "titulo": "O que você faz", "letra": ["O que você faz, o que você diz,<br />Deus tudo escuta e tudo vê, vê, vê, vê<br />Sim, Deus tudo vê, escuta o Senhor,<br />Tudo o que faz ou diz você.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 21, "numero": 22, "titulo": "Três palavrinhas", "letra": ["Três palavrinhas só, eu aprendi de cor:<br />Deus é amor. Trá-lá, lá, lá, lá, lá, lá, lá, lá.<br />", "<br />Duas palavrinhas só, eu aprendi de cor:<br />Jesus chorou. Trá-lá, lá, lá, lá, lá, lá, lá, lá.<br />", "<br />Uma palavrinha só, eu aprendi de cor:<br />Ressuscitou. Trá-lá, lá, lá, lá, lá, lá, lá, lá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 22, "numero": 23, "titulo": "A Bíblia é qual martelo", "letra": ["A Bíblia é qual martelo para as rochas despedaçar;<br />Aos passos meus é lâmpada, é a luz que me vai guiar.<br />É espada de dois gumes, é um espelho pra eu me ver.<br />A Santa Bíblia assim será pra mim se eu a ler.<br />", "<br />A Bíblia é qual semente que nasce no coração<br />Qual leite e carne nutrirá aos que aceitam a salvação.<br />Como água sim me limpo, faz o mal desaparecer.<br />A Santa Bíblia assim será pra mim se eu a ler.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 23, "numero": 24, "titulo": "De Moisés ouvimos", "letra": ["De Moisés ouvimos na cestinha só<br />E da paciência do piedoso Jó.<br />Jonas na baleia para Deus voltou<br />E Noé na arca pela fé entrou.<br />", "<br />Para o céu vou caminhando onde todo eu verei;<br />Meus pecados perdoados, lá eu entrarei.<br />Ó que grande alegria quando salvos se encontrar<br />Com meu Salvador Amado sempre estar.<br />", "<br />Grande força tinha o herói Sansão<br />E o profeta Elias, firme em oração;<br />Aos leões na cova Daniel não temeu,<br />E Davi com a funda Golias venceu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 24, "numero": 25, "titulo": "Desanimados? Não, não, não", "letra": ["Desanimados? Não, não, não! (2x)<br />Dores, tristezas podem nos vir<br />Em Cristo alegre vamos sorrir;<br />Desanimados? (assobiar) Não, não, não!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 25, "numero": 26, "titulo": "Posso ser um missionariozinho", "letra": ["Posso ser um missionariozinho<br />E falar de Cristo aos companheirinhos.<br />Posso trabalhar na minha terra,<br />Manda-me, pois Senhor.<br />", "<br />Não preciso atravessar os mares<br />Para dar aos outros novas salutares<br />Posso fornecer sustento aos outros<br />Que meu Senhor mandou.<br />", "<br />Hei de orar e trabalhar fielmente<br />Caso Deus me chame seguirei contente,<br />Para os campos que vão branquejando<br />Dispõe de mim, Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 26, "numero": 27, "titulo": "Cristo ama as criancinhas", "letra": ["Cristo ama as criancinhas como eu, eu, eu; (2x)<br />Crianças como eu, levam para o céu,<br />Cristo ama as criancinhas como eu, eu, eu.<br />", "<br />Cristo ama os grandes como tu, tu, tu; (2x)<br />Grandes como for, alcançam o Seu amor,<br />Cristo ama os grandes como tu, tu, tu."], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 27, "numero": 28, "titulo": "Eu na Bíblia creio", "letra": ["Eu na Bíblia creio (2x)<br />Creio que de Deus é a revelação.<br />", "<br />Em Jesus eu creio (2x)<br />Creio que Ele é o filho do supremo Deus.<br />", "<br />Cristo deu a vida (2x)<br />Pelos pecadores, sim, morreu por mim.<br />", "<br />Creio em Cristo vivo (2x)<br />Ressurgiu dos mortos, vive para mim.<br />", "<br />Creio que Ele volta (2x)<br />Volta nesses ares para me buscar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 28, "numero": 29, "titulo": "Meu coração era sujo", "letra": ["Meu coração era sujo, mas Cristo aqui já entrou;<br />Com Seu precioso sangue tão alvo assim o tornou.<br />E diz em Sua Palavra que em ruas de ouro andarei;<br />Ó dia feliz quando eu cri e a vida eterna eu ganhei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 29, "numero": 30, "titulo": "Fiel, ser fiel", "letra": ["Fiel, ser fiel (2x)<br />Como Daniel fiel devemos ser. (2x)<br />", "<br />Ele foi fiel, fiel de coração,<br />Por isso Deus livrou da boca dos leões. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 30, "numero": 31, "titulo": "Cristo tem amor por mim", "letra": ["Cristo tem amor por mim, com certeza creio assim.<br />Por amor de mim morreu, vivo está por mim no céu.<br />", "<br />Ama os meninos, ama as meninas<br />Ama os meninos Jesus o Salvador.<br />", "<br />Sim, Jesus me tem amor, pois se fez meu Salvador.<br />Hoje ainda tem prazer, de criança receber.<br />", "<br />Pra gozar Seu rico amor, hei de amar meu Salvador.<br />E desejo anunciar Seu amor tão singular.<br />", "<br />Meu Senhor Jesus está ao meu lado e levará<br />Afinal ao céu de luz o que resgatou na cruz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 31, "numero": 32, "titulo": "Minha pequena luz", "letra": ["Minha pequena luz eu vou fazer brilhar (2x)<br />Onde quer, onde quer que eu andar.<br />", "<br />Hei de fazer brilhar mesmo onde moro aqui (2x)<br />Onde quer, onde quer que eu passar.<br />", "<br />Se eu esconder a luz não poderá brilhar (2x)<br />Onde quer, onde quer que eu passar.<br />", "<br />Pondo bem alto a luz eu a farei brilhar (2x)<br />Onde quer, onde quer que eu me achar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 32, "numero": 33, "titulo": "Eu vou crescer", "letra": ["Eu vou crescer, eu vou crescer,<br />Crescer, crescer, crescer,<br />Crescer pra meu Jesus;<br />E agora que estou deste tamanho assim,<br />Eu vou trabalhar pra meu Jesus sem fim.<br />", "<br />Tra-lá, lá, lá, tra-lá, lá, lá,<br />", "<br />Crescer, crescer, crescer,<br />Crescer pra meu Jesus;<br />E quando eu estiver deste tamanho assim,<br />Eu vou trabalhar pra meu Jesus sem fim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 33, "numero": 34, "titulo": "Se és salvo e tens certeza", "letra": ["Se és salvo e tens certeza<br />Diz amém, amém. (Bis)<br />", "<br />Se és salvo e tens certeza<br />Sua vida é uma beleza.<br />Se és salvo e tens certeza<br />Diz amém, amém. (Bate palmas; bate o pé; faz os três)<br />", "<br />Se és salvo e tens certeza bate palmas... (bis)<br />", "<br />Se és salvo e tens certeza bate o pé... (bis)<br />", "<br />Se és salvo e tens certeza faz os três... (bis)<br />", "<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 34, "numero": 35, "titulo": "Leia a Bíblia e sempre orar", "letra": ["Leia a Bíblia e sempre orar,<br />Sempre orar, sempre orar.<br />Leia a Bíblia e sempre orar,<br />Se quiser crescer. (3x)<br />Leia a Bíblia e sempre orar<br />Se quiser crescer.<br />", "<br />Quem não ora e a Bíblia não lê,<br />A Bíblia não lê, a Bíblia não lê,<br />Quem não ora e a Bíblia não lê<br />Diminuirá. (3x)<br />Quem não ora e a Bíblia não lê<br />Diminuirá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 35, "numero": 36, "titulo": "Eu tenho paz, paz, paz, paz", "letra": ["Eu tenho paz, paz, paz, paz<br />No meu coração. (3x)<br />Eu tenho paz, paz, paz, paz, no meu coração;<br />Hoje no meu coração.<br />", "<br />Eu tenho gozo, gozo<br />No meu coração (3x)<br />Eu tenho gozo, gozo no meu coração<br />Hoje no meu coração.<br />", "<br />Eu tenho alegria, alegria<br />No meu coração (3x)<br />Eu tenho alegria, alegria no meu coração<br />Hoje no meu coração.<br />", "<br />Eu tenho gozo, paz e alegria<br />No meu coração<br />Eu tenho gozo, paz, alegria no meu coração<br />Hoje no meu coração<br />", "<br />Eu tenho maravilhoso amor de Deus<br />No meu coração (3x)<br />Eu tenho maravilhoso amor de Deus<br />No meu coração. Hoje no meu coração.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 36, "numero": 37, "titulo": "Grande e largo, grande e largo", "letra": ["Grande e largo, grande e largo,<br />O amor de Jesus é grande e largo. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 37, "numero": 38, "titulo": "Dê a sua vida", "letra": ["Dê a sua vida inteiramente a Jesus;<br />Ele é o caminho, a verdade e a luz.<br />Se você não quiser, não sabes o que vai perder,<br />Eu disse: Dê a sua vida inteiramente a Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 38, "numero": 39, "titulo": "Estou alegre, alegre, mui alegre", "letra": ["Estou alegre, alegre, mui alegre,<br />Estou alegre, alegre eu estou;<br />Estou alegre, alegre, mui alegre,<br />Estou alegre porque Cristo me salvou.<br />", "<br />Vou para o céu e para o céu eu vou. (3x)<br />Vou para o céu porque Cristo me salvou.<br />Não sou do mundo, do mundo eu não sou (3x)<br />Não sou do mundo porque Cristo me salvou.<br />", "<br />Por isso eu canto, eu canto aleluia,<br />Por isso eu canto, eu canto glória a Deus.<br />Por isso eu canto, eu canto aleluia,<br />Por isso eu canto porque Cristo me salvou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 39, "numero": 40, "titulo": "Achei alegria", "letra": ["Achei alegria, achei paz com Deus<br />Encontrei gozo e graça porque Cristo é meu.<br />Achei a vitória em Jesus Cristo, Salvador;<br />Achei satisfação sem fim, Cristo vivendo em mim<br />Com o Seu grande amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 40, "numero": 41, "titulo": "Acordar bem cedo", "letra": ["Acordar bem cedo pra buscar poder,<br />Ao romper do dia todo mal vencer.<br />", "<br />Sem este poder, não, não vai;<br />Os dias são de trevas<br />Sem poder o crente cai<br />", "<br />O poder das trevas vem de todo lado<br />Procurando os crentes que são descuidados.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 41, "numero": 42, "titulo": "Agradeço ao meu Salvador", "letra": ["Agradeço ao meu Salvador de todo o meu coração,<br />Por ter me tirado do mundo,<br />Das trevas e da perdição.<br />Antes eu era perdido, vagava sem ter direção.<br />Hoje eu vivo contente porque sou um crente<br />E achei salvação.<br />Hoje eu vivo contente porque sou um crente<br />E achei salvação em Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 42, "numero": 43, "titulo": "Alegria do Senhor", "letra": ["Alegria do Senhor a nossa força é (3x)<br />Alegria sem medida Ele dá.<br />", "<br />Se tu tens alegria poderás cantar (3x)<br />Alegria sem medida Ele dá.<br />", "<br />Se tu tens alegria poderás sorrir (3x)<br />Alegria sem medida Ele dá.<br />", "<br />Se tu tens alegria poderás dizer (3x)<br />(fala) Alegria do Senhor a nossa força é<br />Alegria sem medida Ele dá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 43, "numero": 44, "titulo": "Além do céu azul", "letra": ["Além do céu azul foi Jesus preparar,<br />Um lar pra dá a quem a vitória alcançar,<br />Anelo conseguir a vida do porvir<br />Com fé no meu Senhor Jesus.<br />", "<br />Bem sei que eu, de mim, nada tenho pra dar;<br />Mas sei que meu Jesus já me veio salvar,<br />Agora quero eu ter fé no coração<br />Até Seu rosto ver além.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 44, "numero": 45, "titulo": "Alguns pensam", "letra": ["Alguns pensam e acham, duvidam e esperam,<br />Mas sei que eu salvo sou.<br />Alguns temem que nunca irão para o céu,<br />Mas sei que eu salvo sou.<br />Sim, sei que sou salvo, que Cristo é meu<br />E tenho a certeza que vou para o céu.<br />Que gozo e paz que tenho em Cristo<br />Sim, sei que eu salvo sou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 45, "numero": 46, "titulo": "A minha maior alegria", "letra": ["A minha maior alegria<br />É ter conhecido a Jesus. (Bis)<br />", "<br />Oh! que maravilha, que paz eu senti,<br />Foi um grande dia de gozo pra mim.<br />", "<br />Oh! que maravilha, que paz eu senti,<br />No dia em que me converti.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 46, "numero": 47, "titulo": "Ando com Cristo", "letra": ["Ando com Cristo,<br />Ando todo dia, ando no caminho;<br />Ando com Cristo, ando com Cristo Jesus.<br />", "<br />Ando com alegria, ando na tristeza,<br />Ando todo dia, ando no caminho.<br />", "<br />Ando com alegria, ando na tristeza,<br />Ando com Cristo Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 47, "numero": 48, "titulo": "Ao orarmos Senhor", "letra": ["Ao orarmos, Senhor<br />Vem encher-nos com Teu amor,<br />Para o mundo agitado esquecer,<br />Cada dia Tua vida viver.<br />Nossas vidas vêm, pois, transformar<br />Refrigério pra alma nos dar<br />E agora com outros irmãos,<br />Nós unirmos a Ti em oração.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 48, "numero": 49, "titulo": "Aquele que habita", "letra": ["Aquele que habita no esconderijo do Altíssimo,<br />A sombra do Senhor Onipotente descansará. (bis)<br />Direi do Senhor, Ele é o meu Deus! (3x)<br />Amém! (3x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 49, "numero": 50, "titulo": "Buscai primeiro", "letra": ["Buscai primeiro o reino de Deus e a Sua justiça<br />E todas estas coisas vos serão acrescentadas,<br />A-le-aleluia!<br />Aleluia! (3x) A-le-aleluia!<br />", "<br />Nem só de pão todo homem viverá,<br />mas de toda palavra que procede da boca de Deus,<br />A-le-aleluia!<br />Aleluia! (3x) A-le-aleluia!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 50, "numero": 51, "titulo": "Cada dia com Cristo", "letra": ["Cada dia com Cristo eu tenho paz no coração,<br />Cada dia com Cristo Ele dá consolação.<br />Cristo salva e guarda e para Ele eu viverei,<br />Cada dia com Cristo mais e mais feliz serei!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 51, "numero": 52, "titulo": "Cada dia me dirige", "letra": ["Cada dia me dirige, cada dia me protege,<br />Cada dia sinto Seu amor por mim,<br />Cada dia há coisa nova, cada dia vejo a prova<br />Do poder, do grande amor de meu Senhor e Rei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 52, "numero": 53, "titulo": "Cada dia sou feliz", "letra": ["Cada dia sou feliz, andando com Jesus.<br />Cada dia sou feliz, pois, Ele me conduz.<br />Cuidará de mim eu sei, Jesus meu Rei<br />Cada dia sou feliz, andando com Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 53, "numero": 54, "titulo": "Cantai ao Senhor", "letra": ["Cantai ao Senhor um cântico novo. (3x)<br />Cantai ao Senhor, cantai ao Senhor.<br />", "<br />O que ele fez, Ele fez maravilhas. (3x)<br />Cantai ao Senhor, cantai ao Senhor.<br />", "<br />Orai sem cessar porque Ele ouve. (3x)<br />Cantai ao Senhor, cantai ao Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 54, "numero": 55, "titulo": "Cantarei das bênçãos", "letra": ["Cantarei das bênçãos do Senhor pra sempre<br />Cantarei, cantarei.<br />Cantarei das bênçãos do Senhor pra sempre<br />Cantarei das bênçãos do Senhor.<br />De geração em geração,<br />Com minha voz farei saber<br />Do Seu amor e salvação<br />E todas as Suas maravilhas.<br />Cantarei das bênçãos do Senhor pra sempre<br />Cantarei das bênçãos do Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 55, "numero": 56, "titulo": "Eu tenho um amigo", "letra": ["Eu tenho um amigo que me ama, me ama, me ama.<br />Eu tenho um amigo que me ama, seu nome é Jesus.<br />Jesus! Jesus! Seu nome é Jesus! (2x)<br />", "<br />Eu tenho um amigo que me guia, me guia, me guia.<br />Eu tenho um amigo que me guia, seu nome é Jesus.<br />Jesus! Jesus! Seu nome é Jesus! (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 56, "numero": 57, "titulo": "Meu Jesus me ampara", "letra": ["Meu Jesus me ampara dia a dia<br />Pois comigo sempre está.<br />Nos perigos sempre Ele guia<br />E sossego e paz me dá.<br />Sim, Jesus me ampara até a morte<br />Quando o mal me vier cercar.<br />Ele é a minha força e esperança,<br />Só com Ele eu quero andar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 57, "numero": 58, "titulo": "Damos graças", "letra": ["Damos graças ao Senhor, damos graças,<br />Damos graças por Seu amor. (bis)<br />", "<br />Pela manhã as aves cantam<br />Ações de graças ao nosso Criador,<br />", "<br />E tu amigo porque não cantas,<br />Ações de graças ao nosso Salvador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 58, "numero": 59, "titulo": "Desde o dia", "letra": ["Desde o dia em que aceitei Jesus,<br />A minha vida se transformou. (bis)<br />", "<br />Agora sou feliz, agora vivo bem,<br />Jesus salvou a mim e salva a ti também,<br />", "<br />Agora sou feliz, agora vivo bem,<br />Com Jesus e mais ninguém. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 59, "numero": 60, "titulo": "A graça de Jesus", "letra": ["A graça de Jesus jamais me faltará,<br />Jamais me faltará, jamais me faltará.<br />Eu canto noite e dia, dia e noite sem parar<br />Com muita alegria sem nunca me cansar.<br />A graça de Jesus jamais me faltará,<br />Jamais me faltará no coração.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 60, "numero": 61, "titulo": "Deus é tão bom", "letra": ["Deus é tão bom, aleluia! (bis)<br />Deus é tão bom, é tão bom pra mim.<br />", "<br />Cristo é real, aleluia! (bis)<br />Cristo é real, é real pra mim.<br />", "<br />Ele voltará, aleluia! (bis)<br />Ele voltará, voltará pra mim.<br />", "<br />Deus é tão bom, aleluia! Cristo é real, aleluia!<br />Ele voltará, voltará pra mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 61, "numero": 62, "titulo": "Ebenézer", "letra": ["Ebenézer o Senhor está conosco<br />Ebenézer o Senhor conosco está. (bis)<br />", "<br />Maranata, maranata, maranata, maranata,<br />Maranata, ora vem Senhor Jesus. (Bis)<br />", "<br />Aleluia o Senhor está conosco<br />Glória a Deus, o Senhor conosco está. (bis)<br />", "<br />Aleluia, aleluia, aleluia, aleluia,<br />Aleluia, ora vem Senhor Jesus (bis).<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 62, "numero": 63, "titulo": "Ele pode", "letra": ["Ele pode, Ele pode, eu sei que Ele pode,<br />Eu sei que meu Jesus pode me guardar.<br />", "<br />Ele pode, Ele pode, eu sei que Ele pode,<br />Eu sei por que já provei Seu amor sem par.<br />", "<br />Ele deu visão aos cegos, aos coxos fez andar,<br />Aos mortos deu-lhes vida e morreu pra me salvar.<br />", "<br />Ele pode, Ele pode, eu sei que Ele pode,<br />Eu sei que meu Jesus pode me guardar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 63, "numero": 64, "titulo": "Então se verá", "letra": ["Então se verá o Filho do Homem,<br />Vindo sobre as nuvens com poder e glória, (bis)<br />", "<br />Porque assim como relâmpago<br />Que sai do Oriente e se mostra no ocidente,<br />Assim há de ser a vinda do Filho do Homem. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 64, "numero": 65, "titulo": "Eis-me aqui", "letra": ["Eis-me aqui Senhor Jesus (bis)<br />Enche-me do Teu amor e usa-me.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 65, "numero": 66, "titulo": "É só Jesus", "letra": ["É só Jesus que salva o pecador,<br />Que dá-lhe paz e luz e tira seu temor.<br />É só Jesus o mesmo que morreu<br />Que tira as nossas culpas<br />E nos conduz ao céu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 66, "numero": 67, "titulo": "Estou alegre, estou alegre", "letra": ["Estou alegre, estou alegre,<br />Estou alegre porque Cristo me salvou. (2x)<br />", "<br />Meu, meu, meu, Jesus é meu.<br />Meu quando estou fraco,<br />Meu quando estou forte.<br />Meu, meu, meu, Jesus é meu, sempre meu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 67, "numero": 68, "titulo": "Estou alegre e lhe direi por que", "letra": ["Estou alegre e lhe direi por que<br />Sei que Jesus Cristo me salvou;<br />Da sua graça sempre cantarei<br />Sei que Jesus Cristo me salvou<br />A tremenda carga do meu coração<br />Cristo a mudou em doce comunhão<br />E agora estou alegre e lhe direi por que,<br />Sei que Jesus Cristo me salvou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 68, "numero": 69, "titulo": "Estou alegre porque sou da família de Deus", "letra": ["Estou alegre que sou da família de Deus.<br />Fui lavado na fonte, purificado.<br />Herdeiro com Cristo na jornada aqui<br />Porque sou da família, da família de Deus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 69, "numero": 70, "titulo": "Estou no caminho", "letra": ["Estou no caminho ao lar da glória (bis)<br />Estou no caminho (3x) (palmas 3x)<br />Ao lar da glória.<br />", "<br />Jesus merece nosso louvor (bis)<br />Jesus merece (3x) (palmas 3x)<br />Nosso louvor.<br />", "<br />Verei Jesus quando eu chegar (bis)<br />Verei Jesus (3x) (palmas 3x)<br />Quando eu chegar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 70, "numero": 71, "titulo": "Eu me levantarei", "letra": ["Eu me levantarei, eu me levantarei<br />Eu me levantarei na primeira ressurreição. (bis)<br />", "<br />Eu aqui não fico, eu quero ir ao céu<br />Eu me levantarei na primeira ressurreição. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 71, "numero": 72, "titulo": "Eu louvarei", "letra": ["Eu louvarei, eu louvarei<br />Eu louvarei ao meu Senhor. (Bis)<br />", "<br />João viu o número dos redimidos<br />E todos louvavam ao Senhor.<br />Uns cantavam, outros oravam,<br />E todos louvavam ao Senhor.<br />", "<br />Eu louvarei, eu louvarei<br />Eu louvarei ao meu Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 72, "numero": 73, "titulo": "Estou seguindo a Jesus Cristo", "letra": ["Estou seguindo a Jesus Cristo,<br />Deste caminho, eu não desisto;<br />Estou seguindo a Jesus Cristo,<br />Atrás não volto, não volto mais.<br />", "<br />Atrás o mundo, Jesus na frente<br />Jesus o guia Onipotente;<br />Atrás o mundo, Jesus na frente<br />Atrás não volto, não volto mais.<br />", "<br />Se me deixarem meus pais e amigos.<br />Se me cercarem grandes perigos.<br />Se me deixarem meus pais e amigos.<br />Atrás não volto, não volto mais.<br />", "<br />Depois da luta, ganho a coroa<br />A recompensa é certa e boa.<br />Depois da luta, ganho a coroa.<br />Atrás não volto, não volto mais.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 73, "numero": 74, "titulo": "Eu quero ser", "letra": ["Eu quero ser Senhor amado,<br />Como um vaso nas mãos do oleiro;<br />Quebra a minha vida e faze-a de novo.<br />Eu quero ser, eu quero ser, um vaso novo.<br />Como tu queres Senhor amado,<br />Eu o vaso e Tu o oleiro.<br />Quebra a minha vida e faze-a de novo.<br />Eu quero ser, eu quero ser, um vaso novo.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 74, "numero": 75, "titulo": "Eu nunca estou sozinho", "letra": ["Eu nunca estou sozinho, agora sou feliz,<br />Com Cristo no meu coração.<br />Ele é meu grande amigo, não temo o perigo,<br />Com Cristo no meu coração.<br />", "<br />Agora eu sou feliz, agora vou cantar,<br />Pois contente estou (com quem)<br />Com meu Salvador (amém)<br />Feliz agora então eu viverei.<br />", "<br />Jesus há muito tempo morreu em uma cruz,<br />Morreu só para me salvar.<br />Seu sangue derramou lavando os meus pecados<br />E dessa forma agora salvo sou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 75, "numero": 76, "titulo": "Eu só confio no Senhor", "letra": ["Eu só confio no Senhor para me guiar.<br />Eu só confio no Senhor, sigo a cantar.<br />Se o sol chegar a escurecer e o céu nublar,<br />Eu só confio no Senhor que não vai falhar.<br />", "<br />Posso confiar, posso confiar,<br />Que um lar no céu Cristo vai me dar.<br />Se o sol chegar a escurecer e o céu nublar,<br />Eu só confio no Senhor que não vai falhar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 76, "numero": 77, "titulo": "Guiado pela mão de Cristo", "letra": ["Guiado pela mão de Cristo eu vou (3x)<br />Em todo lugar.<br />", "<br />Se Jesus disser: Amigo, deixa tudo e vem Comigo.<br />Minha mão darei a Cristo e com Ele eu vou. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 77, "numero": 78, "titulo": "Eu sou a Videira verdadeira", "letra": ["Eu sou a Videira verdadeira,<br />E o meu Pai é o Agricultor.<br />Como o Pai me amou, eu também vos amei.<br />Permanecei no Meu amor. (bis)<br />", "<br />O meu mandamento é este:<br />Que vos ameis uns aos outros;<br />O meu mandamento é este:<br />Que vos ameis uns aos outros<br />Assim como Eu vos amei.<br />Eu sou a Videira verdadeira...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 78, "numero": 79, "titulo": "Há momentos", "letra": ["Há momentos em que as palavras não resolvem,<br />Mas o gesto de Jesus na cruz<br />Demonstrou amor por nós. (Bis)<br />", "<br />Foi no Calvário, que Ele sem falar,<br />Mostrou ao mundo inteiro o que é amar. (bis)<br />", "<br />Aqui no mundo as desilusões são tantas,<br />Mas existe uma esperança:<br />É que Cristo vai voltar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 79, "numero": 80, "titulo": "Maravilhoso é", "letra": ["Maravilhoso é maravilhoso é,<br />Maravilhoso é Cristo Senhor.<br />Ele é o grande Rei, Seu nome louvarei.<br />Maravilhoso é meu Salvador.<br />", "<br />Grande Pastor é a Rocha eterna,<br />Onipotente Deus.<br />Vinde adorá-Lo, servir e amá-Lo.<br />Maravilhoso é meu Salvador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 80, "numero": 81, "titulo": "Ele é realidade", "letra": ["Ele é realidade, Ele é realidade,<br />Ele não é sonho, Ele é real. (bis)<br />", "<br />Ele é o amor, a paz, a alegria e a vitória;<br />Estou falando de Jesus Cristo. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 81, "numero": 82, "titulo": "Eu vou ali buscando", "letra": ["Eu vou ali buscando e volto aqui trazendo<br />Almas preciosas pra Jesus meu Salvador.<br />", "<br />Como é bom de ser um crente,<br />Como é bom, amém. (bis)<br />", "<br />Como é bom segunda, terça, quarta,<br />Quinta, sexta, sábado, domingo inteiro,<br />Como é bom, amém.<br />", "<br />Como é bom ler a Bíblia,<br />Como é bom, amém. (bis)<br />", "<br />Como é bom andar com Cristo,<br />Como é bom, amém. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 82, "numero": 83, "titulo": "Hoje guia-me Senhor", "letra": ["Hoje guia-me Senhor, ensina-me por Ti falar.<br />Amigos meus perdidos são, não podem Te achar.<br />Poucos querem se importar e poucos querem orar.<br />Vem encher meu coração e usa-me Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 83, "numero": 84, "titulo": "Adoração (C.C.#08)", "letra": ["A Deus, supremo Benfeitor,<br />Vós anjos e homens dai louvor;<br />A Deus o Filho, a Deus o Pai<br />A Deus Espírito, glória dai.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 84, "numero": 85, "titulo": "Eu vou lhe falar", "letra": ["Eu vou lhe falar porque vivo feliz,<br />Eu vou lhe falar porque vivo a cantar.<br />Eu vou lhe contar de quem me conduz,<br />Porque, porque, porque, porque?<br />Vivo em Jesus.<br />", "<br />Sempre comigo por onde eu andar,<br />Sempre me ensina a viver e amar.<br />É Ele quem diz e quem me conduz,<br />Porque, porque, porque, por que?<br />Vivo em Jesus.<br />", "<br />Eu acho que você ainda não parou pra pensar<br />Porque você tem corpo, braços e pernas pra andar.<br />Eu acho que ainda não reparou,<br />Que você pode ver, ouvir e (Falou!)<br />", "<br />Eu acho que você devia agradecer.<br />a Deus por ter lhe dado corpo bom pra viver.<br />Foi Ele quem lhe fez e ensinou a andar<br />E agora em troca disso Ele só quer lhe salvar.<br />", "<br />Entregue-se a Ele sem nenhum temor,<br />Viva com Ele e viva de amor.<br />É ele quem diz e quem me conduz,<br />Porque, porque, porque, por quê?<br />Vivo em Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 85, "numero": 86, "titulo": "Meu coração transborda de amor", "letra": ["Meu coração transborda de amor,<br />Porque Jesus é meu Senhor.<br />", "<br />Minha alma está repleta de paz,<br />Porque Jesus me satisfaz.<br />", "<br />Eu digo: Aleluia! (5x)<br />Eu digo porque.<br />", "<br />Eu digo: Aleluia! (5x)<br />Eu digo porque.<br />", "<br />Minha alma... Meu coração...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 86, "numero": 87, "titulo": "Nossa esperança é Sua vinda", "letra": ["Nossa esperança é Sua vinda.<br />O Rei dos Reis vem nos buscar;<br />Nós aguardamos Jesus ainda<br />Para a vitória nos guiar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 87, "numero": 88, "titulo": "Eis o Cordeiro de Deus", "letra": ["Eis o Cordeiro de Deus (bis)<br />Ele somente pode salvar-nos.<br />Eis o Cordeiro de Deus.<br />", "<br />Para Jesus olhai (bis)<br />Ele somente pode salvar-nos.<br />Para Jesus olhai.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 88, "numero": 89, "titulo": "Estamos muito alegres", "letra": ["Estamos muito alegres, Jesus está aqui,<br />Sentimos muito amor, sentimos união.<br />", "<br />Sentimos que Jesus está aqui em nosso meio.<br />Por isso temos paz no coração. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 89, "numero": 90, "titulo": "O amor de Jesus", "letra": ["O amor de Jesus é maravilhoso (3x)<br />Senhor! Grande amor.<br />Alto é intransponível,<br />Profundo também, mas acessível.<br />A sua extensão é incomparável.<br />Senhor! Grande amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 90, "numero": 91, "titulo": "Oh, eu amo a Cristo", "letra": ["Oh, eu amo a Cristo (3x)<br />Porque Ele morreu por mim.<br />", "<br />(Nome) ama a Cristo?<br />Oh, sim, amo a Cristo.<br />Porque ama a Cristo?<br />Porque Ele morreu por mim.<br />(Todos) Aleluia!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 91, "numero": 92, "titulo": "Oh, oh, oh, oh", "letra": ["Oh, oh, oh, oh! nunca esquecerei (3x)<br />Eu nunca esquecerei o que Ele fez por mim.<br />", "<br />Livrou-me da morte, do mundo e do mal<br />Nunca esquecerei (3 vezes)<br />", "<br />Eu nunca esquecerei o que Ele fez por mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 92, "numero": 93, "titulo": "Que a beleza de Cristo", "letra": ["Que a beleza de Cristo se veja em mim,<br />Toda a Sua pureza e amor sem fim.<br />Oh, que em todo meu ser posso Te conhecer,<br />Que a beleza de Cristo se veja em mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 93, "numero": 94, "titulo": "O importante é amar", "letra": ["O importante é amar<br />Como Cristo amou e ensinou<br />O verdadeiro amor. (Bis)<br />", "<br />Vou te amar (4x)<br />Vou te amar como Cristo amou.<br />", "<br />Vou te amar (4x)<br />Vou te amar como Cristo amou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 94, "numero": 95, "titulo": "Pai eu Te adoro", "letra": ["Pai, eu Te adoro, minha vida Te entrego,<br />Como eu Te amo.<br />", "<br />Jesus, eu Te adoro, minha vida Te entrego,<br />Como eu Te amo.<br />", "<br />Espírito, eu Te adoro, minha vida Te entrego<br />Como eu Te amo.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 95, "numero": 96, "titulo": "Pastos bem verdejantes", "letra": ["Pastos bem verdejantes, águas puras me dá,<br />Tudo me supre não me faltará.<br />Sou cordeiro de Cristo,<br />Meu Divino Pastor, seguro estou.<br />", "<br />Água sim, pelos vales;<br />Pastos sim, pelos montes.<br />Meu Pastor (meu pastor)<br />Sim tudo suprirá.<br />", "<br />Seguirei, pelos vales;<br />Seguirei, pelos montes.<br />Seguirei, seguirei meu Bom Pastor.<br />Pastos bem verdejantes...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 96, "numero": 97, "titulo": "Santo Espírito", "letra": ["Santo Espírito enche a minha vida<br />Pois por Cristo eu quero brilhar.<br />", "<br />Santo Espírito enche a minha vida<br />Usa-me ás almas a ganhar.<br />", "<br />Aleluia, aleluia, aleluia,<br />Dou ao Cristo Rei.<br />", "<br />Aleluia, aleluia, aleluia,<br />Dou ao Rei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 97, "numero": 98, "titulo": "O caminho é Jesus", "letra": ["O caminho é Jesus, a verdade é Jesus,<br />Minha vida é Jesus, Ele é meu, meu, meu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 98, "numero": 99, "titulo": "Quem traz almas", "letra": ["Quem traz almas pra Cristo<br />Como o sol brilhará (3x)<br />", "<br />Quem traz almas pra Cristo como o sol brilhará.<br />E Deus o recompensará.<br />", "<br />Quem dá com alegria como o sol brilhará...<br />", "<br />Quem ora sempre, sempre, como o sol brilhará...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 99, "numero": 100, "titulo": "Se confessarmos", "letra": ["Se confessarmos os nossos pecados,<br />Ele é fiel e justo.<br />Para nos perdoar os pecados,<br />E nos purificar de toda injustiça.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 100, "numero": 101, "titulo": "Tens problemas", "letra": ["Tens problemas, podes orar.<br />Deus sabe, quer ajudar.<br />Não sejas duvidoso, pois Deus é poderoso.<br />Porque te preocupas tanto, podes orar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 101, "numero": 102, "titulo": "Deus está aqui", "letra": ["Deus está aqui, aleluia!<br />Tão certo como o ar que eu respiro,<br />Tão certo como o amanhã que se levanta,<br />Tão certo como eu falo e tu podes me ouvir.<br />", "<br />Jesus está aqui, aleluia...<br />", "<br />O espírito está aqui, aleluia...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 102, "numero": 103, "titulo": "Quero muitas almas", "letra": ["Quero muitas almas a Cristo levar<br />Para aquele lindo, lindo lar.<br />Quero vê-las todas lá entrar,<br />Naquele lindo, lindo lar.<br />", "<br />Eu vou, eu vou, morar, morar,<br />Naquele lar eu vou.<br />Eu vou, eu vou, cantar, cantar,<br />Naquele lindo lar.<br />", "<br />Quero cada dia com Cristo andar<br />Para aquele lindo, lindo lar.<br />É tão glorioso caminhar<br />Para aquele lindo, lindo lar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 103, "numero": 104, "titulo": "Seu nome é maravilhoso", "letra": ["Seu nome é maravilhoso (3x)<br />Pai da eternidade, Príncipe da paz.<br />", "<br />Seu nome é conselheiro (3x)<br />Pai da eternidade, Príncipe da paz.<br />", "<br />Seu nome é Deus Forte (3x)<br />Pai da eternidade, Príncipe da paz.<br />", "<br />Seu nome é maravilhoso, Seu nome é conselheiro<br />Seu nome é Deus Forte, Pai da eternidade<br />Príncipe da paz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 104, "numero": 105, "titulo": "Tenho paz como o rio", "letra": ["Tenho paz como o rio, (3x)<br />No coração. (bis)<br />", "<br />Tenho gozo como a fonte, (3x)<br />A transbordar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 105, "numero": 106, "titulo": "Satisfação é ter a Cristo", "letra": ["Satisfação é ter a Cristo,<br />não há melhor prazer já visto.<br />Sou de Jesus e agora eu sinto,<br />satisfação sem fim.<br />", "<br />Satisfação é nova vida,<br />Eu com Jesus em alegria,<br />Sempre cantando a melodia,<br />satisfação sem fim.<br />", "<br />Sim, paz real, sim, gozo na aflição,<br />Achei o segredo, é Cristo no coração.<br />", "<br />Satisfação é não ter medo<br />Pois meu Jesus virá bem cedo.<br />Logo em glória eu hei de vê-lO.<br />satisfação sem fim. (3 vezes)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 106, "numero": 107, "titulo": "Satisfação é ter a Cristo", "letra": ["Há um caminho cheio de luz,<br />E nenhum outro há, e esse é só Jesus.<br />Uma verdade jorra da cruz:<br />Vida temos em Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 107, "numero": 108, "titulo": "Os que esperam no Senhor", "letra": ["Os que esperam no Senhor serão renovados,<br />Ele aumentará vigor aos debilitados.<br />Como as águias subirão, nunca desfalecerão.<br />Alto, aleluia, alto, muito alto subirão.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 108, "numero": 109, "titulo": "Vencedor serei", "letra": ["Vencedor serei, vencedor serei,<br />Nada me espanta, a causa é santa,<br />Vencedor serei!<br />", "<br />Vencedor serei, vencedor serei<br />Com meu Jesus e Sua cruz,<br />Vencedor serei!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 109, "numero": 110, "titulo": "Visitante seja bem-vindo", "letra": ["Visitante seja bem-vindo,<br />Sua presença é um prazer,<br />Com Jesus estamos dizendo,<br />Que esta igreja ama você.<br />", "<br />Deus Te ama e eu te amo<br />E assim devemos viver.<br />Deus Te ama e eu te amo<br />Vivamos sempre assim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 110, "numero": 111, "titulo": "Vou trabalhar, servir, velar", "letra": ["Vou trabalhar, servir, velar,<br />Vou a Jesus com fé orar.<br />Vou contemplar Seu rosto logo mais, sim vou.<br />", "<br />A Sua voz eu hei de ouvir,<br />Sua vontade vou cumprir.<br />Esperando sempre a Sua vinda.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 111, "numero": 112, "titulo": "Agradecer a Deus", "letra": ["Agradecer a Deus de todo o coração<br />Agradecer a Deus por esta comunhão,<br />", "<br />Agradecer porque nos deu a paz real<br />E nos livrou do mal e nos fez viver. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 112, "numero": 113, "titulo": "A minha alma", "letra": ["A minha alma está cheia de paz (2x)<br />Tenho gozo celeste e prazer em dizer<br />A minha alma está cheia de paz.<br />", "<br />Eu caminhando vou, eu caminhando vou,<br />Para a cidade santa eu caminhando vou.<br />", "<br />Eu vou servir Jesus, eu vou servir Jesus,<br />Eu vou andar com Ele, eu vou servir Jesus.<br />", "<br />Eu vou cantar no céu, eu vou cantar no céu,<br />O hino da vitória eu vou cantar no céu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 113, "numero": 114, "titulo": "Não me importa", "letra": ["Não me importa se o sol não brilhar,<br />Jesus é meu, sim, sempre meu.<br />Não me importa se escurecer<br />Cristo comigo está.<br />Nunca me desampara, sim, com Ele eu vou,<br />Nas horas difíceis, sim, cantando eu vou.<br />Sempre alegre e feliz<br />Pois não me importa se o sol não brilhar,<br />Cristo comigo está.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 114, "numero": 115, "titulo": "Quão bom e quão maravilhoso", "letra": ["Quão bom e quão maravilhoso é<br />Que os irmãos vivam em união. (2x)<br />", "<br />Aperte a mão do seu irmão<br />e dê um sorriso pra ele!<br />Aperte a mão do seu irmão<br />e cante essa canção:<br />", "<br />Quão bom e quão maravilhoso é<br />Que os irmãos vivam em união. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 115, "numero": 116, "titulo": "Dádiva", "letra": ["Venho Senhor minha vida oferecer<br />Como oferta de amor e sacrifício;<br />Quero minha vida a Te entregar<br />Como oferta viva em Teu altar. (bis)<br />", "<br />Pois pra Te adorar foi que eu nasci<br />Cumpra em mim o Teu querer<br />Faça o que está em Teu coração,<br />E que a cada dia eu queira mais e mais<br />Está ao Teu lado, Senhor. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 116, "numero": 117, "titulo": "Jesus sabe bem o caminho", "letra": ["Jesus sabe bem o caminho,<br />Eu preciso só seguí-lO. (bis)<br />", "<br />Hoje me dá e amanhã<br />A força que eu necessito.<br />", "<br />Jesus sabe bem o caminho,<br />Eu preciso só seguí-lO.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 117, "numero": 118, "titulo": "Jesus é meu guia", "letra": ["Jesus é meu guia,<br />Eu seguirei sem fim. (bis)<br />Sem fim, sem fim,<br />", "<br />Eu seguirei sem fim. (bis)<br />Jesus é meu guia,<br />Eu seguirei sem fim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 118, "numero": 119, "titulo": "Água viva", "letra": ["Cada estrada que eu andei,<br />Eu pensei daria certo;<br />Toda terra em que habitei,<br />Terminou em um deserto.<br />", "<br />Quando Deus achou-me em trevas, disse:<br />Haja luz!<br />Quando Deus achou-me em guerras, disse:<br />Haja paz!<br />", "<br />Quando Deus achou-me em negras nuvens<br />De tribulações,<br />Fez nascer a Sua graça no céu<br />Do meu coração,<br />Toda vez que eu tive sede<br />Ele deu-me de beber,<br />", "<br />Água viva deu-me de beber! (3x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 119, "numero": 120, "titulo": "Domingo eu vou à igreja", "letra": ["Domingo eu vou à igreja,<br />A Escola Dominical.<br />Estudo a Bíblia e sei de cor<br />O texto da lição.<br />", "<br />Nos dias da semana eu cumpro o meu dever;<br />Por isso a vida é sempre bela,<br />E eu gosto bem de viver.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 120, "numero": 121, "titulo": "Se estais sozinho", "letra": ["Se estais sozinho e no teu caminho<br />Não tens paz, não tens amor, não tens ninguém<br />E procuras encontrar algo mais em teu viver<br />E sabendo que depois virá tristeza sem fim.<br />", "<br />Quero te falar, quero te explicar<br />De um amor que um dia eu achei pra mim,<br />Ele me encheu de paz, tudo que eu não tinha enfim<br />E agora eu não vivo, mas, Cristo vive em mim!<br />", "<br />Me salvou, libertou, me encheu de amor<br />E agora eu não vivo, mas, Cristo vive em mim!<br />REPETE: Quero te falar...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 121, "numero": 122, "titulo": "O Teu amor", "letra": ["O Teu amor se estende além do céu,<br />Constantemente mostras que és fiel,<br />Tua justiça é majestosa como os montes,<br />Sabedoria mais profunda do que o mar,<br />Mas vens comigo estar.<br />", "<br />O Teu amor me enche o coração,<br />Encontro paz à sombra do Teu perdão.<br />Tenho alegria na abundância da Tua casa,<br />Do Teu rio de água viva beberei<br />Tu és meu Rei!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 122, "numero": 123, "titulo": "Reina hoje!", "letra": ["Os reis da terra se prostrarão dianti a Ti SENHOR,<br />Sim, os poderosos virão a Ti e confessarão,<br />O Teu poder, SENHOR. (2X) (bis)<br />", "<br />Não apenas de palavras, reina hoje. (2x)<br />Reina hoje, reina hoje, entre nós, SENHOR. (2x)<br />Entre nós.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 123, "numero": 124, "titulo": "Cantai ao SENHOR um cântico novo", "letra": ["Cantai ao SENHOR um cântico novo<br />Cantai ao SENHOR todas as terras,<br />Cantai ao SENHOR bendizei o Seu Nome,<br />Proclamai a Sua salvação.<br />", "<br />Anunciai entre as nações a Sua glória,<br />Entre todos os povos as Suas maravilhas,<br />Porque grande é o SENHOR<br />E mui digno de ser louvado<br />Mais temível do que falsos deuses.<br />", "<br />Glória e majestade estão diante dEle,<br />Força e formosura no Seu santuário. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 124, "numero": 125, "titulo": "Quem pode livrar como o SENHOR?", "letra": ["Quem pode livrar como o SENHOR?<br />Ele é poderoso pra me guardar! (2x)<br />", "<br />Quando os meus inimigos<br />se levantaram contra mim.<br />", "<br />O SENHOR estendeu Sua mão para mim<br />E me deu a vitória. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 125, "numero": 126, "titulo": "Se conversarmos com Jesus", "letra": ["Se conversarmos com Jesus vai tudo bem, (2x)<br />Nas provações aqui eu sempre descobri<br />Que se falarmos com Jesus vai tudo bem.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 126, "numero": 127, "titulo": "A vitória", "letra": ["A vitória é daquele que O contemplar<br />Ao Cordeiro Cristo, Leão da Tribo de Judá<br />Que foi morto e com Seu sangue pode então comprar<br />Homens que com Ele, sobre a terra vão reinar.<br />", "<br />A vitória é daquele que O adorar<br />Ao Seu lado no Seu trono se assentará<br />Se a Jesus seguir e for por onde Ele andar<br />No Seu monte santo um novo canto entoará.<br />", "<br />A vitória do SENHOR é certa, aleluia<br />Com um sopro de Sua boca, sim, destruirá<br />O inimigo, o anticristo, que não resistirá<br />Jesus Cristo O Rei dominará. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 127, "numero": 128, "titulo": "Jesus, Te entronizamos", "letra": ["Jesus, Te entronizamos<br />Declaramos que és Rei (que és Rei)<br />Tu estás no meio de nós,<br />Ti exaltamos com louvores.<br />ATi fazemos um trono de louvores (3x)<br />Ó vem Jesus e toma o Teu lugar. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 128, "numero": 129, "titulo": "Seja engrandecido", "letra": ["Seja engrandecido,<br />Ó Deus da minha vida<br />Tu és o Deus da minha salvação.<br />És a minha rocha, a minha segurança,<br />Meus lábios sempre Te exaltarão:<br />Aleluia (Aleluia)<br />Ti louvo (Ti louvo)<br />Pois sei que sobre todos és Senhor. (bis)<br />Aleluia (Aleluia) (3x)<br />Louvemos ao Senhor. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 129, "numero": 130, "titulo": "Sobre as ondas", "letra": ["Ó porque duvidar sobre as ondas do mar,<br />Quando Cristo o caminho abriu?<br />Quando forçado és sobre as ondas lutar,<br />Seu amor a ti quer revelar.<br />(Solta o cabo da nau)<br />", "<br />Solta o cabo da nau, toma os remos nas mãos<br />E navega com fé em Jesus!<br />", "<br />E então tu verás que bonança se faz,<br />Pois com Ele seguro serás.<br />(Solta o cabo da nau)<br />", "<br />Quando pedes mais fé, Ele ouve, é crê!<br />Mesmo sendo em tribulação.<br />Quando a mão de puder o teu “ego” tirar,<br />Sobre as ondas poderás andar.<br />(Solta o cabo da nau)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 130, "numero": 131, "titulo": "Eu creio", "letra": ["Eu creio que tudo é possível<br />E que nada é impossível para Ti.<br />Basta uma palavra Tua<br />E os montes se removerão. (2x)<br />", "<br />Pois contigo saltarei muralhas<br />E também destruirei exércitos<br />E serei mais que vencedor! (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 131, "numero": 132, "titulo": "Ele é o Leão da Tribo de Judá", "letra": ["Ele é o Leão da Tribo de Judá<br />Jesus tomou nossas cadeias<br />E nos libertou,<br />Ele é a rocha da nossa vitória.<br />", "<br />É nossa força em tempo de fraqueza<br />É uma torre em tempo de guerra<br />Ó a esperança de Israel. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 132, "numero": 133, "titulo": "Ele é exaltado", "letra": ["Ele é exaltado<br />O Rei é exaltado nos céus,<br />Eu O louvarei.<br />Ele é exaltado pra sempre exaltado<br />Seu Nome louvarei.<br />Ele é o Senhor,<br />Sua verdade vai sempre reinar.<br />Terra e céu glorificam Seu santo nome,<br />Ele é exaltado o Rei é exaltado nos céus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 133, "numero": 134, "titulo": "Terra e céu", "letra": ["Terra e céu proclamam o Teu louvor<br />Maravilhas e poder, glória e majestade<br />Ao Rei dos Reis, Senhor da vida.<br />E das riquezas insondáveis<br />Quão magnificente é o Teu nome ó Senhor.<br />Nós inclinamos e te adoramos<br />Porque és digno, és vencedor<br />Vencestes a morte e da vida és Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 134, "numero": 135, "titulo": "Meu Deus é Pai", "letra": ["Vou dizer que meu Deus é Pai, Jesus é Senhor,<br />Que Ele é o dono da terra, é o Salvador.<br />Vou glorificar o Seu Santo Nome<br />E o meu holocausto Ele vai receber;<br />Vou inundar de amor e alegria,<br />Eu irei transbordar,<br />Um farol que ilumina o escuro mar<br />Eu serei uma bênção para o meu Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 135, "numero": 136, "titulo": "Há um só Deus", "letra": ["Há um só Deus e um só Mediador<br />Entre Deus e os homens.<br />", "<br />Há um só Deus e um só Mediador<br />Deus e homem é Jesus Cristo.<br />Que se entregou por todo pecador (3x)<br />Cristo Jesus nosso Salvador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 136, "numero": 137, "titulo": "Espírito enche a minha vida", "letra": ["Espírito enche a minha vida<br />Enche-me do Teu poder<br />Pois de Ti eu quero ser<br />Espírito enche o meu ser. (2x)<br />", "<br />As minhas mãos eu quero levantar<br />E em louvor Ti adorar;<br />Meu coração eu quero derramar<br />Diante do Teu altar. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 137, "numero": 138, "titulo": "Ó estou muito feliz", "letra": ["Ó estou muito feliz com Jesus meu Salvador.<br />Ele me amou e me libertou,<br />Com Seu sangue me lavou.<br />", "<br />Quero ouví-lO assim dizer:<br />“Pela fé Eu ti salvei.”<br />E lá na eterna glória onde irei morar enfim<br />Verei Jesus meu Rei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 138, "numero": 139, "titulo": "Reina o Senhor", "letra": ["Reina o Senhor, tremam os povos<br />Reina o Senhor, tremam os povos<br />Ele está entronizado acima dos querubins. (bis)<br />", "<br />O Senhor é grande em Sião (3x)<br />E sobremodo elevado acima de todos os povos.<br />", "<br />Reina o Senhor...<br />", "<br />Exaltai ao nosso Deus (3x)<br />E prostrai-vos aos Seus pés<br />Pois só Ele é santo.<br />", "<br />Reina o Senhor...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 139, "numero": 140, "titulo": "Modo lindo de viver", "letra": ["Sinto o sol que nasce dentro do meu ser<br />Esse céu aberto que me ensina a viver;<br />Onde nasce sempre o sol, o rio e o mar<br />Vem ò Salvador e me ensina a amar.<br />", "<br />Vem, vem, vem aprender<br />Esse modo lindo, lindo de viver!<br />Vem, eu quero te ensinar<br />Esse modo lindo, lindo de amar:<br />", "<br />Esse amor que vem da cruz,<br />Ninguém pode resistir o amor<br />E essa luz que se chama JESUS. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 140, "numero": 141, "titulo": "Formosa é Tua presença Senhor", "letra": ["O brilho deste mundo se apaga diante a Ti<br />A glória desta terra nada é;<br />Tudo cai em Tua presença ó Deus,<br />Formosa é Tua presença Senhor. (bis)<br />", "<br />Tua presença está aqui<br />Tua presença está em mim<br />E o teu povo Te recebe adorando a Ti<br />Formosa é Tua presença, Senhor. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 141, "numero": 142, "titulo": "Nosso Deus é soberano", "letra": ["Nosso Deus é soberano<br />Ele reina antes da fundação do mundo. (bis)<br />", "<br />A terra era sem forma e vazia<br />E o Espírito do nosso Deus<br />Se movia sobre a face das águas<br />", "<br />Foi Ele quem criou o céu dos céus<br />Fez separação das águas da terra seca;<br />Foi Ele quem criou os luminares<br />", "<br />Quem criou a natureza e formou o homem.<br />Glória a Deus, por Suas maravilhas<br />E por Sua grandeza, glória a Deus. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 142, "numero": 143, "titulo": "Conheci um grande amigo", "letra": ["Conheci um grande amigo<br />Ele é filho de Deus Pai.<br />O Seu nome é Jesus Cristo<br />NEle a gente pode confiar.<br />", "<br />Jesus, Jesus,<br />nEle a gente pode confiar. (2x)<br />", "<br />Conheci um grande amigo<br />Ele é filho de Deus Pai.<br />O Seu nome é Jesus Cristo<br />nEle a gente pode confiar.<br />", "<br />Você pode ser feliz<br />Tendo Jesus no coração. (2x)<br />", "<br />Jesus, Jesus,<br />nEle a gente pode confiar. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 143, "numero": 144, "titulo": "Grande, grande, grande é o Senhor", "letra": ["Grande, grande, grande é o Senhor<br />Grande é o Senhor Deus poderoso. (bis)<br />", "<br />Que era, que é e que há de vir,<br />Grande, grande, grande é o Senhor.<br />Justo, justo, justo é o Senhor...<br />", "<br />Digno, digno, digno é o Senhor...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 144, "numero": 145, "titulo": "Ao único", "letra": ["Ao único que é digno de receber<br />A honra e a glória, a força e o poder.<br />Ao Rei eterno, imortal, invisível, mas real,<br />A Ele ministramos o louvor. (2x)<br />", "<br />Coroamos, a Ti ó Rei Jesus! (2x)<br />Adoramos o Teu nome<br />Nós rendemos aos Teus pés.<br />Consagramos todo o nosso ser a Ti. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 145, "numero": 146, "titulo": "Minh'alma engrandece ao Senhor", "letra": ["Minh'alma engrandece ao Senhor<br />Meu espírito se alegra em Deus, meu Salvador.<br />Pois com poder tem feito grandes coisas<br />E com misericórdia demonstrado amor.<br />", "<br />Santo, Santo, Santo és Senhor. (2x)<br />", "<br />Tem enchido nossas lâmpadas<br />Com o óleo do Espírito,<br />Tem feito Sua vide florescer. (bis)<br />", "<br />Santo, Santo, Santo és Senhor. (2x<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 146, "numero": 147, "titulo": "Coroado Senhor", "letra": ["Tu sentaste à direita<br />De Deus Pai com majestade. (bis)<br />Coroado Senhor,<br />És fiel, justo e veraz<br />És meu amo e meu dono<br />Com amor Ti servirei. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 147, "numero": 148, "titulo": "Jesus em Tua presença", "letra": ["Jesus em Tua presença reunimo-nos aqui.<br />Contemplamos a Tua face e rendemo-nos a Ti.<br />", "<br />Pois o dia da Tua morte trouxe vida a todos nós,<br />E nos deu completo acesso ao coração do Pai. (bis)<br />", "<br />O véu que separava já não separa mais.<br />A luz que outrora apagada agora brilha<br />E cada dia brilha mais.<br />", "<br />Só pra Ti adorar e fazer Teu nome grande!<br />E Ti dá o louvor que é devido,<br />Estamos nós aqui (bis).<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 148, "numero": 149, "titulo": "Adorarei", "letra": ["Quando olho Tua santidade,<br />Quando vejo Tua formosura,<br />Quando tudo se apaga devido ao Teu esplendor.<br />Quando sinto gozo no Teu coração,<br />Quando Tua santidade reina em mim,<br />Quando tudo obscurece devido ao Teu esplendor:<br />", "<br />Adorarei! (adorarei) Adorarei! (adorarei)<br />Eu vivo ó Senhor (Senhor)<br />só pra Ti adorar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 149, "numero": 150, "titulo": "Aleluia, salvação e glória", "letra": ["Aleluia, salvação e glória<br />Honra e poder pertencem ao nosso Deus. (bis)<br />Canta aleluia, vem dar-Lhe glória<br />Levantai Seu nome Jesus é o Rei dos Reis. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 150, "numero": 151, "titulo": "Reunidos aqui", "letra": ["Reunidos aqui só pra louvar ao Senhor<br />Novamente aqui em união.<br />Algo bom vai acontecer<br />Algo bom Deus tem pra nós,<br />Reunidos aqui só pra louvar ao Senhor.<br />", "<br />Seja onde for eu louvor cada vez mais, eu louvo<br />Pois o seu amor rodeia-me como mar,<br />Eu louvo nome de Jesus, sim o nome de Jesus<br />Pois o nome de Jesus liberto eu sou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 151, "numero": 152, "titulo": "Deus é o nosso refúgio", "letra": ["Deus é o nosso refúgio, socorro bem presente;<br />Ainda que os montes se abalem e a terra estremeça:<br />Ele é o meu refúgio e a minha fortaleza.<br />Ele é o meu amparo, Protetor, Rei e Senhor. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 152, "numero": 153, "titulo": "Alto preço", "letra": ["Eu sei que foi pago um alto preço<br />Para que contigo eu fosse um, meu irmão.<br />Quando Jesus derramou Sua vida<br />Ele pensava em ti, Ele pensava em mim,<br />Pensava em nós. (bis)<br />", "<br />E nos via redimidos no Seu sangue<br />Lutando o bom combate do Senhor,<br />Lado a lado trabalhando Sua igreja edificando<br />E rompendo as barreiras pelo amor.<br />", "<br />E na força do Espírito Santo<br />Nós proclamamos aqui que pagaremos um preço<br />Em sermos um só coração no Senhor,<br />E por mais que as trevas militem e nos tentem separar<br />Com os nossos olhos em Cristo (Jesus)<br />Unidos iremos andar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 153, "numero": 154, "titulo": "Quero louvar-Te", "letra": ["Quero louvar-Te sempre mais e mais<br />Quero louvar- Te sempre mais e mais<br />Buscar o Teu querer, Tua graça conhecer<br />Quero louvar-Te.<br />", "<br />As aves do céu cantam para Ti<br />As flores do campo refletem Teu poder<br />Quero cantar, quero levantar as minhas mãos a Ti.<br />", "<br />Quero amar-Te...<br />", "<br />Quero servir-Te...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 154, "numero": 155, "titulo": "O domínio e o poder", "letra": ["O domínio e o poder pertencem a Jesus<br />Os louvores de Sião sejam dados a Deus.<br />O Seu trono está no céu e os pés aqui na terra<br />E o Pai O corou Rei de Israel.<br />E o Pai O coroou, e o Pai O coroou;<br />E o Pai O coroou Rei de Israel.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 155, "numero": 156, "titulo": "Vamos adorar a Deus", "letra": ["Vamos adorar a Deus, vamos adorar a Deus;<br />Vamos invocar Seu nome, vamos adorar a Deus.<br />", "<br />Ele veio em minha vida num dia especial<br />Trocou meu coração por outro coração<br />E esta é a razão porque eu digo que<br />Vamos adorar a Deus.<br />", "<br />Quando eu adoro a Deu, quando eu adoro a Deu,<br />Vamos invocar Seu nome,...<br />", "<br />Podes adorar a Deus, Podes adorar a Deus,<br />Vamos invocar Seu nome,...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 156, "numero": 157, "titulo": "Aliança", "letra": ["Como é precioso irmão estar bem junto a ti<br />E juntos lado a lado andarmos com Jesus<br />E expressarmos o amor que um dia Ele nos deu<br />Pelo sangue no Calvário Sua vida trouxe a nós.<br />", "<br />Aliança no Senhor eu tenho com você<br />Não existem mais barreiras em meu ser.<br />Eu sou livre pra te amar, pra te aceitar<br />E para te pedir Perdoa-me, irmão.<br />", "<br />Eu sou um com você no amor de nosso Pai<br />Somos um no amor de Jesus. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 157, "numero": 158, "titulo": "Pai de amor", "letra": ["Pai de amor gosto tanto de Ti. (bis)<br />Te amo, Te quero e prostrado Te adoro<br />Pai de amor gosto tanto de Ti.<br />", "<br />Meu Jesus amoroso Tu és. (bis)<br />Minha alma limpaste e o Espírito enviaste<br />Meu Jesus amoroso Tu és.<br />", "<br />Santo Espírito Consolador. (bis)<br />Tu nos santificas e em nós sempre habitas<br />Santo Espírito Consolador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 158, "numero": 159, "titulo": "Ao que está sentado no trono", "letra": ["Ao que está sentado no trono e ao Cordeiro<br />Seja o louvor e a honra, e a glória,<br />E o domínio pelo séculos dos séculos, Amém.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 159, "numero": 160, "titulo": "Conheci o mundo mau", "letra": ["Conheci o mundo mau e com ele seus ardis<br />Me arrastei no lamaçal, tudo isso porque quis.<br />Saber mais que qualquer um, construir algum amor<br />Onde a paz pudesse ser a verdade pra eu crer.<br />", "<br />Mas Jesus Cristo veio e me achou assim tão sujo<br />E numa cruz por mim derramou sangue tão puro<br />Foi assim (Foi assim) que me salvou.<br />", "<br />Eu conheço agora sim a clareza de Jesus<br />Foi das trevas que eu vim, encontrei-me com a luz.<br />Hoje quero sim saber do meu Mestre, Salvador<br />Quero dar-Lhe meu louvor, e só nEle posso crer.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 160, "numero": 161, "titulo": "Glória pra sempre ao Cordeiro", "letra": ["Glória pra sempre ao Cordeiro de Deus,<br />A Jesus o Senhor, ao Leão de Judá<br />A Raiz de Davi que venceu e o livro abrirá.<br />O céu, a terra e o mar, e tudo que neles há<br />O adorarão e confessarão:<br />Jesus Cristo é o Senhor!!!<br />", "<br />Ele é o Senhor! Ele é o Senhor!<br />Ressurreto dentre os mortos<br />Ele é o Senhor.<br />Todo joelho se dobrará,<br />Toda língua confessará,<br />Que Jesus Cristo é o Senhor!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 161, "numero": 162, "titulo": "Celebrarei com júbilo ao Senhor", "letra": ["Celebrarei com júbilo ao Senhor<br />Todos os moradores da terra.<br />Servir ao Senhor com alegria<br />Apresentai-vos a Ele com cânticos.<br />Sabei que o Senhor é bom e eterna a Sua bondade<br />E a sua fidelidade de geração á geração.<br />", "<br />Aleluia! Glória, Aleluia! Glória a Deus. (4x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 162, "numero": 163, "titulo": "É bastante para mim a Tua graça", "letra": ["É bastante para mim a Tua graça<br />Conhecer o Teu amor e o Teu perdão<br />É maravilhoso saber<br />Que para sempre com Jesus vou viver!<br />É bastante para mim a Tua graça.<br />", "<br />ATua graça é melhor que a vida,<br />ATua graça é melhor que a vida,<br />", "<br />Meus lábios Te louvam, bendizer-Te-ei.<br />Em Teu nome as minhas mãos levantarei.<br />", "<br />As minhas mãos eu levantarei, (bis)<br />Meus lábios Te louvam, bendizer-Te-ei,<br />Em Teu nome as minhas mãos levantarei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 163, "numero": 164, "titulo": "Cristo Jesus", "letra": ["Cristo Jesus é meu bom Salvador<br />Desejo amá-lO mais<br />Todos os dias é meu Senhor.<br />", "<br />A Cristo eu amo, ò quanto eu amo<br />Pois por mim morreu.<br />Com o Seu sangue Jesus salvou-me<br />Em gratidão sou Teu.<br />", "<br />Bem cedo ao céu Ele me levará<br />Desejo ama-lO mais<br />Eternamente me guiará.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 164, "numero": 165, "titulo": "Do Senhor é a terra", "letra": ["Do Senhor é a terra e a sua plenitude<br />O mundo e aqueles que habitam<br />Porque Ele fundou-a sobre os mares e os rios<br />E por Sua palavra tudo se formou. (2x)<br />", "<br />O Senhor é a minha luz e a minha salvação<br />Com o Senhor eu nada temerei.<br />Ele é à força da minha salvação<br />O Senhor é a minha luz. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 165, "numero": 166, "titulo": "Deus eterno", "letra": ["Senhor Tu tens sido o nosso refúgio<br />De geração em geração.<br />Antes que os montes nascessem<br />E se formassem a terra e o mundo<br />De eternidade a eternidade Tu és Deus. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 166, "numero": 167, "titulo": "Hosana", "letra": ["Hosana, Hosana ao Rei! (3x)<br />", "<br />Mantos e palmas espalhando vai<br />O povo alegre de Jerusalém,<br />Lá bem ao longe se começa ver<br />O Filho de Deus que montado vem.<br />", "<br />Enquanto mil vozes ressoam por aí<br />Hosana ao que vem em nome do Senhor!<br />Como um alento de grande exclamação<br />Proclamam com voz triunfal:<br />", "<br />Hosana, Hosana ao Rei! (3x)<br />", "<br />Como na estrada de Jerusalém<br />Um dia também poderemos cantar<br />A Jesus Cristo que virá outra vez<br />Para levar-nos ao eterno lar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 167, "numero": 168, "titulo": "Jesus não faltará", "letra": ["Jesus não faltará, faltará, faltará,<br />Jesus não faltará, não, não, não.<br />", "<br />Jesus me satisfaz, satisfaz, satisfaz,<br />Jesus me satisfaz, sim, sim, sim.<br />", "<br />Eu amo ao meu Jesus, meu Jesus, me Jesus,<br />Eu amo ao meu Jesus, sim, sim, sim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 168, "numero": 169, "titulo": "Deus está presente", "letra": ["Deus está presente, Deus está presente<br />Entre pecadores como nós.<br />Deus está presente, Deus está presente<br />Deus está presente pronto a perdoar.<br />Deus irá ouvir nossa oração,<br />Nosso fardo vai sobre Si levar,<br />Pois Deus está presente<br />Pronto pra salvar, pronto pra ajudar,<br />Deus está presente.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 169, "numero": 170, "titulo": "Calmo, sereno e tranqüilo", "letra": ["Calmo, sereno e tranqüilo<br />sinto descanso neste viver.<br />Isto devo a um amigo<br />que só por Ele eu pude obter.<br />", "<br />Ele é Jesus, meu amigo,<br />Meu Senhor, o Salvador<br />Só por Ele ganhei a vida eterna<br />com Deus, com Deus.<br />", "<br />Triste foi sua história<br />levando a cruz sem pecado algum,<br />Só porque me amou<br />morreu por mim e não hesitou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 170, "numero": 171, "titulo": "Vem louvar", "letra": ["Hoje é tempo de louvar a Deus<br />Em nós agora habita o Seu Espírito<br />Então é só cantar e a Cristo exaltar<br />E Sua glória encherá esse lugar.<br />", "<br />Vem louvar! (Vem, vem louvar)<br />Vem louvar! (Vem, vem louvar)<br />", "<br />No meio dos louvores Deus habita<br />E é Seu prazer cumprir o que nos diz,<br />Então é só cantar (cantar)<br />E a Cristo exaltar (exaltar)<br />E Sua glória encherá este lugar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 171, "numero": 172, "titulo": "Tudo Ele é pra mim", "letra": ["Nas estrelas vejo a Sua mão<br />E no vento sinto a Sua voz.<br />Deus domina sobre terra e mar<br />O que Ele é pra mim?<br />Eu sei o sentido do Natal<br />Pois na história tem o seu lugar<br />Cristo veio para nos salvar<br />O que Ele é pra mim?<br />", "<br />Até que um dia Seu amor senti<br />Sua imensa graça recebi<br />Descobri então que Deus não vive<br />Longe lá no céu sem se importar comigo<br />Mas agora ao meu lado está<br />Cada dia sinto o Seu cuidar<br />Ajudando-me a caminhar<br />Tudo Ele pra mim!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 172, "numero": 173, "titulo": "É fácil de entender", "letra": ["É fácil de entender, tão claro como a luz:<br />Em meu lugar pra me salvar<br />Jesus morreu na cruz.<br />É crer só nEle agora de todo o coração,<br />Amigo sem demora, aceitai a salvação.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 173, "numero": 174, "titulo": "Cristo vem me buscar", "letra": ["Cristo vem me buscar para o céu me levará<br />O Cordeiro prometido voltará. (bis)<br />", "<br />Ó! Glória, aleluia! Maranata vem Jesus!<br />Sou liberto pelo sangue dessa cruz.<br />", "<br />Tenho o Consolador, Sua glória e esplendor<br />Sou liberto pelo poder do Senhor.<br />", "<br />Ele manda atento está, vigiar e sempre orar<br />Para o toque da trombeta escutar. (bis)<br />", "<br />Oh que gozo vou sentir com os anjos a cantar<br />Pois com Cristo para sempre vou morar. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 174, "numero": 175, "titulo": "Eu te louvarei Senhor", "letra": ["Eu te louvarei Senhor,<br />De todo o meu coração. (2x)<br />", "<br />Na presença dos anjos (homens)<br />A Ti cantarei, louvores. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 175, "numero": 176, "titulo": "Porque Ele vive", "letra": ["Deus enviou Seu Filho amado<br />Pra me salvar e perdoar<br />Na cruz morreu por meus pecados<br />Mas ressurgiu e vivo com o Pai está.<br />", "<br />Porque Ele vive posso crer no amanhã<br />Porque Ele vive temor não há;<br />Mas eu bem sei, eu sei que a minha vida<br />Está nas mãos de meu Jesus que vivo está!<br />", "<br />E quando enfim chegar à hora<br />Em que a morte enfrentarei<br />Sem medo então terei vitória<br />Verei na glória o meu Jesus que vivo está.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 176, "numero": 177, "titulo": "Eu sou a ressurreição", "letra": ["Eu sou a ressurreição e a vida.<br />Quem crê em Mim, embora esteja morto,<br />Viverá! Viverá!<br />E todo aquele que em Mim crê não morrerá,<br />Sim, nunca morrerá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 177, "numero": 178, "titulo": "Há vitória para mim", "letra": ["Há vitória para mim (2x)<br />Pelo sangue do Cordeiro,<br />Há vitória para mim.<br />Vencer! Vencer! Vencer! Vencer!<br />Pelo sangue do Cordeiro eu irei vencer.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 178, "numero": 179, "titulo": "Exaltar-Te-ei", "letra": ["Exaltar-Te-ei, ó Deus meu e Rei<br />E bendirei o Teu nome. (bis)<br />", "<br />Todos os dias Te bendirei<br />E louvarei o Teu nome.<br />Para sempre Te bendirei<br />E louvarei o Teu nome.<br />", "<br />Levantai ó portas as vossas cabeças<br />Levantai-vos ó portais eternos<br />Para que entre o Rei, o Rei da glória<br />Quem é o Rei, quem é o Rei da glória?<br />O Senhor forte e poderoso<br />Senhor, Poderoso nas batalhas.<br />", "<br />Levantai ó portas as vossas cabeças<br />Levantai-vos ó portais eternos<br />Para que entre o Rei, o Rei da glória<br />Quem é o Rei, quem é o Rei da glória?<br />O Senhor dos Exércitos.<br />Ele é o Rei Ele é o Rei da glória.<br />", "<br />Lá, lá, lá, lá, lá... Rei!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 179, "numero": 180, "titulo": "Salmos de louvor", "letra": ["Salmos de louvor, cantemos para o Senhor<br />Pois cada dia que passa, Ele nos dá mais amor.<br />Salmos, salmos, salmos de louvor,<br />Cantemos para o Senhor<br />Pois cada dia que passa, Ele nos dá mais amor.<br />", "<br />Salmos, salmos, salmos de louvor.<br />Louvado seja Deus, o Rei dos Reis,<br />Pra sempre cantarei do Seu amor.<br />Teus filhos vão falar do Teu poder<br />Todos hão de Te adorar, e Te bendizer.<br />", "<br />Salmos de louvor, salmos de louvor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 180, "numero": 181, "titulo": "Andam procurando", "letra": ["Andam procurando a razão de viver<br />Nesse mundo mal querem paz receber.<br />Fazem seus caminhos pensando em achar<br />Algo que na vida valor possa dar.<br />", "<br />Mas só Jesus pode dar a razão de viver<br />Gozo, paz e amor só Jesus pode dar;<br />E assim você será bem feliz<br />Com Jesus (aleluia, amém).<br />", "<br />Como todo mundo, eu também procurei<br />E agora digo que a paz encontrei.<br />Cristo me salvou e eu quero falar<br />Que uma vida nova Ele pode te dar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 181, "numero": 182, "titulo": "Na viagem desta vida", "letra": ["Na viagem desta vida dois caminhos há:<br />Um é largo e fácil, vai direto a perdição;<br />Satanás convida e com ele muitos vão.<br />Mas eu não quero me perder,<br />Em outro caminho estou<br />Jesus é quem convida e me conduz a vida<br />E é com Jesus que eu vou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 182, "numero": 183, "titulo": "Faz-me chegar", "letra": ["Faz-me chegar aos Teus rios, Senhor. (3x)<br />Faz-me chegar, faz-me beber, faz-me viver.<br />", "<br />Faz-me beber dos Teus rios, Senhor. (3x)<br />Faz-me chegar, faz-me beber, faz-me viver.<br />", "<br />Faz-me viver nos Teus rios Senhor. (3x)<br />Faz-me chegar, faz-me beber, faz-me viver.<br />", "<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 183, "numero": 184, "titulo": "Rendei graças ao Senhor", "letra": ["Rendei graças ao Senhor porque Ele é bom. (2x)<br />Porque a Sua misericórdia dura para sempre.<br />Rendei graças ao Senhor. (bis)<br />Rendei graças ao Deus dos deuses<br />Porque Ele é bom. (bis)<br />", "<br />Porque a Sua misericórdia dura sempre<br />Rendei graças ao Senhor. (3x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 184, "numero": 185, "titulo": "Eu pertenço a Cristo", "letra": ["Eu pertenço a Cristo, pois me comprou<br />Para o Seu serviço me consagrou.<br />Ele é quem domina todo o meu ser<br />Eu entrego a Cristo o meu viver.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 185, "numero": 186, "titulo": "A alegria está no coração", "letra": ["A alegria está no coração de quem já conhece a Jesus<br />A verdadeira paz só tem aquele que já conhece a Jesus<br />", "<br />O sentimento mais precioso que vem do nosso Senhor<br />É o amor que só tem quem já conhece a Jesus.<br />", "<br />Aleluia, aleluia, aleluia, aleluia.<br />", "<br />O sentimento mais precioso que vem do nosso Senhor<br />É o amor que só tem quem já conhece a Jesus.<br />", "<br />Aleluia, Amém.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 186, "numero": 187, "titulo": "Mas os que esperam", "letra": ["Mas os que esperam no Senhor<br />Renovarão as suas forças,<br />Subirão com asas como águias;<br />Correrão e não se cansarão,<br />Caminharão e não se fadigarão.<br />", "<br />Mas, os que esperam no Senhor...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 187, "numero": 188, "titulo": "De todas as tribos", "letra": ["De todas as tribos, povos e raças<br />Muitos virão Te louvar.<br />De tantas culturas, línguas e nações<br />No tempo e no espaço virão Te adorar.<br />", "<br />Bendito seja sempre o Cordeiro!<br />Filho de Deus, Raiz de Davi!<br />Bendito seja Seu Santo Nome!<br />Cristo Jesus presente aqui.<br />", "<br />Remidos comprados, grande multidão,<br />Muitos virão Te louvar.<br />Povo escolhido, Teu reino e nação<br />No tempo e no espaço virão Te adorar.<br />", "<br />E a nós só nos cabe tudo dedicar<br />Oferta suave ao Senhor.<br />Dons e talentos queremos consagrar<br />E a vida no Teu altar pra Teu louvor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 188, "numero": 189, "titulo": "Somos um pequeno povo mui feliz", "letra": ["Somos um pequeno povo mui feliz (2x)<br />Pois Jesus nos perdoou e de graça nos salvou,<br />Somos um pequeno povo mui feliz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 189, "numero": 190, "titulo": "Tu és soberano", "letra": ["Tu és soberano sobre a terra, sobre os céus<br />Tu és Senhor, absoluto.<br />Tudo que existe e acontece Tu sabes muito bem,<br />Tu és tremendo.<br />E apesar dessa glória que tens,<br />Tu Te importas comigo também,<br />E esse amor tão grande eleva-me, amarra-me a Ti<br />Tu és tremendo.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 190, "numero": 191, "titulo": "Com o Senhor marchamos", "letra": ["Com o Senhor marchamos, sim;<br />O Seu exército poderoso é,<br />Sua glória será vista em toda terra.<br />", "<br />Vamos cantar o canto da vitória,<br />Glória a Deus! Vencemos a batalha!<br />Toda arma contra nós perecerá.<br />", "<br />O nosso General é Cristo,<br />Seguimos os Seus passos,<br />Nenhum inimigo nos resistirá. (Bis)<br />", "<br />Com o Messias marchamos, sim;<br />Em Suas mãos a chave da vitória<br />Que nos leva a possuir a terra prometida.<br />", "<br />Vamos cantar o canto da vitória,<br />Glória a Deus! Vencemos a batalha!<br />Toda arma contra nós perecerá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 191, "numero": 192, "titulo": "Cristo é o meu sol", "letra": ["Cristo é o meu sol, tudo o que tenho em mim,<br />A razão de viver, a luz do meu caminhar. (bis)<br />", "<br />Nem mesmo a dura morte pode nos separar,<br />Pois o amor que encontrei nada pode apagar. (bis)<br />", "<br />Louvado seja o Senhor, o Deus de todo poder! (4x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 192, "numero": 193, "titulo": "Rei das nações", "letra": ["Grandes são as Tuas obras, Senhor todo poderoso,<br />Justo e verdadeiros são os Teus caminhos. (bis)<br />", "<br />Ó Rei das nações, quem não Te temerá,<br />Quem não glorificará Teu nome?<br />Ó Rei das nações, quem não Te louvará<br />Pois só Teu nome é Santo. (bis)<br />", "<br />Todas as nações virão e adorarão diante de Ti.<br />Pois os Teus atos de justiça se fizeram manifestos. (bis)<br />", "<br />Ó Rei das nações, quem não Te temerá,...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 193, "numero": 194, "titulo": "Jesus virá", "letra": ["Um dia lindo almejo eu encontrar<br />A eterna glória que prometida está;<br />Gozo e alegria posso então sentir<br />Que Jesus Cristo já está por vir.<br />", "<br />Jesus virá outra vez aqui, (aleluia)<br />Jesus vira mais outra vez aqui;<br />E todos juntos em um só louvor<br />Cantemos todos Ele é o nosso Senhor.<br />", "<br />Ele veio ao mundo pra ser príncipe da paz,<br />Foi tentado e não pecou jamais;<br />A Sua vida foi exemplo de amor<br />Por isso eu canto: Ele é o nosso Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 194, "numero": 195, "titulo": "Tudo aqui mudou", "letra": ["Tudo aqui mudou, pois Jesus transformou,<br />Renovou a minha vida.<br />Tudo aqui mudou quando eu cri no Senhor,<br />Nova vida começou.<br />Coisas que eu amava, renunciei.<br />Amo agora o que eu então desprezei.<br />Tudo aqui mudou quando eu cri no senhor<br />Nova vida começou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 195, "numero": 196, "titulo": "Bem aventurado", "letra": ["Bem aventurado aquele que teme ao Senhor<br />Que confia perpetuamente em Teu poder<br />Que medita de dia e de noite<br />Noite e dia sem fim.<br />", "<br />Sua casa é edificada sobre a rocha<br />Não existe vendaval pra destruir<br />E a família que habita dentro dela<br />No Senhor espera.<br />", "<br />Espera no Senhor sem desistir<br />Na certeza que Ele não falha (não, não)<br />Tudo Ele já preparou, Seu amor nunca mudou.<br />Espera no Senhor sem desistir,<br />Seu amor nunca mudou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 196, "numero": 197, "titulo": "O caminho para o céu é Jesus", "letra": ["O caminho para o céu é Jesus,<br />Que na cruz Seu sangue derramou<br />Pra salvar o pecador com o Seu grandioso amor,<br />O caminho para o céu é Jesus. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 197, "numero": 198, "titulo": "Senhor Tu és", "letra": ["Senhor Tu és o meu Deus forte<br />A minha rocha e a minha luz. (bis)<br />", "<br />Por isso cada vez que eu olho para ti<br />Eu sinto uma água viva que sai de dentro de mim.<br />Aleluia, aleluia, aleluia, aleluia.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 198, "numero": 199, "titulo": "Agradeço-Te, Senhor", "letra": ["Agradeço-Te, Senhor, pois Tu és bondoso<br />Tuas misericórdias duram para sempre.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 199, "numero": 200, "titulo": "A começar em mim", "letra": ["A começar em mim, quebra corações<br />Pra que sejamos todos um, como Tu és em nós. (bis)<br />", "<br />Onde há frieza que haja amor,<br />Onde há ódio, o perdão,<br />Para que Teu corpo cresça sim<br />Rumo à perfeição.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 200, "numero": 201, "titulo": "Jesus Cristo mudou meu viver", "letra": ["Jesus Cristo mudou meu viver (2x)<br />Ele é a luz que ilumina meu ser,<br />Sim, Jesus Cristo mudou meu viver<br />", "<br />Diferente hoje é meu coração (2x)<br />Cristo deu-me paz e perdão,<br />Sim diferente hoje é meu coração.<br />", "<br />O amor só conheci em canções,<br />Que falavam de ilusões;<br />Tudo agora é diferente,<br />Isto falo a toda gente:<br />Que Cristo deu-me Seu amor!<br />Jesus Cristo mudou meu viver...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 201, "numero": 202, "titulo": "Se o Meu povo", "letra": ["Se o Meu povo, que se chama pelo meu nome,<br />Se humilhar, orar e Me buscar;<br />Se o Meu povo, que se chama pelo meu nome<br />Se converter dos seus maus caminhos.<br />", "<br />Então Eu ouvirei dos céus,<br />perdoarei os seus pecados<br />E sararei, sararei a sua terra<br />Estarão abertos os meus olhos<br />e atentos os meus ouvidos.<br />A oração que se fizer nesse lugar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 202, "numero": 203, "titulo": "Linda canção", "letra": ["Quero cantar uma linda canção<br />De um homem que me transformou!<br />Quero cantar uma linda canção<br />De alguém que minha vida mudou!<br />É o amigo Jesus, é o amigo Jesus!<br />Ele é Deus, Ele é Rei, é amor e verdade!<br />Pois só nEle encontrei essa paz que busquei,<br />Pois só nEle encontrei a felicidade.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 203, "numero": 204, "titulo": "Jesus é maravilhoso", "letra": ["Jesus é maravilhoso! Jesus é maravilhoso!<br />Ele salva, Ele guia, Ele guardará,<br />Sim, Jesus é maravilhoso!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 204, "numero": 205, "titulo": "Quem tem Jesus, tem tudo", "letra": ["Quem tem Jesus, tem tudo<br />Quem não tem não, tem nada.<br />Mas quem tem Jesus Cristo,<br />No céu já tem morada.<br />", "<br />Quem ama este mundo, lá no céu não tem nada;<br />Quem ama Jesus Cristo, no céu já tem morada.<br />", "<br />No céu há um tesouro que Jesus tem pra dar,<br />Pra quem deixar o mundo e a Ele se entregar.<br />", "<br />As riquezas do mundo produz tribulação,<br />faz ficar orgulhoso e traz separação.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 205, "numero": 206, "titulo": "Eu sou crente em Jesus", "letra": ["Eu sou crente em Jesus, sou crente em Jesus,<br />Tenho salvação, paz no coração.<br />Sou herdeiro com Cristo e ando na luz,<br />Ó que gozo ser crente em Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 206, "numero": 207, "titulo": "Jesus é a aliança", "letra": ["Jesus é a aliança entre você e eu. (2x)<br />Hoje Ele te chama para renovar<br />Hoje Ele te chama para restaurar<br />Hoje Ele te chama para dEle derramar! (bis)<br />", "<br />Jesus é aliança entre você e Deus. (2x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 207, "numero": 208, "titulo": "Jesus me ama", "letra": ["Jesus me ama e quer salvar-me,<br />Jesus me ama e quer-me bem.<br />", "<br />Por isso eu canto sempre Ele ama,<br />Jesus me ama, meu Salvador.<br />", "<br />Castigo duro que eu mereço<br />Jesus sofreu já em meu lugar.<br />", "<br />Estive preso no vil pecado,<br />Estive preso, mas me salvou.<br />", "<br />Agora quero na minha vida,<br />Ao meu amigo sempre agradar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 208, "numero": 209, "titulo": "Sabes tu porque eu amo a Cristo?", "letra": ["Sabes tu porque eu amo a Cristo,<br />A Cristo, a Cristo?<br />Sabes tu porque eu amo a Cristo?<br />Porque Cristo me salvou.<br />Ele veio do Seu lar na glória morrer por mim.<br />É por isso que eu amo a Cristo,<br />Porque é meu Salvador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 209, "numero": 210, "titulo": "Tu que estás assentado", "letra": ["Tu que estás assentado no trono<br />Sempre reinando, soberano;<br />Anjos cantando, homens louvando,<br />Deus reunido com Seu povo.<br />", "<br />Oh Alfa! Ômega! Cristo! Filho!<br />Oh vem! Oh vem! Oh vem Senhor Jesus. (2x)<br />", "<br />Ansioso espero a Tua volta<br />O grande dia em que Tu virás<br />Então subiremos, contigo estaremos<br />Para sempre, aleluia.<br />", "<br />Maranata! Cristo! Filho! Mestre!<br />Oh vem! Oh vem! Oh vem Senhor Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 210, "numero": 211, "titulo": "Falemos de Cristo", "letra": ["Falemos de Cristo Ele é o Salvador<br />Senhor tão singular, do mundo criador.<br />Ele foi nos preparar mansões celestiais:<br />Falemos de Cristo mais e mais.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 211, "numero": 212, "titulo": "Eu celebrarei", "letra": ["Eu celebrarei cantando ao Senhor<br />E só nEle me alegrei. (bis)<br />", "<br />Eu O louvo e O adoro<br />Porque tem triunfado. (bis)<br />", "<br />Grande é o Senhor, Rei do universo (3x)<br />Porque grande é.<br />Hosana nas alturas! (3x)<br />Porque grande é.<br />Bendito és, bendito o que vem (3x)<br />Em nome de Deus.<br />Hosana nas alturas! (3x)<br />Porque grande é.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 212, "numero": 213, "titulo": "Não a nós Senhor", "letra": ["Não a nós Senhor, não a nós Senhor,<br />Mas ao Teu nome dar glória<br />Por amor da Tua misericórdia<br />E da Tua fidelidade. (2x)<br />Porque perguntam as nações:<br />Onde está vosso Deus?<br />No céu está o nosso Deus<br />E tudo faz como Lhe agrada.<br />", "<br />Não a nós Senhor...<br />", "<br />Porque confiam as nações<br />Em ouro, prata e riquezas<br />E se esquecem do Senhor<br />Que é fonte de todas as bênçãos.<br />", "<br />Não a nós Senhor...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 213, "numero": 214, "titulo": "Felicidades", "letra": ["Felicidades, felicidades,<br />felicidades em Jesus.<br />Que o nosso Pai te abençoe<br />com alegria, paz e luz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 214, "numero": 215, "titulo": "Adoramos", "letra": ["Adoramos, adoramos, aquele que venceu<br />Adoramos, adoramos a Cristo vencedor.<br />", "<br />Pois não há pecado ou culpa maior que Seu amor<br />Não há nada que façamos que não possa perdoar;<br />", "<br />Não há força nessa terra que não possa derrubar<br />Nem cadeias ou prisões que não posso arrebentar.<br />Adoramos, adoramos...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 215, "numero": 216, "titulo": "Louvemos ao Senhor", "letra": ["Louvemos ao Senhor (2x)<br />Adoremos no Seu Santo Monte<br />Nosso amado Pai, Seu nome é Santo. (bis)<br />", "<br />Louvemos ao Senhor, pois Seu nome é Santo,<br />Pois Seu nome é Santo. (bis)<br />", "<br />Mulheres: Magnifiquemos ao Senhor<br />Ao Rei que é digno de louvor.<br />", "<br />Excelso, supremo e mui digno de louvor. (2x)<br />", "<br />Louvemos ao Senhor, pois Seu nome é Santo,<br />Pois Seu nome é Santo. (bis)<br />", "<br />Hosana, Hosana, Hosana ao nosso Rei. (bis)<br />", "<br />Homens: Cristo é a nossa vida, o motivo do louvor;<br />Em nosso novo coração;<br />Pois morreu a nossa morte<br />Pra vivermos Sua vida<br />Nos trouxe grande salvação.<br />", "<br />Hosana, Hosana, Hosana ao nosso Rei (bis).<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 216, "numero": 217, "titulo": "Adorai", "letra": ["Adorai em majestade<br />Toda glória, seja dada a Cristo Jesus.<br />", "<br />Adorai em santidade<br />Ele morreu, Ele venceu,<br />É o Rei dos Reis.<br />", "<br />Adorai! glorificai de Cristo o Nome;<br />Exaltai! Vinde louvai Jesus Cristo o Rei.<br />", "<br />Adorai em majestade<br />Vinde louvai! Vinde exaltai!<br />O Rei dos Reis.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 217, "numero": 218, "titulo": "O que ouvimos e aprendemos", "letra": ["O que ouvimos e aprendemos,<br />O que nos contaram nossos pais,<br />Não encobriremos aos nossos filhos.<br />Contaremos às vindouras gerações,<br />Os louvores do Senhor, o Seu poder<br />E as maravilhas que fez.<br />", "<br />Como nos tirou das trevas para a luz<br />E nos deu preciosas bênçãos por Jesus,<br />Deu sentido a nossa vida e paz.<br />", "<br />O que ouvimos e aprendemos<br />O que nos contaram nossos pais,...<br />", "<br />Como Seu amor por nós é tão real,<br />Carinhoso é Seu cuidado paternal,<br />Pois sustenta a nossa vida em paz.<br />", "<br />O que ouvimos e aprendemos<br />O que nos contaram nossos pais,...<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 218, "numero": 219, "titulo": "Quero Te adorar ó Deus", "letra": ["Quero Te adorar ó Deus, ficar em Tua presença;<br />Levantarei mãos santas e Te bendirei, meu Cristo.<br />Com o coração contrito quero ver Tua majestade;<br />Seja exaltado ó Deus, glórias ao Teu nome.<br />Porque Te amo, Te amo, Ó Deus, Te amo.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 219, "numero": 220, "titulo": "A Ti, Senhor", "letra": ["A Ti, Senhor, elevo a minha alma, (2x)<br />Ó meu Deus em Ti confio;<br />Guarda-me, Senhor, pois em Ti, Senhor,<br />Me refugio.<br />", "<br />Faz-me, Senhor, andar em Teus caminhos, (2x)<br />Ó meu Deus em Ti confio;<br />Guarda-me, Senhor, pois em Ti, Senhor,<br />Me refugio.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 220, "numero": 221, "titulo": "Há uma linda canção de amor", "letra": ["Há uma linda canção de amor<br />Dentro do meu coração<br />Cristo me deu plena paz e perdão,<br />Ó eu sou feliz.<br />", "<br />Ó eu sou feliz, feliz!<br />Ó eu sou feliz!<br />Cristo me deu plena paz e perdão,<br />Ó eu sou feliz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 221, "numero": 222, "titulo": "Esperança", "letra": ["Há uma luz raiando no céu<br />Vem o dia da salvação;<br />Quando o nosso Rei vier<br />Para vir reinar, então.<br />Nossa triste lida aqui,<br />O sofrimento, perseguição;<br />Tudo acaba na presença de Senhor;<br />O saudamos com esta canção.<br />Eia nós ouvimos o louvor<br />Deste hino que vem de Israel.<br />É do Messias, nosso Rei;<br />Ele é o nosso Emanuel.<br />Ó saí já para recebê-LO;<br />Minha alma rende-Lhe louvor.<br />Gratidão de todo o meu coração,<br />Eu me entrego ao Salvador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 222, "numero": 223, "titulo": "Quero Te adorar", "letra": ["Quero Te adorar ó Rei Jesus,<br />Com todo o meu ser declarar o meu amor;<br />Tua glória e majestade, santo és Senhor. (bis)<br />Pois as Tuas grandes obras<br />Todos os olhos podem ver,<br />Teu poder manifestado em toda terra;<br />Sê exaltado ó Deus. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 223, "numero": 224, "titulo": "Quem é Deus", "letra": ["Quem é Deus, acima do Senhor?<br />Quem é rocha como o nosso Deus?<br />É força e proteção,<br />Ele é a fonte de libertação<br />Pra quem confia no Senhor.<br />", "<br />Quem é Deus acima do Senhor?<br />Quem é rocha como o nosso Deus?<br />Me treina pra lutar,<br />Me mostra onde devo eu andar,<br />Glórias ao nome do Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 224, "numero": 225, "titulo": "O meu louvor", "letra": ["O meu louvor é fruto do meu amor por Ti Jesus,<br />De lábios que confessam o Teu nome.<br />É fruto de Tua graça e da paz que encontro em Ti,<br />E do Teu Espírito que habita em mim. (bis)<br />", "<br />Ainda que as trevas venham me cercar,<br />Ainda que os montes desabem sobre mim,<br />Meus lábios não se fecharão,<br />Pra sempre hei de Te louvar.<br />", "<br />Ainda que cadeias venham me prender,<br />Ainda que os homens se levantem contra mim,<br />Meus lábios não se fecharão,<br />Pra sempre hei de Te louvar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 225, "numero": 226, "titulo": "Pai abre o meu coração", "letra": ["Pai, abre o meu coração<br />Eu quero ter pelas almas paixão.<br />", "<br />Quero trabalhar e contribuir,<br />Quero ser um vaso usado por Ti;<br />Ó, Pai, abre o meu coração.<br />", "<br />Muitos estão por ai a pedir<br />E eu aqui sem nada fazer.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 226, "numero": 227, "titulo": "Teu povo, oh Deus!", "letra": ["Somos todos nós Teu povo, ó, Deus!<br />Viemos aqui pra Te adorar,<br />Ti exaltar, louvar o Teu nome, Aleluia!<br />", "<br />Saiba que Jesus, Ele te ama,<br />Quer te ver feliz como eu sou;<br />Mesmo que você se afaste d'Ele,<br />Ele continua a te amar por que:<br />", "<br />Deus, Ele não desiste de você,<br />Deus Ele não desiste de amar você, (2x)<br />Deus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 227, "numero": 228, "titulo": "Grande é o Senhor", "letra": ["Grande é o Senhor e mui digno de louvor,<br />Na cidade de nosso Deus, Seu Santo monte,<br />A alegria de toda a terra.<br />", "<br />Grande é o Senhor em que nós temos a vitória,<br />Que nos ajuda contra o inimigo;<br />Por isso diante d'Ele nos prostramos.<br />", "<br />Queremos o Teu nome engrandecer<br />E agradecer-Te por Tua obra em nossas vidas;<br />", "<br />Confiamos em Teu infinito amor,<br />Pois só Tu és o Deus eterno<br />Sobre toda terra e céu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 228, "numero": 229, "titulo": "Diante de Tuas obras", "letra": ["Diante de Tuas obras podemos declarar<br />Que não há outro Deus no céu, na terra ou no mar;<br />", "<br />Tu reinas para sempre e nada impedirá<br />Que todos os povos e nações venham Te adorar.<br />", "<br />Tua Senhor é a força,<br />A grandeza e a majestade e o louvor<br />E a glória e o poder. (bis)<br />", "<br />Sempre Te daremos tudo o que temos<br />pra Te adorar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 229, "numero": 230, "titulo": "Amigo de Deus", "letra": ["Não existe nada melhor do que ser amigo de Deus,<br />Caminhar seguro na luz, desfrutar de Seu amor,<br />Ter a paz no coração, viver sempre em comunhão<br />E assim perceber a grandeza do poder de Jesus,<br />Meu Bom Pastor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 230, "numero": 231, "titulo": "Tributai ao Senhor", "letra": ["Tributai ao Senhor, filhos de Deus,<br />Tributai ao Senhor glória e força. (bis)<br />Tributai ao Senhor a glória devida ao Seu Nome<br />Adorai ao Senhor na beleza da santidade.<br />", "<br />A voz do Senhor é poderosa!<br />A voz do Senhor é cheia de majestade!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 231, "numero": 232, "titulo": "A Lei do Senhor é perfeita", "letra": ["A Lei do Senhor é perfeita<br />E restaura a alma;<br />O testemunho do Senhor é fiel<br />E da sabedoria aos símplices.<br />", "<br />São mais desejáveis do que ouro depurado,<br />E são mais doces do que o mel<br />E o destilar dos favos. (bis)<br />", "<br />Os preceitos do Senhor são retos<br />E alegram o coração;<br />O mandamento do Senhor é puro<br />E ilumina os olhos.<br />", "<br />O temor do Senhor é límpido<br />E permanece para sempre;<br />Os juízos do Senhor são verdadeiros<br />E todos igualmente justos.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 232, "numero": 233, "titulo": "Quem nos separará?", "letra": ["Quem nos separará do amor de Cristo?<br />Será a tribulação, angústia ou perseguição,<br />Fome ou nudez, perigo ou espada? (bis)<br />", "<br />Porque eu estou bem certo<br />De que nem morte, nem vida,<br />Nem anjos, nem principados,<br />Nem coisas do presente, nem do porvir,<br />Nem poderes, nem alturas,<br />Nem profundidade, nem qualquer outra criatura<br />Poderá nos separar do amor de Deus,<br />Que está em Jesus Cristo, nosso Senhor,<br />Que está em Jesus Cristo...<br />", "<br />Nada, nada poderá nos separar;<br />Nada, nada poderá nos separar do amor de Deus,<br />Que está em Jesus Cristo, nosso Senhor,<br />Que está em Jesus Cristo... nada.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 233, "numero": 234, "titulo": "Leão de judá", "letra": ["Ouve-se o júbilo de todos os povos,<br />Os reis se dobraram ao Senhor;<br />Ouve-se o brado de vitória:<br />O dia do Senhor chegou!<br />Ouve-se em todos os povos<br />Que um novo Rei surgiu,<br />Impérios reconhecem que Sua destra reinará.<br />", "<br />Leão de Judá! (3x) Prevaleceu.<br />", "<br />E os povos virão e verão<br />A Sião aprender a Sua Lei,<br />E Sua justiça governará.<br />", "<br />Leão de Judá! (3x) Prevaleceu.<br />Leão de Judá!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 234, "numero": 235, "titulo": "Rio de Vida", "letra": ["Jesus, Tu és um Rio de Vida<br />Que corre do trono, do trono de Deus<br />Jesus, Tu és o que eras e o que há de vir;<br />Em Ti todas as coisas vieram a existir. (bis)<br />", "<br />Pois Tu nos amas e o Teu sangue nos libertou,<br />E nos constituíste reino e sacerdotes para Deus (2x)<br />", "<br />Jesus! Jesus! Jesus! (4x)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 235, "numero": 236, "titulo": "Estrela da manhã", "letra": ["És a nossa Estrela da manhã,<br />Cordeiro Santo que nos trouxe a paz<br />Em Tuas mãos está todo vencer,<br />Resposta a todo aquele que clamar.<br />A verdade é Tua Palavra, que não pode mentir,<br />Por isso estamos aqui. (bis)<br />", "<br />Ti louvamos ó Senhor<br />Pelo Teu imenso amor;<br />Manifesta o Teu perdão e poder,<br />E assim vamos Te adorar para sempre<br />Pra sempre ó meu Deus! (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 236, "numero": 237, "titulo": "Em Espírito, em verdade", "letra": ["Em Espírito, em verdade,<br />Ti adoramos, Te adoramos. (bis)<br />Rei dos Reis e Senhor,<br />Ti entregamos nosso viver. (Bis)<br />", "<br />Pra Ti adorar, ó Rei dos Reis,<br />Foi que eu nasci, ó Rei Jesus.<br />Meu prazer é Ti louvar,<br />Meu prazer é estar nos átrios do Senhor.<br />Meu prazer é viver na casa de Deus,<br />Onde flui o amor. (bis)<br />(Ministrando o louvor)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 237, "numero": 238, "titulo": "Declarando Sua glória", "letra": ["Declarando Sua glória entre as nações,<br />Vamos ver Seu nome sendo exaltado;<br />Declarando Sua glória entre as nações,<br />Vamos ver o Seu poder manifestado.<br />", "<br />Seu Espírito movendo corações<br />Convertendo vidas, mentes, intenções;<br />Revelando a todo homem<br />Que a verdade plena está em Jesus.<br />", "<br />Declarando Sua glória entre as nações,<br />Vamos ver Seu nome sempre entronizado;<br />Colocando a Seu serviço nossos dons,<br />Vamos ter os homens a glorificá-lO.<br />De toda raça, tribo, língua e nação,<br />Uma só família, um só coração;<br />Ver o povo todo unido com a vida a Seu dispor,<br />Fazer Cristo conhecido, Sua graça e Seu amor,<br />Confessando com os lábios<br />Que Jesus Cristo é o Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 238, "numero": 239, "titulo": "Louvado seja", "letra": ["Louvado seja, Senhor, Teu nome,<br />Entronizado entre as nações<br />Exaltarei a Ti, Senhor,<br />Pelo que Tu és eu Ti adorarei.<br />", "<br />Recebe a minha adoração<br />Que é fruto de Tua graça a mim<br />E do Teu amor que restaura em mim<br />O meu amor por Ti, Jesus.<br />", "<br />Engrandecerei, exaltarei Teu nome!<br />Diante dos reis e dos poderosos<br />Eu louvarei a Ti, Senhor. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 239, "numero": 240, "titulo": "Brilha Jesus", "letra": ["Vejo a luz de Jesus que brilha<br />Bem no meio das trevas brilha.<br />Jesus Cristo é a luz deste mundo,<br />Nos acorda de um sono profundo.<br />", "<br />Brilha em mim, brilha em mim.<br />Brilha Jesus, mostra ao mundo a luz de Deus Pai,<br />Espírito de Deus, vem refulge em nós.<br />Faz transbordar sobre os povos Tua graça e perdão<br />Vem ordenar que haja luz, ó Senhor.<br />", "<br />Eis, me achego ao trono incrível,<br />Do mais finito ao intangível.<br />Por Teu sangue precioso eu ouso entrar,<br />Nossas sombras da alma vêm dissipar.<br />Brilha em mim, brilha em mim.<br />", "<br />Contemplando Tua majestade,<br />Teu reflexo em nossas faces.<br />Cada dia de glória em glória,<br />Mostrem sempre a Tua história.<br />Brilha em mim, brilha em mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 240, "numero": 241, "titulo": "Os que confiam no Senhor", "letra": ["Os que confiam no Senhor<br />são como os montes de Sião<br />Que não se abalam, mas permanecem para sempre<br />Como em volta de Jerusalém estão os montes,<br />Assim o Senhor, em volta do Seu povo.<br />", "<br />Autoridade e poder, o domínio em Suas mãos<br />Pois o Senhor é Deus, o Senhor é Rei dos povos;<br />Calem-se diante d´Ele a terra,<br />Dobrem os joelhos, ergam as mãos,<br />Pois o Senhor é Deus, o Senhor é Rei dos povos.<br />", "<br />É só confiar no Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 241, "numero": 242, "titulo": "Consagração", "letra": ["Ao Rei dos Reis consagro tudo o que sou<br />De gratos louvores transborda o meu coração!<br />A minha vida eu entrego nas Tuas mãos meu Senhor<br />Pra Te exaltar com todo o meu amor.<br />Eu Te louvarei conforme a Tua justiça<br />E cantarei louvores, pois, Tu és Altíssimo!<br />Celebrarei a Ti, ó Deus, com meu viver;<br />Cantarei e contarei as Tuas obras,<br />Pois por Tuas mãos foram criados<br />Terra, céu e mar e todo ser que neles há.<br />Toda terra celebra a Ti com cântico de júbilo,<br />Pois Tu és o Deus Criador! (bis)<br />Pois Tu és o Deus Criador.<br />", "<br />A honra, a glória, a força<br />e o poder ao Rei Jesus<br />E o louvor ao Rei Jesus! (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 242, "numero": 243, "titulo": "Sereis testemunhas", "letra": ["Sereis testemunhas, recebereis<br />Poder ao descer sobre vós<br />O Espírito Santo e ser-me-eis<br />Testemunhas tanto em Jerusalém;<br />Como em toda Judéia,<br />Samaria incluída, também,<br />", "<br />E até aos confins da terra<br />Ó ide já. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 243, "numero": 244, "titulo": "Flui em mim", "letra": ["Flui em mim, Senhor, a Tua graça,<br />Flui em mim, Senhor, o Teu amor;<br />Flui em mim, Senhor, a Tua vida,<br />Flui em mim, Senhor, o Teu perdão. (bis)<br />Para Te adorar e declarar meu amor,<br />Para Te coroar meu Rei, Senhor da minha vida. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 244, "numero": 245, "titulo": "A voz do Senhor", "letra": ["Ouve-se a voz do Senhor,<br />Ouve-se a voz sobre as águas:<br />", "<br />Troveja o Deus da glória! (2x)<br />A voz do Senhor é poderosa,<br />A voz do Senhor quebra os cedros,<br />Sim, o Senhor despedaça os cedros do Líbano;<br />Despede chamas de fogo, a Sua voz é majestosa,<br />Sim, o Senhor troveja sobre as muitas águas. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 245, "numero": 246, "titulo": "Nossa missão", "letra": ["Minha é a missão de proclamar a salvação;<br />Meu é o dever de ajudar as almas que estão<br />No lamaçal da perdição.<br />", "<br />Como, pois, invocarão Aquele em quem não creram?<br />E como crerão Naquele de quem não ouvirem?<br />E como ouvirão se não há mais pregação? (bis)<br />", "<br />Tua é a missão de proclamar a salvação;<br />Teu é o dever de ajudar as almas que estão<br />No lamaçal da perdição.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 246, "numero": 247, "titulo": "Jesus me transformou", "letra": ["Eu perdido pecador, longe do meu Jesus;<br />Já me achava sem vigor, a perecer sem luz.<br />Meu estado Cristo viu, dando-me Sua mão<br />E salvar-me conseguiu da perdição.<br />", "<br />Cristo me amou! E me livrou!<br />O Seu imenso amor me transformou!<br />Foi Seu poder, o Seu querer;<br />Sim, Cristo o Salvador me transformou!<br />", "<br />Minha vida, todo o ser, quero Lhe consagrar<br />A Seu lado vou viver, o Seu amor cantar.<br />A mensagem transmitir aos que pedidos são<br />Venham todos já fruir a salvação.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 247, "numero": 248, "titulo": "Noite de paz", "letra": ["Tudo é paz! Tudo amor!<br />Dormem todos em redor;<br />Em Belém Jesus nasceu,<br />Rei da paz, da terra e céu;<br />Nosso Salvador é Jesus Senhor.<br />", "<br />Glória a Deus! Glória a Deus!<br />Cantam anjos lá nos céus;<br />Boas novas de perdão,<br />Graça excelsa, salvação;<br />Prova deste amor dá o Redentor.<br />", "<br />Rei da paz! Rei de amor!<br />Deste mundo Criador<br />Vinde todos Lhe pedir<br />Que nos venha conduzir<br />Deste mundo a luz é o Senhor Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 248, "numero": 249, "titulo": "Santo! Santo! Santo! (C.C.#9)", "letra": ["Santo! Santo! Santo! Deus onipotente!<br />Cedo de manhã cantaremos Teu louvor.<br />Santo! Santo! Santo! Deus Jeová Triuno!<br />És um só Deus, excelso Criador.<br />", "<br />Santo! Santo! Santo! Todos os remidos<br />Juntos com os anjos proclamam Teu louvor.<br />Antes de formar-se o firmamento e a terra,<br />Eras e sempre és e hás de ser, Senhor.<br />", "<br />Santo! Santo! Santo! Nós os pecadores<br />Não podemos ver Tua glória sem tremor.<br />Tu somente és santo; não há nenhum outro<br />Puro e perfeito, excelso Benfeitor.<br />", "<br />Santo! Santo! Santo! Deus onipotente!<br />Tuas obras louvam Teu Nome com fervor.<br />Santo! Santo! Santo! Justo e compassivo!<br />És um só Deus, supremo Criador.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 249, "numero": 250, "titulo": "A Deus demos glória (C.C.#15)", "letra": ["A Deus demos glória com grande fervor!<br />Seu filho bendito por nós todos deu<br />A graça concede ao mais vil pecador,<br />Abrindo-lhe a porta de entrada no céu.<br />", "<br />Exultai! Exultai! Vinde todos louvar<br />A Jesus, Salvador, a Jesus Redentor;<br />A Deus demos glória porquanto do céu<br />Seu Filho bendito por nós todos deu.<br />", "<br />Oh! Graça real! Foi assim que Jesus<br />Morrendo, Seu sangue por nós derramou;<br />Herança nos céus com os santos em luz,<br />Comprou-nos Jesus, pois, o preço pagou.<br />", "<br />A crer nos convida tal rasgo de amor,<br />Nos merecimentos do Filho de Deus;<br />E quem, pois, confia no seu Salvador<br />Vai vê-lO sentado na glória dos céus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 250, "numero": 251, "titulo": "Cantai que o Salvador chegou (C.C.#26)", "letra": ["Cantai que o Salvador chegou!<br />Acolha a terra o Rei! Leais, nações, a Ele só<br />Contentes vos rendei, contentes vos rendei,<br />Oh! Sim, contentes vos rendei!<br />", "<br />Ao mundo gozo proclamai do reino de Jesus!<br />Ó terra e mar e céus cantai<br />A resplendente luz, a resplendente luz;<br />A grande resplendente luz.<br />", "<br />Pecados, dores, morte já vencidos d´Ele são;<br />A paz Jesus concederá<br />Em régia profusão, em régia profusão;<br />Oh, sim, em régia profusão.<br />", "<br />Verdade e amor são Sua lei;<br />Os povos acharão que é justo e bom o excelso Rei,<br />E Lhe obedecerão, e Lhe obedecerão;<br />Sim, todos Lhe obedecerão.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 251, "numero": 252, "titulo": "Nasceu o Redentor (C.C.#28)", "letra": ["Alerta, ó terra, entoa! O canto que ressoa;<br />O mundo pecador tem grande sorte boa.<br />A nova se vos dá, e quão alegre soa:<br />Nasceu o Redentor!<br />", "<br />Nasceu o Redentor! Nasceu o Redentor!<br />O eterno Pai do céu Seu filho ao mundo deu.<br />Alerta, ó terra, entoa a nova alegre boa:<br />Nasceu o Redentor!<br />", "<br />A noite já passou, a aurora já raiou;<br />O negro e denso véu de todo se rasgou.<br />Dos montes através o brado ressuou:<br />Nasceu o Redentor!<br />", "<br />Nasceu o Rei da paz num berço humilde jaz,<br />Nas asas desse amor conforto a todos traz;<br />Dizei em alta voz que Cristo satisfaz:<br />Nasceu o Redentor!<br />", "<br />Oh! Gozo divinal, amor celestial,<br />Quem pode Te sondar ou ter um outro igual?<br />Posso eu, da morte réu, gozar ventura tal?<br />Nasceu o Redentor!<br />", "<br />Ó povos, exultai! Nações, ó jubilai!<br />Eis finda toda a dor, jamais se dá um ai;<br />A virgem deu à luz, a Deus glorificai:<br />Nasceu o Redentor!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 252, "numero": 253, "titulo": "Eis entronizado (C.C.#67)", "letra": ["Eis entronizado à destra do bom Deus<br />Como Rei eterno Cristo lá nos céus;<br />Ele é Rei da glória que a Satã venceu,<br />Feita tal vitória Deus O recebeu.<br />", "<br />Pela Sua graça, pelo Seu amor,<br />Seja dado a Cristo cordial louvor!<br />", "<br />Veio resgatar-nos pela Sua cruz<br />Quer apresentar-nos em celeste luz<br />Pela Sua morte, pelo Seu sofrer<br />O inimigo nunca poderá vencer.<br />", "<br />Mas o Seu serviço continua ali,<br />Poderá valer-nos, entretanto, aqui;<br />Por nós advogando com o Pai está,<br />Ele nos ajuda e sempre ajudará.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 253, "numero": 254, "titulo": "Morri na cruz por ti (C.C.#92)", "letra": ["Morri na cruz por ti, morri pra te livrar;<br />Meu sangue, sim, verti e posso te salvar.<br />", "<br />Morri, morri na cruz por ti;<br />Que fazes tu por Mim? (bis)<br />", "<br />Aqui vivi por ti com muito dissabor;<br />Sim, tudo fiz aqui pra ser teu Salvador.<br />", "<br />Sofri na cruz por ti a fim de te salvar;<br />A vida consegui que tu irás gozar.<br />", "<br />Eu trouxe salvação dos altos céus favor;<br />É livre meu perdão, sincero meu amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 254, "numero": 255, "titulo": "Achei um grande amigo (C.C.#73)", "letra": ["Achei um grande amigo; Jesus, o Salvador,<br />Que com amor me guarda cada dia.<br />Fiel é Seu cuidado, constante o Seu amor,<br />E sem limite a Sua simpatia.<br />E ainda mais notável é que por mim morreu.<br />E meus pecados expirou.<br />Assim me regozijo nas bênçãos que me deu;<br />Sim, sei que Jesus Cristo me salvou.<br />", "<br />Jesus é meu amigo, meu guia, meu Senhor;<br />Meu protetor sem outro haver igual.<br />Por mim sofreu a morte, por mim, um pecador;<br />E agora, vivo, guarda-me do mal.<br />", "<br />Por este grande amigo desejo aqui viver,<br />Com Ele ter constante comunhão;<br />Servi-lO fielmente e assim Lhe dar prazer,<br />Ficando sempre a Ele em sujeição.<br />Nos Seus caminhos santos espero aqui seguir<br />E Seu amor a todos demonstrar;<br />Porque Ele do pecado me veio redimir<br />E por amor morreu em meu lugar.<br />", "<br />À hora vem chegando, a Bíblia no-lo diz,<br />Em que Jesus ao mundo voltará.<br />Ó que momento alegre! Que dia tão feliz!<br />O dia em que voltar aqui será!<br />Então com Ele sempre nos céus eu ficarei<br />Já livre do pecado, mágoa e dor;<br />O Seu amado rosto na glória ali verei<br />E gozarei das bênçãos do Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 255, "numero": 256, "titulo": "O poder do sangue (C.C.#89)", "letra": ["Do teu pecado te queres livrar?<br />Seu sangue tem poder, sim, tem poder.<br />Almejas tu do maligno escapar?<br />Seu sangue tem este poder.<br />", "<br />Há poder, sim, força sem igual<br />Só no sangue de Jesus!<br />Há poder, sim, prova-o, pecador;<br />Ó aceita o dom de Jesus!<br />", "<br />Queres com tua vaidade acabar?<br />Seu sangue tem poder, sim tem poder.<br />Vícios, paixões, queres tu dominar?<br />Seu sangue tem este poder.<br />", "<br />Teu coração queres purificar?<br />Seu sangue tem poder, sim, tem poder.<br />Todas as manchas te pode tirar;<br />Seu sangue tem este poder.<br />", "<br />Queres entrar no serviço real?<br />Seu sangue tem poder, sim, tem poder.<br />Queres entrar no serviço real?<br />Terás no seu sangue o poder.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 256, "numero": 257, "titulo": "Louvamos-Te ó Deus (C.C.#135)", "letra": ["Louvamos-Te, ó Deus, pelo dom de Jesus<br />Que por nós pecadores foi morto na cruz.<br />", "<br />Aleluia, toda a glória Te rendemos sem fim;<br />Aleluia, Tua graça imploramos. Amém!<br />", "<br />Louvemos-Te, ó Deus e ao Teu Filho de amor<br />Que foi morto, mas vive Supremo Senhor.<br />", "<br />Louvemos-Te, ó Deus, pelo Espírito, luz<br />Que nos tira das trevas e a Cristo conduz.<br />", "<br />Ó vem nos encher de celeste fervor,<br />E fazer-nos fruir Teu afável amor!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 257, "numero": 258, "titulo": "Deslumbrante (C.C.#96)", "letra": ["Se nos cega o sol ardente<br />Quando visto em seu fulgor;<br />Quem contemplará Aquele<br />Que do sol é criador?<br />Patriarcas, nem profetas<br />O chegaram a avistar;<br />Nem Adão chegou a vê-lO<br />Antes mesmo de pecar.<br />", "<br />Luz, pra qual o sol é trevas,<br />Quem Te pode contemplar?<br />Nossos olhos nus, humanos,<br />Não Te podem encarar.<br />Fogo em cima da arca santa,<br />Sarça ardente no Sinai,<br />São figuras só da glória<br />Do Senhor, do eterno Pai.<br />", "<br />Para termos nós com Ele<br />Franca e doce comunhão,<br />Cristo, o Filho, fez-se carne,<br />Fez-se nossa redenção.<br />Para que na glória eterna<br />Nós miremo-lO sem véu,<br />Cristo padeceu a morte<br />Nova entrada abrindo ao céu.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 258, "numero": 259, "titulo": "Glória ao Salvador (C.C.#282)", "letra": ["Chegada à cruz do meu Salvador,<br />Prostrado aos pés do meu Redentor;<br />Ele atendeu logo ao meu clamor:<br />Glória ao Salvador!<br />", "<br />Glória ao Salvador! Glória ao Salvador!<br />Agora sei que Ele me salvou! Glória ao Salvador!<br />", "<br />Que maravilha! Jesus me amou!<br />Tudo de graça me perdoou!<br />Quebrou meus laços e me livrou!<br />Glória ao Salvador!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 259, "numero": 260, "titulo": "Quando se fizer chamada (C.C.#108)", "letra": ["Quando Cristo Sua trombeta<br />Lá do céu mandar tocar,<br />Quando o dia mui glorioso lá romper,<br />E aos remidos desta terra<br />Meu Jesus se incorporar,<br />E fizer se então chamada, lá estarei.<br />", "<br />Quando se fizer chamada (3x)<br />Quando se fizer chamada, lá estarei!<br />", "<br />Nesse tão glorioso dia,<br />Quando o crente ressurgir<br />E da glória de Jesus participar,<br />Quando os crentes ressurgidos<br />O saudarem no porvir,<br />E fizer-se então chamada, lá estarei.<br />", "<br />Lidarei então pra Cristo<br />Té o dia terminar;<br />Falarei do Seu amor por nós aqui.<br />Quando, pois, findar a vida<br />E o labor aqui cessar,<br />E fizer-se então chamada, lá estarei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 260, "numero": 261, "titulo": "Ouve-nos, Pastor Divino (C.C.#152)", "letra": ["Ouve-nos, Pastor Divino, nós, que neste bom lugar,<br />Teu rebanho congregado, desejamos Te adorar.<br />Cristo amado (2x) Vem teu povo abençoar. (bis)<br />", "<br />Ao perdido no pecado seu perigo faze ver;<br />Chama os pobres enganados, faze-os Tua voz ouvir;<br />Aos enfermos (2x) Mestre, digna Te acudir. (bis)<br />", "<br />Traze o pobre desgarrado ao aprisco Teu, Senhor;<br />Toma o tenro cordeirinho no regaço Teu, Pastor;<br />Dá-lhe os pastos (2x) De celeste e doce amor. (bis)<br />", "<br />Ó Jesus, escuta o rogo, nossa humilde petição;<br />Vem encher o Teu rebanho de sincera devoção<br />Cantaremos (2x) Tua afável proteção. (bis)<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 261, "numero": 262, "titulo": "Vencendo vem Jesus (C.C.#112)", "letra": ["Já refulge a glória eterna<br />De Jesus, o Rei dos reis;<br />Breve os reinos deste mundo<br />Seguirão as Suas leis!<br />Os sinais da Sua vinda<br />Mais se mostram cada vez.<br />Vencendo vem Jesus!<br />", "<br />Glória, glória! Aleluia! (3x)<br />Vencendo vem Jesus!<br />", "<br />O clarim que chama os crentes<br />À batalha, já soou;<br />Cristo, à frente do Seu povo,<br />Multidões já conquistou.<br />O inimigo, em retirada,<br />Seu furor patenteou.<br />Vencendo vem Jesus!<br />", "<br />Eis que em glória refulgente<br />Sobre as nuvens descerá,<br />E as nações e os reis da terra<br />Com poder governará.<br />Sim, em paz e santidade<br />Toda a terra regerá.<br />Vencendo vem Jesus!<br />", "<br />E por fim entronizado<br />As nações há de julgar,<br />Todos, grandes e pequenos,<br />O Juiz hão de encarar.<br />E os remidos triunfantes,<br />Em fulgor hão de cantar:<br />Vencido tem Jesus!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 262, "numero": 263, "titulo": "Seja bendito o Cordeiro (C.C.#123)", "letra": ["Seja bendito o Cordeiro<br />Que na cruz por nós padeceu!<br />Seja bendito o Seu sangue<br />Que por nós pecadores verteu!<br />Eis, nesse sangue lavados<br />Com roupas que tão alvas são<br />Os pecadores remidos<br />Que perante Seu Deus hoje estão!<br />", "<br />Alvo mais que a neve! (2x)<br />Sim, nesse sangue lavado<br />Mais alvo que a neve serei!<br />", "<br />Quão espinhosa a coroa<br />Que Jesus por nós suportou!<br />Oh! Quão profundas as chagas<br />Que nos provam o quanto Ele amou!<br />Eis, nessas chagas, pureza<br />Para o mais torpe pecador!<br />Pois que, mais alvos que a neve<br />O Teu sangue nos torna, Senhor!<br />", "<br />Se nós a Ti confessamos,<br />E seguirmos na Tua luz,<br />Tu não somente perdoas,<br />Purificas também, ó Jesus;<br />Sim, e de todo o pecado!<br />Que maravilha desse amor!<br />Pois que, mais alvos que a neve<br />O Teu sangue nos torna, Senhor!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 263, "numero": 264, "titulo": "Firme nas promessas (C.C.#154)", "letra": ["Firme nas promessas do meu Salvador,<br />Cantarei louvores ao meu Criador.<br />Fico pelos séculos do Seu amor,<br />Firme nas promessas de Jesus.<br />", "<br />Firme, firme,<br />Firme nas promessas de Jesus meu Mestre.<br />Firme, firme,<br />Sim, firme nas promessas de Jesus.<br />", "<br />Firme nas promessas não irei falhar,<br />Vindo as tempestades a me consternar;<br />Pelo Verbo eterno eu hei de trabalhar,<br />Firme nas promessas de Jesus.<br />", "<br />Firme nas promessas sempre vejo assim<br />Purificação no sangue para mim;<br />Plena liberdade gozarei, sem fim,<br />Firme nas promessas de Jesus.<br />", "<br />Firme nas promessas do Senhor Jesus,<br />Em amor ligado com a Sua cruz,<br />Cada dia mais alegro-me na luz,<br />Firme nas promessas de Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 264, "numero": 265, "titulo": "Em Jesus amigo temos (C.C.#155)", "letra": ["Em Jesus amigo temos mais chegado que um irmão,<br />Ele manda que levamos tudo a Deus em oração!<br />Ó que paz perdemos sempre, Ó que dor no coração,<br />Só porque nós não levamos tudo a Deus em oração!<br />", "<br />Temos lidas e pesares e na vida tentação;<br />Não ficamos sem conforto indo a Cristo em oração.<br />Haverá um outro amigo de tão grande compaixão?<br />Os contritos Jesus Cristo sempre atende em oração.<br />", "<br />E se nós desfalecemos, Cristo estende-nos a mão,<br />Pois é sempre a nossa força e refúgio em oração.<br />Se este mundo nos despreza Cristo é nosso em oração<br />Em Seus braços nos acolhe e nos dá consolação.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 265, "numero": 266, "titulo": "Chuvas de bênçãos (C.C.#168)", "letra": ["Chuvas de bênçãos teremos, é a promessa de Deus.<br />Tempos benditos veremos chuvas de bênçãos dos céus.<br />", "<br />Chuvas de bênçãos, chuvas de bênçãos dos céus;<br />Gotas somente nós temos, chuvas rogamos a Deus.<br />", "<br />Chuvas de bênçãos teremos, vida de paz e perdão.<br />Os pecadores indignos graça dos céus obterão.<br />", "<br />Chuvas de bênçãos teremos, manda-nos já, ó Senhor!<br />Dá-nos agora o bom fruto desta palavra de amor.<br />", "<br />Chuvas de bênçãos teremos, chuvas mandadas dos céus;<br />Bênçãos a todos os crentes bênçãos do nosso bom Deus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 266, "numero": 267, "titulo": "Jesus tem o poder (C.C.#202)", "letra": ["Jesus tem o poder de as culpas perdoar<br />A quem, arrependido, a Deus com fé se confessar.<br />Jesus tem o poder, Oh! graças ao Senhor!<br />De dar completa absolvição ao pobre pecador.<br />", "<br />Sim, Cristo tem poder! Onipotente é!<br />Por esse Seu poder merece a nossa fé!<br />Sim, Cristo tem poder! Só nEle confiai!<br />Perante o Seu poder humildes adorai!<br />", "<br />Jesus tem o poder real de converter<br />O mais rebelde pecador, tornando-o novo ser.<br />Jesus tem o poder de sempre nos guardar,<br />E assim ninguém das Suas mãos nos pode arrebatar!<br />", "<br />Jesus tem o poder de dar-nos proteção!<br />A atribulados corações dará consolação!<br />Jesus tem o poder de, quando o fim chegar,<br />Cercar-nos de alegria e paz e a glória nos levar!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 267, "numero": 268, "titulo": "Manso e suave (C.C.#222)", "letra": ["Manso e suave Jesus convidando,<br />Chama por ti e por mim.<br />Eis que Ele à porta te espera velando,<br />Vela por ti e por mim.<br />", "<br />Vem já, Vem já! Alma cansada vem já!<br />Manso e suave Jesus convidando,<br />Chama: Ó pecador, vem!<br />", "<br />Pois que esperamos? Jesus convidando,<br />Convida a ti, sim e a mim.<br />Oh! não desprezes mercê que está dando,<br />Sim, dando a ti, dando a mim.<br />", "<br />Correm os dias, as horas se passam,<br />Passam por ti e por mim;<br />Transes de morte por fim nos esperam,<br />Vem tanto a ti quanto a mim.<br />", "<br />Oh! grande amor que Jesus nos tem dado,<br />Tem dado a ti, dado a mim!<br />Veio salvar-nos do tão vil pecado,<br />Veio por ti e por mim.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 268, "numero": 269, "titulo": "Tendes vós lugar vazio (C.C.#229)", "letra": ["Tendes vós lugar vazio para Cristo, o Salvador?<br />Ele bate e quer entrada, quer salvar-nos em amor.<br />", "<br />Dai lugar a Jesus Cristo! Ide já O convidar!<br />Para que ache em vós morada,<br />E onde sempre possa estar!<br />", "<br />Vós quereis divertimentos, amizades e prazer,<br />Menos esse Amigo vero que por nós ousou morrer!<br />", "<br />Tendes tempo para Cristo? Logo O buscareis em vão!<br />Hoje é tempo favorável de aceitar a salvação!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 269, "numero": 270, "titulo": "Cristo salva o pecador (C.C.#234)", "letra": ["Cristo salva o pecador, lava o negro coração;<br />Ao contrito, com amor, oferece salvação.<br />", "<br />Confiai em seu poder; confiai em seu amor:<br />Crede, pois, que Cristo quer libertar o pecador.<br />", "<br />Cristo salva o pecador e concede-lhe perdão.<br />Aceitai o bom Senhor; aceitai de coração.<br />", "<br />Vinde todos, e achareis paz e luz no Redentor;<br />Vinde, e então recebereis vida eterna do Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 270, "numero": 271, "titulo": "Deixa a luz do céu entrar (C.C.#239)", "letra": ["Tu anseias hoje mesmo a salvação?<br />Tens desejo de banir a escuridão?<br />Abre então de par em par teu coração!<br />Deixa a luz do céu entrar!<br />", "<br />Deixa a luz do céu entrar! (2x)<br />Abre bem a porta do teu coração!<br />Deixa a luz do céu entrar!<br />", "<br />Cristo, a luz do céu, em ti quer habitar<br />Para as trevas do pecado dissipar.<br />Teu caminho e coração iluminar!<br />Deixa a luz do céu entrar!<br />", "<br />Que alegria andar ao brilho dessa luz!<br />Vida eterna e paz no coração produz!<br />Oh! aceita agora o Salvador Jesus!<br />Deixa a luz do céu entrar!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 271, "numero": 272, "titulo": "A última hora (C.C.#259)", "letra": ["Ao findar o labor desta vida<br />Quando a morte ao teu lado chegar.<br />Que destino há de ter a tua alma?<br />Qual será no futuro teu lar?<br />", "<br />Meu amigo, hoje tu tens a escolha:<br />Vida ou morte, qual vais aceitar?<br />Amanhã pode ser muito tarde;<br />Hoje Cristo te quer libertar!<br />", "<br />Tu procuras a paz neste mundo<br />Em prazeres que passam em vão;<br />Mas, na última hora da vida<br />Eles já não te satisfarão.<br />", "<br />Por acaso tu riste, ó amigo,<br />Quando ouviste falar em Jesus?<br />Mas é só Ele o único meio<br />De salvar pela morte na cruz.<br />", "<br />Tens manchada tua alma e não podes<br />Nunca ver o semblante de Deus;<br />Só os crentes com corações limpos<br />Poderão ter o gozo nos céus.<br />", "<br />Se decides deixar teus pecados<br />E entregar tua vida a Jesus;<br />Trilharás, sim, na última hora<br />Um caminho brilhante de luz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 272, "numero": 273, "titulo": "Mais perto (C.C.#283)", "letra": ["Mais perto quero está meu Deus de Ti,<br />Inda que seja a dor que me una a Ti!<br />Sempre hei de suplicar: Mais perto quero estar!<br />Mais perto quero estar meu Deus de Ti!<br />", "<br />Andando triste assim na solidão,<br />Paz e descanso a mim Teus braços dão.<br />Sempre hei de suplicar: Mais perto quero estar!<br />Mais perto quero estar meu Deus de Ti!<br />", "<br />Minha alma cantará a Ti, Senhor,<br />Cheia de gratidão por Teu amor!<br />Sempre hei de suplicar: Mais perto quero estar!<br />Mais perto quero estar meu Deus de Ti!<br />", "<br />E quando a morte enfim me vier chamar,<br />Com serafins nos céus irei morar!<br />Então me alegrarei perto de Ti, meu Rei!<br />Perto de Ti, meu Rei, meu Deus de Ti!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 273, "numero": 274, "titulo": "O caminho da cruz (C.C.#306)", "letra": ["Foi Jesus que abriu o caminho para o céu;<br />Não há outro meio de ir.<br />Nunca irei entrar no celeste lar<br />Se o caminho da cruz errar.<br />", "<br />Para o céu por Jesus irei (2x)<br />Grande é meu prazer de certeza ter;<br />Para o céu pela cruz irei.<br />", "<br />Certamente eu vou no caminho da cruz<br />Com resolução andar.<br />É desejo meu de gozar no céu<br />Esta herança que Cristo deu.<br />", "<br />Os caminhos ímpios do mundo deixei<br />Jamais neles vou seguir.<br />Sigo, pois, Jesus com a minha cruz<br />No caminho que ao céu conduz.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 274, "numero": 275, "titulo": "Crer e observar (C.C.#301)", "letra": ["Em Jesus confiar, Sua lei observar,<br />Oh! que gozo, que bênção, que paz!<br />Satisfeito guardar tudo quanto ordenar,<br />Alegria perene nos traz.<br />", "<br />Crer e observar tudo quanto ordenar;<br />O fiel obedece ao que Cristo mandar!<br />", "<br />O inimigo falaz e a calúnia mordaz,<br />Cristo pode desprestigiar;<br />Nem tristeza, nem dor, nem intriga maior<br />Poderão ao fiel abalar.<br />", "<br />Que delícia de amor, comunhão com o Senhor<br />Tem o crente zeloso e leal;<br />O Seu rosto mirar, Seus segredos privar,<br />Seu consolo constante e real.<br />", "<br />Resolutos, Senhor, e com fé, zelo e ardor<br />Os Teus passos queremos seguir;<br />Teus preceitos guardar, o Teu nome exaltar,<br />Sempre a Tua vontade cumprir.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 275, "numero": 276, "titulo": "Seguirei a meu bom Mestre (C.C.#308)", "letra": ["Se eu tiver Jesus ao lado e por Ele auxiliado,<br />Se por Ele for mandado, a qualquer lugar, irei.<br />", "<br />Seguirei a meu bom Mestre! (3x)<br />Onde quer que for, irei.<br />", "<br />Seja meu caminho duro, espinhoso ou inseguro;<br />Em Seus braços bem seguro, aonde me mandar, irei.<br />", "<br />Males poderão cercar-me ou perigos assustar-me;<br />Mas se Cristo segurar-me, onde me mandar, irei.<br />", "<br />Quando terminar a vida finda a minha triste lida;<br />Tenho a glória prometida, eu pra meu Senhor irei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 276, "numero": 277, "titulo": "Castelo forte (C.C.#323)", "letra": ["Castelo forte é nosso Deus, espada e bom escudo;<br />Com Seu poder defende os Seus em todo transe agudo.<br />Com fúria pertinaz persegue Satanás,<br />Com artimanhas tais e astúcias tão cruéis,<br />Que iguais não há na terra.<br />", "<br />A nossa força nada faz, estamos, sim, pedidos;<br />Mas nosso Deus socorro traz e somos protegidos.<br />Defende-nos, Jesus, O que venceu na cruz,<br />Senhor dos altos céus e sendo o próprio Deus,<br />Triunfa na batalha.<br />", "<br />Se nos quisessem devorar demônios não contados;<br />Não nos podiam assustar, nem somos derrotados.<br />O grande acusador dos servos do Senhor<br />Já condenado está, vencido cairá<br />Por uma só palavra.<br />", "<br />Sim, que a palavra ficará sabemos com certeza;<br />E nada nos assustará com Cristo por defesa.<br />Se temos de perder os filhos, bens, mulher,<br />Embora a vida vá, por nós Jesus está<br />E dar-nos-á Seu reino.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 277, "numero": 278, "titulo": "Não sei porque (C.C.#377)", "letra": ["Não sei porque de Deus o amor a mim se revelou,<br />Porque razão o Salvador pra Si me resgatou.<br />", "<br />Mas eu sei em Quem tenho crido<br />E estou bem certo que é poderoso<br />Pra guardar o meu tesouro até o dia final.<br />", "<br />Ignoro como o Espírito convence-nos do mal,<br />Revela Cristo, Verbo Seu, Consolador real.<br />", "<br />Não sei o que de mal ou bem é destinado a mim,<br />Se maus ou áureos dias vem até da vida o fim.<br />", "<br />E quando vem Jesus, não sei se breve ou tarde vem,<br />Mas sei que meu Senhor virá na glória que Ele tem.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 278, "numero": 279, "titulo": "Seguro estou (C.C.#324)", "letra": ["Seguro estou, não tenho temor do mal,<br />Sim guardado pela fé em meu Jesus.<br />Não posso duvidar desse amor leal;<br />Ele em Seu caminho sempre me conduz.<br />Não me deixará, mas me abrigará,<br />Do pecado vil me vem livrar.<br />A Sua graça não me recusará;<br />Sim, Jesus é Quem me pode sustentar.<br />", "<br />No poder de Cristo, o Mestre,<br />Minha vida salva está!<br />Do perigo que cercá-la Ele poderá livra-la;<br />Seu poder eterno sempre a susterá.<br />", "<br />Abrigo eterno tenho no Salvador,<br />Ele esconde a minha vida em Seu poder;<br />Eu recear não posso do malfeitor<br />Que procura pertinaz me enfraquecer.<br />Confiado, então, nessa proteção,<br />Sigo a Cristo e quero ser fiel;<br />Na minha vida, cheia de gratidão;<br />Sim, ao meu Senhor e Rei Emanuel.<br />", "<br />Perigo algum me pode causar temor,<br />Pois meu Salvador não me abandonará;<br />Com Sua proteção e com Seu amor,<br />Dirigindo minha vida Ele estará.<br />Nunca O deixarei, mas fiel serei,<br />Sempre firme, cheio de fervor;<br />A Cristo, Redentor, meu Senhor e Rei;<br />Eu me entregarei, firmado em Seu amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 279, "numero": 280, "titulo": "Conta as bênçãos (C.C.#329)", "letra": ["Se da vida as vagas procelosas são,<br />Se com desalento julgas tudo vão;<br />Conta as muitas bênçãos, dize-as duma vez,<br />Hás de ver, surpreso, quanto Deus já fez.<br />", "<br />Conta as bênçãos, conta quantas são<br />Recebidas da Divina mão.<br />Uma a uma, dize-as de uma vez,<br />Hás de ver, surpreso, quanto Deus já fez.<br />", "<br />Tens acaso mágoas, triste é teu lidar;<br />É a cruz pesada que tens de levar?<br />Conta as muitas bênçãos, não duvidarás<br />E em canção alegre os dias passarás.<br />", "<br />Quando vires outros com seu ouro e bens,<br />Lembra que tesouros prometidos tens;<br />Nunca os bens da terra poderão comprar<br />A mansão celeste em que tu vais morar.<br />", "<br />Seja teu conflito fraco ou forte cá,<br />Não te desanimes, Deus por cima está;<br />Seu Divino auxílio minorando o mal<br />Te dará consolo e paz celestial.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 280, "numero": 281, "titulo": "Firmeza (C.C.#366)", "letra": ["Em nada ponho a minha fé senão na graça de Jesus;<br />No sacrifício remidor, no sangue do bom Redentor.<br />", "<br />A minha fé e o meu amor estão firmados no Senhor,<br />Estão firmados no Senhor.<br />", "<br />Se Lhe não posso a face ver na Sua graça vou viver;<br />Em cada transe sem falhar sempre hei de nEle confiar.<br />", "<br />Seu juramento é mui leal, abriga-me no temporal;<br />Ao vir cercar-me a tentação é Cristo a minha salvação.<br />", "<br />Assim que o Seu clarim soar irei com Ele me encontrar<br />E gozarei da redenção com todos que no céu estão.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 281, "numero": 282, "titulo": "Jesus, Pastor amado", "letra": ["Jesus, Pastor amado, contempla-nos aqui;<br />Concede que sejamos um corpo só em Ti.<br />Contendas e malícias que longe de nós vão;<br />Nenhum desgosto impeça a nossa comunhão!<br />", "<br />Pois sendo resgatados por um só Salvador,<br />Devemos ser unidos por um mais forte amor;<br />Olhar com simpatia os erros de um irmão,<br />E todos ajudá-lo com branda compaixão.<br />", "<br />Jesus, suave e meigo, ensina-nos a amar<br />E como Tu sejamos também no perdoar!<br />Ah! quanto carecemos do auxílio do Senhor!<br />Unidos supliquemos a Deus por esse amor!<br />", "<br />Se tua igreja toda andar em santa união<br />Então será bendito o nome de cristão.<br />Assim o que pediste em nós se cumprirá<br />E todo o mundo inteiro a Ti conhecerá!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 282, "numero": 283, "titulo": "Brilha no viver (C.C.#417)", "letra": ["Não somente pra fazer um feito singular<br />É mister agir com muito ardor;<br />Mas as coisas mais humildes por executar,<br />Deves fazê-las com fervor.<br />", "<br />Brilha no meio do teu viver (2x)<br />Pois talvez algum aflito possas socorrer,<br />Brilha no meio do teu viver.<br />", "<br />Oh! talvez alguma vida possas alegrar<br />Com palavras doces, em amor;<br />Oh talvez algumas almas tristes alcançar<br />Com a mensagem do Senhor.<br />", "<br />Por maior que seja teu esforço a exercer,<br />Por mais firme a tua devoção;<br />Em redor oh! quantas almas vivem sem prazer,<br />Jazem na negra escuridão.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 283, "numero": 284, "titulo": "Vamos à igreja (C.C.#382)", "letra": ["Tenho gozo e alegria celeste<br />Quando vou adorar ao Senhor<br />Com os crentes em Cristo na igreja<br />Quando juntos rendemos louvor.<br />", "<br />Oh! vem, vem, vem, vem,<br />Sim, vem a igreja comigo,<br />Sim, vamos servir ao Senhor.<br />Pois maior alegria não temos<br />Do que ter comunhão em amor.<br />", "<br />Vamos crentes em Cristo à igreja<br />Conversar com o nosso bom Deus;<br />Escutar os Seus ricos conselhos,<br />Recolher ricas bênçãos dos céus.<br />", "<br />Com prazer eu aguardo a chegada<br />Desse dia do meu Salvador;<br />Nele, pois, a minha alma contente<br />Se derrama em ações de louvor.<br />", "<br />Ó meu Mestre Divino e amado,<br />Eu contigo desejo viver;<br />Tua lei, Tua causa e Teu povo<br />Quero sempre abraçar, defender.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 284, "numero": 285, "titulo": "Minha pátria para Cristo (C.C.#439)", "letra": ["Minha pátria para Cristo! Eis a minha petição!<br />Minha pátria tão querida, eu ti dei meu coração;<br />Lar prezado, lar formoso, é por ti o meu amor;<br />Que o meu Deus de excelsa graça<br />Te dispense Seu favor.<br />", "<br />Salve Deus a minha pátria, minha pátria varonil!<br />Salve Deus a minha terra, esta terra do Brasil!<br />", "<br />Quero, pois, com alegria ver feliz a mãe gentil,<br />Por vencer Seu evangelho esta terra do Brasil.<br />Brava gente brasileira, longe vá temor servil;<br />Ou ficar a pátria salva ou morrer pelo Brasil.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 285, "numero": 286, "titulo": "Vamos nós louvar a Deus (C.C.#385)", "letra": ["Vamos nós louvar a Deus, vamos, vamos;<br />Ao Senhor de toda a luz, santo, santo!<br />Cantem, louvem lá nos céus nosso Deus e Rei Jesus!<br />Exaltado seja Deus, santo, santo!<br />", "<br />Exaltado seja o nosso Deus e Pai!<br />Exaltado para sempre, oh! exaltai!<br />Cantem, louvem lá nos céus nosso Deus e Rei Jesus!<br />Exaltado seja Deus, santo, santo!<br />", "<br />Deus o nosso eterno Pai, santo, santo;<br />Deu-nos bênçãos por Jesus, vede, vede!<br />Ao Senhor glorificai, vós, os salvos, pela cruz,<br />Sim, conosco glória dai, vinde, vinde!<br />", "<br />Exaltemos nosso Deus, santo, santo;<br />Exaltemos com fervor, hoje, hoje!<br />Tributemos todos nós hinos santos de louvor,<br />Sim, louvor em alta voz, hoje, hoje!<br />", "<br />Ao Senhor de todo amor, Deus de glória;<br />Deus de luz e Deus de paz, cantem glória!<br />Hoje nós também louvor vimos dar-Te que Te apraz,<br />Pois nos deste, Salvador, muitas bênçãos!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 286, "numero": 287, "titulo": "Grandioso és tu", "letra": ["Senhor meu Deus, quando eu maravilhado,<br />Paro a pensar no Teu grandioso Ser,<br />Vejo a tormenta, o céu estrelado,<br />A proclamar ao mundo Teu poder.<br />", "<br />Então minha alma canta a Ti Senhor.<br />Grandioso és Tu, grandioso és Tu. (bis)<br />", "<br />E quando, enfim, eu for ao céu subindo,<br />Contemplarei a glória do Senhor.<br />Adorarei com meu amor infindo<br />A quem mostrou por mim tão grande amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 287, "numero": 288, "titulo": "Foi na cruz (C.C.#396)", "letra": ["Oh! tão cego eu andei e perdido vaguei,<br />Longe, longe do meu Salvador;<br />Mas da glória desceu e Seu sangue verteu<br />Pra salvar um tão pobre pecador.<br />", "<br />Foi na cruz, foi na cruz, onde um dia eu vi<br />Meu pecado castigado em Jesus;<br />Foi ali, pela fé, que meus olhos abri<br />E eu agora me alegro em Sua luz.<br />", "<br />Eu ouvia falar dessa graça sem par<br />Que do céu trouxe nosso Jesus;<br />Mas eu surdo me fiz, converter-me não quiz<br />Ao Senhor que por mim morreu na cruz.<br />", "<br />Mas um dia senti meus pecados e vi<br />Sobre mim o castigo da lei;<br />Mas depressa fugi, em Jesus me escondi<br />E refúgio seguro Nele achei.<br />", "<br />Oh! que grande prazer inundou o meu ser,<br />Conhecendo este tão grande amor<br />Que levou meu Jesus a sofrer lá na cruz<br />Pra salvar um tão pobre pecador!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 288, "numero": 289, "titulo": "Das maravilhas", "letra": ["Das maravilhas que a Bíblia contém,<br />Eis a mais linda: Jesus me quer bem.<br />Chego-me a Ele e ninguém me detém,<br />Quando me lembro de que me quer bem.<br />", "<br />Ó que prazer! Jesus me quer bem,<br />Sim me quer bem a mim também.<br />Ó que prazer! Jesus me quer bem,<br />Sim me quer bem Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 289, "numero": 290, "titulo": "Sou feliz (C.C.#398)", "letra": ["Se paz a mais doce me deres gozar,<br />Se dor a mais forte sofrer;<br />Oh! seja o que for, Tu me fazes saber<br />Que feliz com Jesus sempre sou.<br />", "<br />Sou feliz com Jesus!<br />Sou feliz com Jesus, meu Senhor!<br />", "<br />Embora me assalte o cruel Satanás<br />E ataque com vis tentações;<br />Oh! certo eu estou, apesar de aflições,<br />Que feliz eu serei com Jesus!<br />", "<br />Meu triste pecado por meu Salvador<br />Foi pago de um modo cabal;<br />Valeu-me o Senhor, oh! mercê sem igual!<br />Sou feliz! Graças dou a Jesus!<br />", "<br />A vinda eu anseio do meu Salvador,<br />Em breve virá me levar<br />Ao céu onde vou para sempre morar<br />Com remidos na luz do Senhor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 290, "numero": 291, "titulo": "O estandarte (C.C.#456)", "letra": ["O estandarte desta igreja levantemos sem temor!<br />Ela é a muito amada Esposa do bendito Salvador.<br />É Jesus o comandante verdadeiro, que a conduz;<br />Somos nós os Seus soldados nesta igreja de Jesus.<br />", "<br />Resolutos avançai, trabalhando por Jesus!<br />O estandarte levantai, espalhando a Sua luz!<br />", "<br />Ó igreja, dediquemos nossos corpos ao Senhor!<br />Não devemos ser escravos do sagaz enganador.<br />As riquezas são-nos dadas pela terna mão real;<br />E o Senhor do céu observa se fazemos bem ou mal.<br />", "<br />Graça e glória a Ti pertencem ó Esposa do Senhor!<br />Sê então um instrumento de salvar o pecador.<br />Pois até os fins do mundo Cristo mesmo reinará;<br />E o domínio do evangelho toda a terra abrangerá.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 291, "numero": 292, "titulo": "No serviço do meu Rei (C.C.#410)", "letra": ["No serviço do meu Rei eu sou feliz,<br />Satisfeito, abençoado;<br />Proclamando do meu Rei a salvação,<br />No serviço do meu Rei.<br />", "<br />No serviço do meu Rei<br />minha vida empregarei;<br />Gozo, paz, felicidade<br />tem quem serve a meu bom Rei.<br />", "<br />No serviço do meu Rei eu sou feliz,<br />Obediente e corajoso;<br />Na tristeza ou na alegria sei sorrir,<br />No serviço do meu Rei.<br />", "<br />No serviço do meu Rei eu sou feliz,<br />Jubiloso e consagrado;<br />Ao Seu lado desafio a todo mal,<br />No serviço do meu Rei.<br />", "<br />No serviço do meu Rei eu sou feliz,<br />Venturoso e decidido;<br />Quanto tenho no serviço gastarei,<br />No serviço do meu Rei.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 292, "numero": 293, "titulo": "Vamos batalhar (C.C.#475)", "letra": ["Vamos batalhar, juntos pelejar, todos guerrear,<br />Vamos já! O inimigo que com as hostes vem,<br />Tão feroz e mau, quem vencerá?<br />", "<br />Vamos crentes, vamos já avante,<br />Firmes sempre contra Satanás!<br />Jesus Cristo é nosso Comandante,<br />Vai conosco o General capaz!<br />", "<br />Vamos avançar, sem temor alçar e fazer brilhar<br />Nossa luz! Trevas vão fugir, glórias hão de vir,<br />Venham todos proclamar Jesus!<br />", "<br />Ó glorioso Pai, o fiel não cai, sempre avante vai,<br />Vencedor! Quando o fim chegar desse batalhar,<br />Vem-nos coroar por Teu amor.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 293, "numero": 294, "titulo": "Onde os obreiros (C.C.#434)", "letra": ["Oh! onde os obreiros pra trabalhar<br />Nos campos tão vastos a louvejar?<br />A causa requer prontidão, vigor.<br />Oh! quem quer ceifar com desvelo e ardor?<br />", "<br />Onde os obreiros? Oh! quem quer ir<br />Nos campos tão vastos a escassez suprir?<br />Quem quer decidir hoje a se entregar<br />E os frutos benditos arrecadar?<br />", "<br />O joio do mal a proliferar,<br />O trigo do Mestre quer sufocar;<br />Ceifeiros, avante, no campo entrai,<br />O dia declina, ceifai, ceifai!<br />", "<br />Eis portas abertas à pregação!<br />Nações suspirando por salvação!<br />Oh! onde os obreiros pra anunciar<br />De Deus o perdão de um amor sem par?<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 294, "numero": 295, "titulo": "Terra feliz (C.C.#508)", "letra": ["Eu avisto uma terra feliz<br />Onde irei para sempre morar;<br />Há mansões nesse lindo país<br />Que Jesus foi pra nós preparar.<br />", "<br />Vou morar/cantar/gozar (2x)<br />Nessa terra, celeste porvir! (bis)<br />", "<br />Cantarei nesse lindo país<br />Belos hinos ao meu Salvador;<br />Pois ali viverei bem feliz,<br />Sem angústia, tristezas nem dor.<br />", "<br />Deixarei este mundo, afinal,<br />Para ir a Jesus adorar;<br />Nessa linda cidade real<br />Mil venturas sem fim vou gozar.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 295, "numero": 296, "titulo": "Hei de ver meu Redentor (C.C.#509)", "letra": ["Finda a lida terreal quando já do rio além<br />Nessa vida tão gloriosa me encontrar,<br />Sei que lá meu Redentor finalmente eu hei de ver<br />E com hinos de louvor hei do O saudar.<br />", "<br />Hei de ver meu Redentor!<br />Redimido, junto d´Ele eu hei de estar!<br />Hei de ver meu Salvador!<br />Os sinais dos cravos hei de contemplar.<br />", "<br />Oh! que enlevo divinal, o Seu rosto a contemplar<br />Desde a aurora desse dia perenal;<br />Como então meu coração haverá de O exaltar<br />Pela graça e compaixão celestial!<br />", "<br />Nessa pátria de esplendor hei de amigos encontrar,<br />Meus irmãos em Cristo lá hei de rever;<br />Mas primeiro que os irmãos quando ali no céu chegar<br />Meu Jesus é quem eu mais anseio ver!<br />", "<br />Pelas portas de Sião com as vestes a brilhar,<br />Onde a noite e o pranto nunca chegarão;<br />Lá no lindo céu de luz há de Cristo me guiar<br />E mui perto, sim, eu hei de vê-lO então!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 296, "numero": 297, "titulo": "Se isto não for amor", "letra": ["Deixou o esplendor da Sua glória<br />Sabendo o destino aqui.<br />Estava só e ferido no Gólgota<br />Para dar Sua vida por mim.<br />", "<br />Se isto não for amor<br />O oceano secou.<br />Não há estrelas no céu<br />As andorinhas não voam mais<br />Se isto não for amor<br />O céu não é real.<br />Tudo perde o valor se isto não for amor.<br />", "<br />Mesmo na morte lembrou-Se<br />Do ladrão que ao seu lado estava<br />Com amor e ternura falou-lhe<br />Ao paraíso comigo irás.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 297, "numero": 298, "titulo": "Dai-nos luz (C.C.#436)", "letra": ["Uma voz ressoa de geral clamor:<br />Dai-nos luz! Dai-nos luz!<br />Os milhões em trevas, cheios de pavor<br />Pedem luz, Pedem luz!<br />", "<br />Dai-nos luz a mui gloriosa luz<br />De perdão, de paz e amor!<br />Dai-nos luz a tão preciosa luz<br />De Jesus, o Salvador!<br />", "<br />Ansiamos vida, paz, consolação,<br />Dai-nos luz! Dai-nos luz!<br />Se é por Cristo só que Deus nos dá perdão,<br />Dai-nos luz! Dai-nos luz!<br />", "<br />Sim, por toda parte deve reluzir<br />Essa luz de Jesus!<br />Que ilumina a estrada que hemos de seguir,<br />Dai-nos luz! Dai-nos luz!<br />", "<br />Eia, pois, ó crentes, todo o mundo enchei<br />Dessa luz de Jesus!<br />Aos milhões perdidos sem tardar valei<br />Com a luz de Jesus!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 298, "numero": 299, "titulo": "Boa noite", "letra": ["Boa noite Jesus é quem guarda os seus,<br />Boa noite a paz e a graça de Deus.<br />Boa noite, andai como filhos da luz,<br />Boa noite, quem guarda e quem guia é Jesus.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 299, "numero": 300, "titulo": "Olhando para Cristo (C.C.#579)", "letra": ["Ruge forte, contundente, a guerra do pecado,<br />Mas os seus clangores vis não podem me afligir;<br />Sei em quem confio, pois na rocha estou firmado<br />E celestes bênçãos irei fruir.<br />", "<br />Olhando para Cristo, grande Autor da salvação!<br />Prossigo pois avisto soberano galardão!<br />De Deus ministro me revisto do poder do meu Senhor<br />Para serví-lO com todo ardor!<br />", "<br />Vejo ao longe campos vastos prontos pra colheita,<br />Multidões sem luz, sem Deus, aguardam salvação;<br />Vem ó Deus desperta o amor da geração eleita,<br />Para os Teus obreiros concede unção.<br />", "<br />Desprezando deste mundo as sendas ardilosas,<br />Volto o meu olhar para a cruz de quem me resgatou;<br />Dele tenho na alma, então, as bênçãos mui gloriosas<br />E feliz com Cristo cantando vou.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 300, "numero": 301, "titulo": "Vamos à escola (C.C.#545)", "letra": ["Vamos, jovens alunos, à escola,<br />A Palavra de Deus estudar<br />Boas novas ouvimos de Cristo,<br />E favores reais alcançar<br />", "<br />Oh! vem, sim, vem à escola comigo<br />Ouvir boas novas dos céus;<br />Boas coisas ali aprendemos<br />Da bendita palavra de Deus<br />", "<br />Vamos jovens alunos, à escola<br />Pois queremos louvar ao Senhor<br />Seus conselhos ouvir com respeito<br />Que se ensinam ali com amor<br />", "<br />Ó Jesus, sê presente na escola,<br />Inspirado-nos santo poder<br />E que sempre do estudo aqui feito<br />Muito frutos possamos colher.<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 301, "numero": 302, "titulo": "Tudo entregarei (C.C.#295)", "letra": ["Tudo, ó Cristo, a ti entrego;<br />Tudo, sim, por ti darei!<br />Resoluto, mas submisso,<br />Sempre, sempre, seguirei!<br />", "<br />Tudo entregarei!<br />Tudo entregarei!<br />Sim, por ti, Jesus bendito,<br />Tudo deixarei!<br />", "<br />Tudo, ó Cristo, a ti entrego,<br />Corpo e alma, eis aqui!<br />Este mundo mau renego,<br />Ó Jesus, me aceita a mim!<br />", "<br />Tudo, ó Cristo, a ti entrego,<br />Quero ser somente teu!<br />Tão submisso à tua vontade<br />Como os anjos lá no céu!<br />", "<br />Tudo, ó Cristo, a ti entrego;<br />Oh, eu sinto teu amor<br />Transformar a minha vida<br />E meu coração, Senhor!<br />", "<br />Tudo, ó Cristo, a ti entrego;<br />Oh, que gozo, meu Senhor!<br />Paz perfeita, paz completa!<br />Glória, glória ao Salvador!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }, { "ID": 302, "numero": 303, "titulo": "Fidelidade (C.C.#119)", "letra": ["<br>Por meus delitos expirou<br />Jesus, a Vida e Luz;<br />Ele o castigo meu levou<br />na ensangüentada cruz.<br />", "<br />Oh, faz-me forte em confessar<br />A ti, Jesus, Senhor!<br />Oh, faz-me pronto a confiar<br />Em teu excelso amor!<br />", "<br />E eu hei de ter tão fraca voz,<br />Que trema, ao confessar,<br />A quem, com morte tão atroz,<br />Minha alma quis salvar?<br />", "<br />Oh, faz-me forte em confessar<br />A ti, Jesus, Senhor!<br />Oh, faz-me pronto a confiar<br />Em teu excelso amor!<br />", "<br />Pois eu desejo aqui cantar,<br />Tão grande Salvador;<br />E, quando for no céu morar,<br />Louvá-lo-ei melhor.<br />", "<br />Oh, faz-me forte em confessar<br />A ti, Jesus, Senhor!<br />Oh, faz-me pronto a confiar<br />Em teu excelso amor!<br />"], "cifra": "", "tags": ["oração", "adoração", "comunhão"], "comments": "", "notes": "", "favorit": false }];
    }
    //   let temp:any = this.songs;
    //   for (let i in this.songs) {
    //     // this.songs[i].letra = this.songs[i].letra.replace(/<\/br>/g, "<br />");
    //     this.songs[i].letra = this.songs[i].letra.replace(/></g, ">$<");
    //     this.songs[i].letra = this.songs[i].letra.split("$");
    //     // temp[i].comments = "";
    //     // temp[i].notes = "";
    //     // temp[i].favorit = false;
    //   }
    //   console.log(JSON.stringify(this.songs));
    // }
    SongsService.prototype.getSongs = function () {
        return this.songs;
    };
    SongsService.prototype.getSong = function (index) {
        return (this.songs[index]);
    };
    return SongsService;
}());

//# sourceMappingURL=songs.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightNavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_popover__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_songs_dao_songs_dao__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RightNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RightNavPage = /** @class */ (function () {
    function RightNavPage(changeDetector, viewCtrl, popoverCtrl, alertCtrl, navCtrl, navParams, songsDao) {
        this.changeDetector = changeDetector;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songsDao = songsDao;
        this.list = [];
        this.modal = false;
        this.sliding = false;
        this.color = "secondary";
        this.fontSize = 1;
        this.fontSizeSlide = 4;
        this.size = ['xxx-small', 'xx-small', 'small', 'medium', 'large', 'xx-large', 'xxx-large'];
        this.index = navParams.get("index");
        this.list = navParams.get("lista");
        this.modal = navParams.get("modal");
        if (!this.list) {
            this.song = this.songsDao.getSong(this.index);
        }
        else {
            this.song = this.findSongInList(this.index);
        }
    }
    RightNavPage.prototype.onKeyDown = function (e) {
        if (!this.sliding)
            return false;
        this.slides.enableKeyboardControl(false);
        // e.key == 'ArrowLeft' && this.slides.isBeginning() ? this.prev() : null;
        // e.key == 'ArrowRight' && this.slides.isEnd() ? this.next() : null;
        e.key == 'ArrowLeft' ? this.slidePrev() : null;
        e.key == 'ArrowRight' ? this.slideNext() : null;
        //sem condição
        e.key == 'ArrowDown' ? this.prev() : null;
        e.key == 'ArrowUp' ? this.next() : null;
        // console.log(e.key);
    };
    RightNavPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RightNavPage');
    };
    RightNavPage.prototype.smallText = function () {
        if (this.sliding) {
            this.fontSizeSlide > 0 ? this.fontSizeSlide-- : null;
        }
        else {
            this.fontSize > 0 ? this.fontSize-- : null;
        }
    };
    RightNavPage.prototype.bigText = function () {
        if (this.sliding) {
            this.fontSizeSlide < 6 ? this.fontSizeSlide++ : null;
        }
        else {
            this.fontSize < 6 ? this.fontSize++ : null;
        }
    };
    RightNavPage.prototype.getLetra = function () {
        var letra = "";
        for (var i in this.song.letra) {
            letra = letra.concat(this.song.letra[i]);
        }
        return letra;
    };
    RightNavPage.prototype.slideMode = function () {
        this.sliding = this.sliding ? false : true;
        this.color = this.sliding ? "white" : "secondary";
        this.changeDetector.detectChanges();
        this.content.resize();
    };
    RightNavPage.prototype.goToSlide = function (index, time) {
        this.slides.slideTo(index, time);
        this.slides.update();
    };
    RightNavPage.prototype.slideNext = function () {
        if (this.slides.isEnd()) {
            this.next();
        }
        else {
            this.slides.slideNext();
            this.slides.update();
        }
    };
    RightNavPage.prototype.slidePrev = function () {
        if (this.slides.isBeginning()) {
            this.prev();
        }
        else {
            this.slides.slidePrev();
            this.slides.update();
        }
    };
    RightNavPage.prototype.getCurrentSlide = function () {
        return this.slides ? this.slides.getActiveIndex() : null;
    };
    RightNavPage.prototype.getNumberSlide = function () {
        return this.slides ? this.slides.length() : null;
    };
    RightNavPage.prototype.close = function (event) {
        this.viewCtrl.dismiss();
    };
    RightNavPage.prototype.more = function (event, options) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__popover_popover__["a" /* PopoverPage */], { data: options });
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) { return _this.popoverResponse(data ? data.idx : null); });
    };
    RightNavPage.prototype.popoverResponse = function (value) {
        if (value != 0 && !value)
            return false;
        switch (value) {
            case 0:
                this.slideMode();
                break;
            case 1:
                alert("opção: " + value);
                break;
            default:
                alert("opção: " + value);
                break;
        }
    };
    RightNavPage.prototype.canNext = function () {
        if (this.list) {
            return this.inListIndex < this.list.length - 1 ? true : false;
        }
        else if (this.index < this.songsDao.getSongs().length - 1) {
            return true;
        }
        return false;
    };
    RightNavPage.prototype.next = function () {
        if (this.canNext()) {
            this.index++;
            this.inListIndex++;
            this.getSong();
            this.sliding ? this.goToSlide(0, 0) : null;
        }
        else {
            // this.index--;
            // this.inListIndex--;
        }
    };
    RightNavPage.prototype.canPrev = function () {
        if (this.list) {
            return this.inListIndex > 0 ? true : false;
        }
        else if (this.index > 0) {
            return true;
        }
        return false;
    };
    RightNavPage.prototype.prev = function () {
        if (this.canPrev()) {
            this.index--;
            this.inListIndex--;
            this.getSong();
            this.sliding ? this.goToSlide(0, 0) : null;
        }
        else {
            // this.index++;
            // this.inListIndex++;            
        }
    };
    RightNavPage.prototype.checker = function () {
        this.navCtrl.pop();
    };
    RightNavPage.prototype.getSong = function () {
        if (!this.list) {
            this.getSongInSongs(this.index);
        }
        else {
            this.getSongInList(this.inListIndex);
        }
    };
    RightNavPage.prototype.findSongInList = function (index) {
        for (var i in this.list) {
            if (this.list[i].ID == this.index) {
                this.inListIndex = Number.parseInt(i);
                return this.list[i];
            }
        }
    };
    RightNavPage.prototype.getSongInList = function (index) {
        this.song = this.list[index];
    };
    RightNavPage.prototype.getSongInSongs = function (index) {
        this.song = this.songsDao.getSong(index);
    };
    RightNavPage.prototype.showInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Notas',
            message: this.song.notes ? this.song.notes : 'Ainda não há notas sobre está música',
            buttons: ['Ok']
        });
        alert.present();
        //  let alert = this.alertCtrl.create({
        //     title: 'Comentários',
        //     message: this.song.comments ? this.song.comments: 'Ainda não há comentários para está música',
        //     inputs: [
        //       {
        //         name: 'comments',
        //         placeholder: 'toque para inserir um comentário'
        //       },
        //     ],
        //     buttons: [
        //       {
        //         text: 'Cancel',
        //         handler: data => {
        //           console.log('Cancel clicked');
        //         }
        //       },
        //       {
        //         text: 'Salvar',
        //         handler: data => {
        //           console.log('Saved clicked');
        //         }
        //       }
        //     ]
        //   });
        //   alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], RightNavPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], RightNavPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["y" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], RightNavPage.prototype, "onKeyDown", null);
    RightNavPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-right-nav',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/right-nav/right-nav.html"*/'<!--\n  Generated template for the RightNavPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header [class.translucent]="sliding">\n\n  <ion-navbar id="nav" [color]="color">\n      <ion-title>{{song.numero}}. {{song.titulo}}</ion-title>\n      <ion-buttons start>\n        <button (tap)="close($event)" ion-button icon-only *ngIf="modal" >\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button *ngIf="!modal" (tap)="smallText()" ion-button icon-only >\n          <ion-icon name="remove-circle"></ion-icon>\n        </button>\n        <button *ngIf="!modal" (tap)="bigText()" ion-button icon-only >\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n        <button (tap)="more($event, [\'Modo Slides\'])" ion-button icon-only *ngIf="!modal && !sliding" >\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="!sliding">\n    <h2>{{song.titulo}}</h2>\n    <p [innerHTML]="getLetra()" [class]="size[fontSize]"></p>\n    <ion-fab *ngIf="list" right bottom>\n      <button (tap)="checker()" ion-fab><ion-icon name="checkmark"></ion-icon></button>\n    </ion-fab>\n  </div>\n  <ion-slides *ngIf="sliding" pager="true" shouldEnableKeyboard="false">\n    <ion-slide>\n      <h1 [class]="size[fontSizeSlide]">LDC#{{song.numero}}. {{song.titulo}}</h1>\n    </ion-slide>\n    <ion-slide *ngFor="let p of song.letra">\n      <h1 [class]="size[fontSizeSlide]" [innerHTML]="p"></h1>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer *ngIf="!sliding" >\n      <ion-toolbar color="light">\n        <ion-row>\n          <ion-col class="no-padding">\n            <button (tap)="prev()" [disabled]="canPrev() == false" ion-button color="dark" clear>anterior</button>\n          </ion-col>\n          <ion-col text-center class="no-padding">\n            <button (tap)="showInfo()" ion-button clear color="dark">{{song.numero}}</button>\n          </ion-col>\n          <ion-col text-right class="no-padding">\n            <button (tap)="next()" [disabled]="canNext() == false" ion-button color="dark" clear>próximo</button>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf="sliding" class="translucent">\n      <ion-toolbar color="white">\n        <ion-row>\n          <ion-col class="no-padding">\n            <button (tap)="slidePrev()" ion-button color="dark" icon-only clear>\n              <ion-icon name="skip-backward"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col text-right class="no-padding">\n            <button (tap)="prev()" [disabled]="canPrev() == false" ion-button icon-only color="dark" clear>\n              <ion-icon name="rewind"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col text-center class="no-padding">\n            <!--<button (tap)="showInfo()" ion-button clear color="dark">{{song.numero}}</button>-->\n            <button (tap)="slideMode()"  icon-only ion-button clear color="dark">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col text-left class="no-padding">\n            <button (tap)="next()" [disabled]="canNext() == false" ion-button icon-only color="dark" clear>\n              <ion-icon name="fastforward"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col text-right class="no-padding">\n            <button (tap)="slideNext()" ion-button color="dark" icon-only clear>\n              <ion-icon name="skip-forward"></ion-icon>              \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/right-nav/right-nav.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */]])
    ], RightNavPage);
    return RightNavPage;
}());

//# sourceMappingURL=right-nav.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_songs_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_storage_data_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Storage } from '@ionic/storage';

/*
  Generated class for the FavoritesDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SongsDaoProvider = /** @class */ (function () {
    function SongsDaoProvider(dataStorageProvider, songsService) {
        this.dataStorageProvider = dataStorageProvider;
        this.songsService = songsService;
        // //inicializa a primeira vez pegando do arquivo
        // start(){
        //   // this.storage.get("Songs").then((value) => {
        //   //   if(value){
        //   //     this.songs = value;
        //   //   }else{
        //   //     this.songs = this.songsService.getSongs();
        //   //     this.storage.set("Songs", this.songs);
        //   //   }
        //   // });
        // }
        this.songs = [];
    }
    // #ACTIONS
    // retorna todos os coros this.update() aqui gera loop infinito
    SongsDaoProvider.prototype.getSongs = function () {
        return this.songs;
    };
    //recebe um indice e retorno o coro correspondente
    SongsDaoProvider.prototype.getSong = function (index) {
        return (this.songs[index]);
    };
    //atualiza a lista de musicas
    SongsDaoProvider.prototype.update = function () {
        var _this = this;
        return this.dataStorageProvider.get("Songs").then(function (songs) { return _this.songs = songs; });
    };
    // grava uma música favorita no banco
    SongsDaoProvider.prototype.favorit = function (index) {
        var _this = this;
        this.songs[index].favorit = !this.songs[index].favorit;
        return this.dataStorageProvider.insert("Songs", this.songs)
            .then(function () { return _this.update(); });
    };
    //apaga a chave Songs
    SongsDaoProvider.prototype.clear = function () {
        this.dataStorageProvider.remove("Songs");
    };
    // #SEARCH
    SongsDaoProvider.prototype.isDuplicated = function (searchResult, song) {
        var test = false;
        for (var i in searchResult) {
            test = searchResult[i].ID == song.ID ? true : test;
        }
        return test;
    };
    SongsDaoProvider.prototype.isValid = function (value) {
        return value && value.trim() !== '' ? true : false;
    };
    //retorno o resultado de uma busca que bater com o numero passado
    SongsDaoProvider.prototype.searchByNumber = function (value) {
        if (!this.isValid(value))
            return this.songs;
        var searchResult = [];
        for (var i in this.songs) {
            if (this.songs[i].numero.toString().indexOf(value.toString()) != -1) {
                searchResult.push(this.getSong(parseInt(i)));
            }
        }
        return searchResult;
    };
    //retorno o resultado de uma busca que bater com a string passada  
    SongsDaoProvider.prototype.searchByString = function (value) {
        if (!this.isValid(value))
            return this.songs;
        var searchResult = [];
        for (var i in this.songs) {
            if (this.songs[i].titulo.toLowerCase().indexOf(value.toLowerCase()) != -1 ||
                this.songs[i].numero.toString().indexOf(value.toLowerCase()) != -1) {
                searchResult.push(this.getSong(parseInt(i)));
            }
        }
        for (var i in this.songs) {
            if (JSON.stringify(this.songs[i].letra).toLowerCase().indexOf(value.toLowerCase()) != -1
                && !this.isDuplicated(searchResult, this.songs[i])) {
                searchResult.push(this.getSong(parseInt(i)));
            }
        }
        return searchResult.length > 0 ? searchResult : [];
    };
    SongsDaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_storage_data_storage__["a" /* DataStorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_storage_data_storage__["a" /* DataStorageProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_songs_service__["a" /* SongsService */]) === "function" && _b || Object])
    ], SongsDaoProvider);
    return SongsDaoProvider;
    var _a, _b;
}());

//# sourceMappingURL=songs-dao.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsDaoProvider = /** @class */ (function () {
    //inicializa o arquivo
    function ListsDaoProvider(storage) {
        this.storage = storage;
        this.lists = [];
        this.start();
    }
    // verifica se os dados já existem 
    // no banco se sim, ele os busca
    // se não, cria e depois busca
    ListsDaoProvider.prototype.start = function () {
        var _this = this;
        this.storage.get("Lists").then(function (value) {
            if (value) {
                _this.lists = value;
            }
            else {
                _this.storage.set("Lists", _this.lists);
            }
        });
    };
    //grava dados no banco a partir 
    // de uma chave e um valor
    ListsDaoProvider.prototype.save = function (key, lists) {
        this.storage.set(key, lists);
    };
    //inseri dados na lista
    ListsDaoProvider.prototype.insert = function (list) {
        this.lists.unshift(list);
        this.save("Lists", this.lists);
    };
    // atualiza algo na lista
    ListsDaoProvider.prototype.update = function (index, list) {
        this.lists[index] = list;
        this.save("Lists", this.lists);
    };
    // remove algo da lista
    ListsDaoProvider.prototype.remove = function (index) {
        this.lists.splice(index, 1);
        this.save("Lists", this.lists);
    };
    // public getAll(variable:any){
    // this.storage.forEach((value:any, key:string, itarator:number) => {
    //   variable.key = key;
    //   variable.value = value;
    // }).then(() => {
    //   return Promise.resolve(variable);
    // }).catch((error) => {
    //   return Promise.reject(error);
    // });
    // }
    // apaga todas as listas
    ListsDaoProvider.prototype.clear = function () {
        this.storage.remove("Lists");
    };
    // reseta todas as configurações do app
    ListsDaoProvider.prototype.reset = function () {
        this.storage.clear().then(function (value) {
            console.log("Banco Apagado!!!");
        });
    };
    ListsDaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ListsDaoProvider);
    return ListsDaoProvider;
}());

//# sourceMappingURL=lists-dao.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.collection = this.navParams.get("data");
    }
    PopoverPage.prototype.close = function (index) {
        this.viewCtrl.dismiss({ idx: index });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/popover/popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<ion-list no-margin no-lines>\n   <button *ngFor="let item of collection; let i = index;" ion-item (click)="close(i)">{{item}}</button>\n</ion-list>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataStorageProvider = /** @class */ (function () {
    function DataStorageProvider(storage) {
        this.storage = storage;
        console.log('Hello DataStorageProvider Provider');
    }
    DataStorageProvider.prototype.insert = function (key, value) {
        return this.save(key, value);
    };
    DataStorageProvider.prototype.update = function (key, value) {
        return this.save(key, value);
    };
    DataStorageProvider.prototype.save = function (key, value) {
        return this.storage.set(key, value);
    };
    DataStorageProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    DataStorageProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    DataStorageProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    DataStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], DataStorageProvider);
    return DataStorageProvider;
}());

//# sourceMappingURL=data-storage.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_popover__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_songs_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_dao_lists_dao__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_select__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListsPage = /** @class */ (function () {
    function ListsPage(toastCtrl, popoverCtrl, songsService, navCtrl, navParams, storage, listsDaoProvider, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.songsService = songsService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.listsDaoProvider = listsDaoProvider;
        this.alertCtrl = alertCtrl;
        this.lists = [];
        this.expanded = [];
        this.start();
    }
    // #metodos de inicialização
    ListsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListsPage.prototype.start = function () {
        var _this = this;
        this.storage.get("Lists").then(function (value) {
            if (value) {
                _this.lists = value;
            }
            else {
                _this.storage.set("Lists", _this.lists);
            }
            _this.expanded = _this.inicialize(_this.expanded, _this.lists.length, false);
        });
    };
    // #metodos de navegação
    ListsPage.prototype.pushPageLists = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], { lista: this.lists[index], index: index });
    };
    ListsPage.prototype.newList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_select__["a" /* SelectPage */], {});
    };
    // #ações da lista
    ListsPage.prototype.deleteList = function (index) {
        this.listsDaoProvider.remove(index);
        this.expanded.splice(index, 1);
        this.updateList();
        return false;
    };
    ListsPage.prototype.updateList = function () {
        this.lists = this.listsDaoProvider.lists;
    };
    ListsPage.prototype.clearAll = function () {
        this.listsDaoProvider.clear();
    };
    ListsPage.prototype.expandItem = function (index) {
        this.expanded[index] = this.expanded[index] ? false : true;
    };
    ListsPage.prototype.more = function (event, options) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__popover_popover__["a" /* PopoverPage */], { data: options });
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) { return _this.popoverResponse(data ? data.idx : null); });
    };
    // #metodos de ultilidade
    ListsPage.prototype.inicialize = function (vector, size, value) {
        for (var i = 0; i < size; i++) {
            vector[i] = value;
        }
        return vector;
    };
    // #comportamentos de interface
    ListsPage.prototype.popoverResponse = function (value) {
        if (value != 0 && !value)
            return false;
        switch (value) {
            case 0:
                this.showConfirm("Deseja mesmo apagar?", "todas as listas serão apagadas e não poderão mais ser recuperadas");
                break;
            case 1:
                // alert("opção: "+value);
                break;
            default:
                // alert("opção: "+value);
                break;
        }
    };
    ListsPage.prototype.showConfirm = function (title, msg) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Não',
                    handler: function (negative) {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function (positive) {
                        console.log('Agree clicked');
                        _this.clearAll();
                        _this.showToast("Todos as listas foram apagadas!", 3000, "bottom");
                        setTimeout(function () {
                            window.location.reload();
                            // document.location.href = 'index.html';
                        }, 3000);
                    }
                }
            ]
        });
        confirm.present();
    };
    ListsPage.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ListsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-lists',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/lists/lists.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listas</ion-title>\n    <ion-buttons start>\n      <button (tap)="more($event, [\'Apagar todas\'])" ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngIf="lists.length == 0" >\n    <ion-card-header>\n      Ainda não há listas! :(\n    </ion-card-header>\n    <ion-card-content>\n      Vá em frente, toque no botão de + para criar uma lista  \n    </ion-card-content>\n  </ion-card>\n\n  <ion-row no-padding align-items-start justify-content-start>\n    <ion-col no-padding col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let list of lists; let i = index">\n      <ion-card class="no-margin-bottom" (click)="pushPageLists(i)">\n        <ion-card-header>\n          <ion-card-title>\n            {{list.name}}\n          </ion-card-title>\n          <ion-row>\n            <ion-col left>\n              <p>{{list.date}}</p>\n            </ion-col>\n            <ion-col text-right>\n              <p>{{list.time}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n        \n        <ion-card-content>\n          <ion-list class="expand-wrapper" [class.collapsed]="!expanded[i]" [class.expanded]="expanded[i]" >\n            <ion-item *ngFor="let song of list.songs; let i = index" >\n              {{song.numero}}. {{song.titulo}}\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n        \n        <ion-toolbar color="white">\n          <ion-buttons>\n            <button [class.rotate]="expanded[i]" ion-button icon-only color="secondaryTextColor" (click)="expandItem(i); $event.stopPropagation();">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-buttons>\n\n          <ion-buttons start>\n            <button ion-button icon-only color="secondaryTextColor" (click)="deleteList(i);  $event.stopPropagation();">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n            <!--<button ion-button icon-only color="secondaryTextColor">\n              <ion-icon name="document"></ion-icon>\n            </button>\n            <button ion-button icon-only color="secondaryTextColor">\n              <ion-icon name="share"></ion-icon>\n            </button>-->\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-fab right bottom (tap)="newList()">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/lists/lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1__services_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
    ], ListsPage);
    return ListsPage;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__random_random__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_songs_dao_songs_dao__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists_lists__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_list_model__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__right_nav_right_nav__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_songs_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_general_dao_lists_dao__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectPage = /** @class */ (function () {
    function SelectPage(toastCtrl, navCtrl, modalCtrl, alertCtrl, songsService, songsDao, listsDaoProvider, datePipe) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.songsService = songsService;
        this.songsDao = songsDao;
        this.listsDaoProvider = listsDaoProvider;
        this.datePipe = datePipe;
        this.searching = false;
        this.selecting = false;
        this.type = "text";
        this.placeHolder = "Search";
        this.songs = this.songsDao.getSongs();
        this.list = [];
        this.checked = [];
        this.checked = this.inicialize(this.checked, this.songs.length, false);
    }
    // #INICIALIZAÇÂO
    SelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPage');
    };
    // #NAVEGAÇÂO
    //mudar para a pagina de gerae lista  
    SelectPage.prototype.pushPageGenerate = function () {
        var _this = this;
        var generateList = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__random_random__["a" /* RandomPage */], { songs: this.songs });
        generateList.present();
        generateList.onDidDismiss(function (data) {
            if (data.list) {
                _this.list = data.list;
                _this.createList();
            }
        });
        return false;
    };
    //mudar para a pagina de musica  
    SelectPage.prototype.pushPageMusic = function (index) {
        // this.navCtrl.push(RightNavPage, {index: index});
        this.presentMusicModal(index);
        return false;
    };
    // #INTERFACE
    //mudar para a pagina de musica por modal  
    SelectPage.prototype.presentMusicModal = function (index) {
        var musicModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__right_nav_right_nav__["a" /* RightNavPage */], { index: index, modal: true });
        musicModal.present();
    };
    // axibe o modal para o usuario entra com as informações
    SelectPage.prototype.showCreateListAlert = function (nagativeAction, positiveAction) {
        return this.alertCtrl.create({
            title: 'Como devo Chamar?',
            inputs: [
                {
                    name: 'listname',
                    placeholder: 'Nome'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'negativeAction',
                    handler: function (data) {
                        nagativeAction();
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        positiveAction(data.listname);
                    }
                }
            ]
        });
    };
    SelectPage.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SelectPage.prototype.cancel = function (event) {
        this.search(null);
        if (this.searchbar)
            this.searchbar.value = "";
        this.navCtrl.pop();
        return false;
    };
    // #AÇÕES
    //apenas decide qual tipo de busca irá ser feito
    SelectPage.prototype.search = function (type) {
        var _this = this;
        if (type == null) {
            this.searching = false;
            this.songs = this.songsDao.getSongs();
        }
        else {
            this.searching = true;
        }
        if (type == 1) {
            this.type = "number";
            this.placeHolder = "Digite o numero:";
        }
        else if (type == 2) {
            this.type = "text";
            this.placeHolder = "Digite o nome ou um trecho:";
        }
        if (this.searching == true) {
            setTimeout(function () {
                _this.searchbar.setFocus();
            }, 150);
        }
    };
    // buscar itens no banco
    SelectPage.prototype.getItems = function (value) {
        if (value && value.trim() != '') {
            if (this.type == "number") {
                this.songs = this.songsDao.searchByNumber(value);
            }
            else {
                this.songs = this.songsDao.searchByString(value);
            }
        }
        else {
            this.songs = this.songsDao.getSongs();
        }
    };
    // adiciona uma música na lista
    SelectPage.prototype.check = function (song) {
        var index = this.list.indexOf(song);
        index === -1 ? this.add(song) : this.remove(index);
    };
    SelectPage.prototype.add = function (song) {
        this.list.push(song);
    };
    SelectPage.prototype.remove = function (index) {
        this.list.splice(index, 1);
    };
    // cria uma nova lista e exibe o alert
    SelectPage.prototype.createList = function () {
        var _this = this;
        if (!this.isEmpty()) {
            var alert_1 = this.showCreateListAlert(function () { return null; }, function (listname) {
                if (listname) {
                    var list = new __WEBPACK_IMPORTED_MODULE_3__models_list_model__["a" /* List */](listname, _this.datePipe.transform(new Date(), "dd 'de' MMMM 'de' yyyy"), _this.datePipe.transform(new Date(), "HH:mm"), "", _this.list);
                    _this.listsDaoProvider.insert(list);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__lists_lists__["a" /* ListsPage */], {});
                }
            });
            this.list.length < 5 || this.list.length > 20 ?
                this.showToast("A lista precisa ter entre 5 e 20 músicas", 3000, "bottom") :
                alert_1.present();
        }
    };
    // #SUPORTE
    SelectPage.prototype.isEmpty = function () {
        return this.list.length > 0 ? false : true;
    };
    SelectPage.prototype.inicialize = function (vector, size, value) {
        for (var i = 0; i < size; i++) {
            vector[i] = value;
        }
        return vector;
    };
    //random entre dois numeros
    SelectPage.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", Object)
    ], SelectPage.prototype, "searchbar", void 0);
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["m" /* Component */])({
            selector: 'page-select',template:/*ion-inline-start:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/select/select.html"*/'<!--\n  Generated template for the SelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar >\n    <button *ngIf="!searching" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!searching" >Nova Lista</ion-title>\n    <ion-buttons *ngIf="!searching" start>\n      <button (tap)="pushPageGenerate()" ion-button icon-only color="royal">\n        <!--random-->\n        <ion-icon name="shuffle"></ion-icon>\n      </button>\n      <button (tap)="search(2)" ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-toolbar *ngIf="searching">\n  <ion-searchbar #searchbar (ionCancel)="search()" [showCancelButton]="true" [placeholder]="placeHolder" [type]="type" (ionInput)="getItems($event.target.value)"></ion-searchbar>\n</ion-toolbar>\n\n<ion-content padding>\n  \n\n    <!--lista com ngFor e caixas de seleção-->\n    <ion-list no-lines>\n      <ion-item *ngFor="let song of songs; let i = index" (click)="pushPageMusic(song.ID)">\n        \n        <ion-icon item-start name="heart" color="light" [class.favorit]="song.favorit"></ion-icon>\n\n        <ion-label>\n          <h2>{{song.numero+". "}}{{song.titulo}}</h2>\n          <p>{{song.tags}}</p>\n        </ion-label>\n\n        <ion-checkbox item-end color="dark" (tap)="check(song)" [(ngModel)]="checked[song.ID]" (ionChange)="isEmpty()" ></ion-checkbox>\n      \n      </ion-item>\n    </ion-list>\n  \n  <ion-fab right bottom>\n    <button (tap)="search(1)" ion-fab><ion-icon name="keypad"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color="light" text-right>\n      <button ion-button color="secondaryTextColor" clear (tap)="cancel()">\n        Cancelar\n      </button>\n      <button ion-button color="secondary" clear [disabled]="isEmpty()" (tap)="createList()">\n        Criar Lista\n      </button>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/pessoal/Projetos/Livro de Coros/ldc/src/pages/select/select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_songs_dao_songs_dao__["a" /* SongsDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_general_dao_lists_dao__["a" /* ListsDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map