import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { UrldeletedInterface } from 'src/app/models/urldeletedInterface';
import { UrlsPhotoService } from 'src/app/services/urls-photo.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  
  editState: boolean = false;
  articleToEdit: ArticleInterface;
  
  uploadPercent: Observable<number>;
  uploadPercent1: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  uploadPercent4: Observable<number>;

  article: ArticleInterface = {
    code:'',
    description: '',
    images: [],
    kind: '',
    name: '',
    price: '',
    state: '',
    created: 0,
    category: '',
  }

  url: UrldeletedInterface = {
    url: ''
  }

  religiosos = ['iconos','cruces','biblias','medallones','retablos','tripticos','pantocrator','virgenes','sagrada-familia','cuneros'];
  decorativos = ['bandejas','portaretrato','espejos','apoyaplatos','apoyafuentes','platos-giratorios'];
  amigos = ['anadry','amalia','enith','gabriela'];
  vintage = ['vajilla','cristaleria','adornos','muebles'];
  categories = [];

  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticleService,
    private storage: AngularFireStorage,
    private urlphotoService: UrlsPhotoService
  ) { 
  }
    

  ngOnInit() {
    
  }


  /*Edit a article*/
  // editProperty(event, property: PropertyInterface) {
  //   this.editState = true;
  //   this.propertyToEdit = property;
  // }

  uploadFile(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model  
        this.article.images.splice(0,0,url);
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
      console.log(this.article.images);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  onSaveArticle() {
    let createdNow = Date.now();
    this.article.created = createdNow;
    this.articlesService.addArticle(this.article).then( response => {
      if (response) {
        alert("La propiedad ha sido ingresada con exito");
        this.router.navigate(['/private']);
      } else {
        alert("Ha ocurrido un error, intentelo nuevamente");
      }
    });
    
    //this.router.navigate(['/private']);
  }

  uploadFile1(event) {
    // console.log(event);
    if (!this.article.images[0] || this.article.images[0] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

      const file = event.target.files[0];

      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type dalmiro-app')
        return;
      }
      let loading = true;
      const day = new Date();
      const path = 'properties/' + day.getTime() + '/' + file.name;
      const customMetadata = { app: 'chalita-app' };
      const ref = this.storage.ref(path);
      this.task = this.storage.upload(path, file, { customMetadata });
      this.uploadPercent1 = this.task.percentageChanges();


      return from(this.task).pipe(
        switchMap(() => ref.getDownloadURL()),
        tap(url => {
          // use url here, e.g. assign it to a model        
            this.article.images.splice(1,0,url);                
        }),
        finalize(() => loading = false)
      ).subscribe(() => {
        // success
        console.log(this.article.images);
      }, error => {
        // failure
        console.log(error);
      }); 
    }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile2(event) {
    // console.log(event);

    if (!this.article.images[1] || this.article.images[1] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent2 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.article.images.splice(2,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile3(event) {
    // console.log(event);

    if (!this.article.images[2] || this.article.images[2] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent3 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.article.images.splice(3,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile4(event) {
    // console.log(event);

    if (!this.article.images[3] || this.article.images[3] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent4 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.article.images.splice(4,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  onChangeCategory(event) {
    
    //this.article.kind = event.target.value;
    let option = event.target.value;
    
    switch (option) {
      case 'religiosos':
        this.article.category = 'religiosos';
        this.categories = this.religiosos;
        break;

      case 'decorativos':
        this.article.category = 'decorativos';
        this.categories = this.decorativos;
        break;
      
      case 'vintage':
        this.article.category = 'vintage';
        this.categories = this.vintage;
        break;
      case 'amigos':
        this.article.category = 'amigos';
        this.categories = this.amigos;
        break;
      default:
        break;
    }
    // this.categories = this.amigos
    // console.log(this.categories);
    // this.categories = 
  }

  onChangeKind(event) {
    this.article.kind = event.target.value;
  }

  deletePhoto(url, index) {  
    
    this.article.images[index] = 'borrado';
    this.url.url= url;
    this.urlphotoService.addUrl(this.url);
  }


}
