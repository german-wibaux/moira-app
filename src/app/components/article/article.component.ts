import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: ArticleInterface = null;
  images: String[] = [];
  slides = [];
  slide: String;
  activeSlideIndex = 0;
  // url: SafeResourceUrl;

  constructor(private articleService: ArticleService , 
              private route: ActivatedRoute,
              public sanitizer:DomSanitizer) { }

  ngOnInit() { 
   this.route.params.subscribe( result => {
     this.articleService.getArticle(result['id']).subscribe( resultArt => {
      this.article = resultArt;
      this.images = this.article.images;
      this.slide = this.images[0];
      for (let i = 1; i < this.images.length; i++) {
         if (this.images[i] == '' || this.images[i] == "borrado") {
           console.log('');          
         } else {
          this.slides.push(this.images[i]);
         }
        
      }
      console.log(this.article);
      // console.log(this.images);
      // console.log(this.article);
      // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.article.description);  
            
     })
   });
  }

}
