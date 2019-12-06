import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleInterface } from 'src/app/models/articleInterface';





@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})

export class ResultViewComponent implements OnInit {


  articles: ArticleInterface[] = null;
  

  

  constructor(private route: ActivatedRoute,
              private articlesService : ArticleService,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.articlesService.getArticlesSearch(params.search).subscribe( articles => {
        /** List every properties */
        console.log(articles.length);
          this.articles = articles;  
        
        
          
      });
    });
  }

}
