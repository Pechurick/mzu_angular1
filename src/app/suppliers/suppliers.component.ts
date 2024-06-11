import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent {
  alias: string = "suppliers-main";
  type: string = "imageButtonsInCode";
  position: number = 1;
  img: string = "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers1.svg";
  title: string = "Постачальникам";
  details: string[] = [
    "Міністерство охорони здоров'я України довело до МЗУ напрями закупівлі лікарських засобів та медичних товарів за бюджетною програмою КПКВК 2301400 «Забезпечення медичних заходів окремих державних програм та комплексних заходів програмного характеру».",
    "Крім того, МЗУ закуповують медвироби та обладнання у межах ініціативи Президента України UNITED24.",
    "Основні нормативно-правові акти, перелік напрямів до закупівлі, номенклатуру та проєкт типового договору можна переглянути нижче."
  ];

  actions: {link: string, title: string, tooltip: string}[] = [
    {link: "", title: "Напрями до закупівлі", tooltip: ""},
    {link: "https://zakon.rada.gov.ua/laws/show/216-2022-%D0%BF#Text", title: "Номенклатура", tooltip: "Список медичних товарів, що закуповуються для програм охорони здоров'я"},
    {link: "https://drive.google.com/drive/u/0/folders/1BC7qRLrf9YRV-GhR9rQcSV0SYFi02uZC", title: "Типовий договір", tooltip: "Шаблон договору про закупівлю лікарських засобів"},
    {link: "https://app.powerbi.com/view?r=eyJrIjoiMzIzOGNjMmItOGJjMS00NGUzLTlmOWMtODMyM2YyNmZmYjMzIiwidCI6ImJlNDg5NWQzLTI0ZDAtNDQyZS04ZGI3LTcxMWQzYjQxOGQ1YSIsImMiOjl9", title: "Календар закупівель", tooltip: ""}
  ];

  // doesHaveLink(): boolean {
  //   for(let i = 0; i < this.buttons.length; i++){
  //     if(this.buttons[i].link === ""){
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
