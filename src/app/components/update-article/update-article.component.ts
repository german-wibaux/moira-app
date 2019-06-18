import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { Observable, from } from 'rxjs';
import { UrldeletedInterface } from 'src/app/models/urldeletedInterface';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { UrlsPhotoService } from 'src/app/services/urls-photo.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  article: ArticleInterface = null;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  task: any;
  uploadPercent1: any;
  uploadPercent2: any;
  uploadPercent3: any;
  uploadPercent4: any;
  uploadPercent5: any;
  uploadPercent6: any;
  uploadPercent7: any;
  uploadPercent8: any;
  uploadPercent9: any;
  uploadPercent10: any;
  uploadPercent11: any;
  uploadPercent12: any;
  uploadPercent13: any;
  uploadPercent14: any;
  uploadPercent15: any;
  uploadPercent16: any;
  uploadPercent17: any;
  uploadPercent18: any;
  uploadPercent19: any;
  uploadPercent20: any;
  uploadPercent21: any;
  uploadPercent22: any;
  uploadPercent23: any;
  uploadPercent24: any;

  url: UrldeletedInterface = {
    url: ''
  }

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage,
    private urlphotoService: UrlsPhotoService) { }

  ngOnInit() {
    // this.propertyService.getProperty()
    this.route.params.subscribe(result => {
      this.articleService.getArticle(result['id']).subscribe(resultArticle => {
        this.article = resultArticle;
        //  this.images = this.property.imagen;
        //  for (let i = 0; i < this.images.length; i++) {
        //    this.slides.push({
        //      image: this.images[i]
        //    });
        //  }

      })
    });
  }

  onUpdateArticle(article: ArticleInterface) {
    this.articleService.updateArticle(article);
    this.router.navigate(['/private']);
  }

  uploadFile(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model  
        this.article.images.splice(0, 0, url);
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
      console.log('image paso');
      console.log(this.article.images);
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
          this.article.images.splice(1, 0, url);
        }),
        finalize(() => loading = false)
      ).subscribe(() => {
        // success
        console.log('image1 paso');
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
          this.article.images.splice(2, 0, url);
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


}
