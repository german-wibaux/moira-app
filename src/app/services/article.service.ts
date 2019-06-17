import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ArticleInterface } from '../models/articleInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleCollection: AngularFirestoreCollection<ArticleInterface> = null;
  articles: Observable<ArticleInterface[]>;
  article: Observable<ArticleInterface>;
  articleDoc: AngularFirestoreDocument<ArticleInterface>;

  constructor(public afs: AngularFirestore) {
    //this.properties = afs.collection('propiedades').valueChanges();
    // this.propertyCollection = afs.collection<PropiedadInterface>('properties');
    // this.properties = this.propertyCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as PropiedadInterface;
    //     const id = a.payload.doc.id;
    //     return { id, ...data};
    //   }))
    // );    
  }


  getArticles() {
    this.articleCollection = this.afs.collection<ArticleInterface>('articles');
    this.articles = this.articleCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ArticleInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.articles;
  }

  public getArticle(article) {
    this.articleDoc = this.afs.collection('articles').doc(article);
    this.article = this.articleDoc.snapshotChanges().pipe(map(action => {
      const id = action.payload.id;
      const data = action.payload.data() as ArticleInterface;

      return { id, ...data };
    }));

    return this.article;


  }

  addArticle(article: ArticleInterface) {
    return this.afs.collection('articles').add(article);
    //propertyCollection.add(property);


  }

  // getFileUploads(numberItems): AngularFireList<FileUpload> {
  //   return this.afs.list('/test', ref =>
  //     ref.limitToLast(numberItems));
  // }

  deletArticle(article: ArticleInterface) {
    this.articleDoc = this.afs.doc(`articles/${article.id}`);
    this.articleDoc.delete();
  }

  updateArticle(article: ArticleInterface) {
    this.articleDoc = this.afs.doc(`articles/${article.id}`);
    this.articleDoc.update(article);
  }

  public getArticlesAlternative() {
    //console.log(this.afs.collection<ArticleInterface>('articles').snapshotChanges());
    return this.afs.collection<ArticleInterface>('articles').snapshotChanges();
  }


}
