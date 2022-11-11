import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CardData } from '../model/cardData';
import { VideoComponent } from '../video/video.component';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardDatas$!: Observable<Array<CardData>>;
  loadData: Array<CardData> = [
    {
      id: 5,
      title: 'Direct Investment | How We Invest',
      video: true,
      videoData: 'https://youtu.be/Z02HfMIBc9w',
      image:
        'https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/05/whatdoesabusinessanalystdo_FB.jpg',
    },
    {
      id: 6,
      title:
        'EQT Privare Equity and alswfge to acquire Envirotainer, the leading global provider of Mission-critical Biopharma Trasnsport Services',
      video: false,
      videoData: '',
      image:
        'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000',
    },
    {
      id: 7,
      title: 'Direct Investment | How We Invest',
      video: true,
      videoData: 'https://youtu.be/Z02HfMIBc9w',
      image:
        'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
    },
    {
      id: 8,
      title:
        'EQT Privare Equity and alswfge to acquire Envirotainer, the leading global provider of Mission-critical Biopharma Trasnsport Services',
      video: false,
      videoData:'',
      image:
        'https://img.freepik.com/free-vector/pie-chart-infographic_23-2147495005.jpg?w=2000',
    },
  ];

  constructor(private service: CardService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.getData();
    
  }

  getData() {
    return (this.cardDatas$ = this.service.getData());
  }

  loadMoreData() {
    this.loadData.forEach((data) => {
      this.service.postData(data).subscribe();
    });

    this.getData();
  }

  openDialog(data: string): void {
    this.dialog.open(VideoComponent, {
      width: '390px',
      height: '300px',
      data,
    });
  }
}
