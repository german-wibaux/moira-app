import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { UrldeletedInterface } from 'src/app/models/urldeletedInterface';
import { UrlsPhotoService } from 'src/app/services/urls-photo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    state: ''
  }

  url: UrldeletedInterface = {
    url: ''
  }

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
    this.route.params.subscribe( result => {
      this.articlesService.getArticle(result['id']).subscribe( article => {
        this.article = article;
      });
    });
      
  }

  deletePhoto(url, index) {  
    
    if ((index+1) == 5) {
      this.article.images[index] = 'borrado';
      this.url.url= url;
      this.urlphotoService.addUrl(this.url);
      this.onUpdateArticle(this.article);
    } else if (this.article.images[index+1] == 'borrado' ) {
        this.article.images[index] = 'borrado';
        this.url.url= url;
        this.urlphotoService.addUrl(this.url);
        this.onUpdateArticle(this.article);        
    } else {
        let aux = index + 1;
        alert('La imagen' + ' ' + aux + ' '+ 'no ha sido eliminada');
    }

    
  }

  onUpdateArticle(article: ArticleInterface){
    this.articlesService.updateArticle(article);
    alert('El articulo ha sido editado con exito');
    this.route.params.subscribe( result => {      
        this.router.navigate(['/update-article' , result['id']]); 
    });  
      
   }

   uploadFile(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type moira-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'moira-app' };
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
      console.log('Articulo guardado');
      this.onUpdateArticle(this.article);
      // this.article.images.splice(0,0,url);
      //console.log(this.article.images);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile1(event) {
    // console.log(event);

    if (!this.article.images[0] || this.article.images[0] == 'borrado') {
      alert("Cargar foto anterior");
      
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type moira-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'moira-app' };
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
      console.log('Articulo guardado');
      this.onUpdateArticle(this.article);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
    }
  }

  uploadFile2(event) {
    // console.log(event);

    if (!this.article.images[1] || this.article.images[1] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type moira-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'moira-app' };
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
      console.log('Articulo guardado');
      this.onUpdateArticle(this.article);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }
}

  uploadFile3(event) {
    // console.log(event);

    if (!this.article.images[2] || this.article.images[2] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type moira-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'moira-app' };
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
      console.log('Articulo guardado');
      this.onUpdateArticle(this.article);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }
}

  uploadFile4(event) {
    // console.log(event);

    if (!this.article.images[3] || this.article.images[3] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type moira-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'moira-app' };
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
      console.log('Articulo guardado');
      this.onUpdateArticle(this.article);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }
}

updateArticle() {
  this.onUpdateArticle(this.article);  
}



}
