import { Component } from '@angular/core';
import { Article } from './article/article.model';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Idea} from './idea';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Alaya Platform';
  articles: Article[];  
  idea = new Idea("nombre","psw",0);

  constructor(private http: HttpClient){

     this.get();
     this.articles = [
      new Article('Sistema distribuido que detecta posibles accidentes de tránsito mediante la geolocalización, conectado a través de un servicio.', 'http://Posteado por Juan Pablo Martinez hace 5 horas atrás. Comentarios Reportar', 3),];
  }

  get(){
    this.getUs().subscribe(data =>{
      for (var i = data.length - 1; i >= 0; i--) {
        this.articles.push(new Article(data[i].title, data[i].text, 0));      }
    });
  }

  getUs() :Observable<Idea[]> {
    return this.http.get<Idea[]>("http://localhost:1313/ideas");
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
