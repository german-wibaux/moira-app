import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { switchMap, tap, finalize } from 'rxjs/operators';

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
    
  }


  /*Edit a property*/
  // editProperty(event, property: PropertyInterface) {
  //   this.editState = true;
  //   this.propertyToEdit = property;
  // }

  onSaveArticle() {
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

}
