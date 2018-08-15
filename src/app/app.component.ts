import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alaya Platform';
    articles: Article[];
    constructor() {
    this.articles = [
      new Article('Sistema distribuido que detecta posibles accidentes de tránsito mediante la geolocalización, conectado a través de un servicio.', 'http://Posteado por Juan Pablo Martinez hace 5 horas atrás. Comentarios Reportar', 3),
      new Article('Proceso de trata de aguas servidas para la producción de abono destinado al uso de cultivos agropecuarios en septima región .', 'http://Posteado por Mateo Sepúlveda hace 5 horas atrás. Comentarios Reportar', 2),
      new Article('Machine learning para bebes', 'http://Posteado por Basil Ossandón hace 7 horas atrás. Comentarios Reportar', 1),
      new Article('Implementacion blockchain como libro de contabilidad para aceleracion de sistema tributario', 'http://Posteado por Basil Ossandón hace 7 horas atrás. Comentarios Reportar', 5),
      new Article('Animal models to emulate core cognitive processes.', 'http://Posteado por Basil Ossandón hace 7 horas atrás. Comentarios Me gusta Reportar', 2),
      new Article('Studying the mechanisms that control construction and maintenance of cellular and molecular circuits.', 'http://Posteado por Basil Ossandón hace 7 horas atrás. Comentarios Me gusta Reportar', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = ''; // clean the input line
    link.value = ''; // clean the input line
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
