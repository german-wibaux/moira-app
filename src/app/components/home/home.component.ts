import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ArticleInterface } from 'src/app/models/articleInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  // goDetails () {
  //   this.route.navigate(['/details'], { queryParams: { order: proper } });
  // }


  ngOnInit() { }  

  // updateCurso(property: PropiedadInterface) {
  //   this.propertiesService.updateProperty(property);
  // }

}
