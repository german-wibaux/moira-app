import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articles: ArticleInterface[];
  editState: boolean = false;
  // propertyToEdit: PropiedadInterface;

  constructor(
    private articlesService : ArticleService,
    private route: Router
  ) { 
    this.articlesService.getArticles().subscribe( articles => {
      /** List every properties */
      this.articles = articles;
      console.log(this.articles);
        
    });
    //this.propertiesService.getProperty().subscribe( property => {
      //console.log(property);
    
  }

  ngOnInit() {
  }

  onDeleteArticle(article: ArticleInterface){
    // this.propertiesService.updateProperty(property);
    //   this.router.navigate(['/edit']);
    // property.available = false;
    //this.properties = [];
    //this.propertiesService.updateProperty(property);
    //this.router.navigateByUrl('/edit');

    this.articlesService.deletArticle(article);
    this.route.navigate(['/private']);

   }

}
