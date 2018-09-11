import { Component } from '@angular/core';
import { Article } from './article/article.model';
import {HttpClientModule, HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alaya Platform';
  articles: Article[];  
  constructor(){
     this.articles = [
      new Article('Sistema distribuido que detecta posibles accidentes de tránsito mediante la geolocalización, conectado a través de un servicio.', 'http://Posteado por Juan Pablo Martinez hace 5 horas atrás. Comentarios Reportar', 3),];
  }
  addArticle(title: HTMLInputElement, text: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and text: ${text.value}`);
    this.articles.push(new Article(title.value, text.value, 0));
    title.value = ''; // clean the input line
    text.value = ''; // clean the input line
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
