import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { switchMap, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editState: boolean = false;
  articleToEdit: ArticleInterface;
  
  uploadPercent: Observable<number>;

  article: ArticleInterface = {
    code:'',
    description: '',
    images: [],
    kind: '',
    name: '',
    price: '',
    state: ''
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
  ) { 
  }
    

  ngOnInit() {
    this.route.params.subscribe( result => {
      this.articlesService.getArticle(result['id']).subscribe( article => {
        this.article = article;
        console.log(this.article)});
    });
      
  }

  onUpdateArticle(article: ArticleInterface){
    this.articlesService.updateArticle(article);
    alert('El articulo ha sido editado con exito');  
    this.router.navigate(['/private']);   
   }

  /*Edit a property*/
  // editProperty(event, property: PropertyInterface) {
  //   this.editState = true;
  //   this.propertyToEdit = property;
  // }

  // onSaveArticle() {
  //   this.articlesService.addArticle(this.article).then( response => {
  //     if (response) {
  //       alert("La propiedad ha sido ingresada con exito");
  //       this.router.navigate(['/private']);
  //     } else {
  //       alert("Ha ocurrido un error, intentelo nuevamente");
  //     }
  //   });
    
  //   //this.router.navigate(['/private']);
  // }

  // uploadFile(event) {
  //   // console.log(event);

  //   const file = event.target.files[0];


  //   if (file.type.split('/')[0] !== 'image') {
  //     console.error('unsupported file type moira-app')
  //     return;
  //   }
  //   let loading = true;
  //   const day = new Date();
  //   const path = 'articles/' + day.getTime() + '/' + file.name;
  //   const customMetadata = { app: 'moira-app' };
  //   const ref = this.storage.ref(path);
  //   this.task = this.storage.upload(path, file, { customMetadata });
  //   this.uploadPercent = this.task.percentageChanges();


  //   return from(this.task).pipe(
  //     switchMap(() => ref.getDownloadURL()),
  //     tap(url => {
  //       // use url here, e.g. assign it to a model  
  //       this.article.images.splice(0,0,url);
  //     }),
  //     finalize(() => loading = false)
  //   ).subscribe(() => {
  //     // success
  //     console.log('image paso');
  //     console.log(this.article.images);
  //   }, error => {
  //     // failure
  //     console.log(error);
  //   });    

  //   //*********************Codigo pa la barra de progreso y algo mas si pinta************************
  //   //     <div>{{ uploadPercent | async }}</div>
  // }

  // deleteCurso(property) {
  //   alert("La propiedad ha sido eliminada");
  //   this.router.navigate(['/edit']);
  //   console.log(property.available + '////' + property.code);
  // }

  // onDeleteProperty(property: PropertyInterface){
  //   // this.propertiesService.updateProperty(property);
  //   //   this.router.navigate(['/edit']);
  //   property.available = false;
  //   this.properties = [];
  //   this.propertiesService.updateProperty(property);
  //   this.router.navigateByUrl('/edit');
  //  }

}
