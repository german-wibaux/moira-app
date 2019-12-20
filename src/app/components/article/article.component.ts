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
  activeSlideIndex = 0;
  // url: SafeResourceUrl;

  constructor(private articleService: ArticleService , 
              private route: ActivatedRoute,
              public sanitizer:DomSanitizer) { }

  ngOnInit() { 
   // this.propertyService.getProperty()
   console.log(this.article);
   this.route.params.subscribe( result => {
     this.articleService.getArticle(result['id']).subscribe( resultArt => {
      this.article = resultArt;
      this.images = this.article.images;
      console.log(this.article.images[0]);
      for (let i = 0; i < this.images.length; i++) {
        this.slides.push({
          image: this.images[i]
        });
      }
      // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.article.description);  
            
     })
   });
  }

}
