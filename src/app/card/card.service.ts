import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CardData } from '../model/cardData';

@Injectable({
  providedIn: 'root',
})
export class CardService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getData() {
    return this.http.get<CardData[]>('http://localhost:3000/cardDatas/');
  }

  postData(data: CardData) {
    return this.http.post<CardData[]>('http://localhost:3000/cardDatas/', data);
  }
}
