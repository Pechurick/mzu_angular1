import { Component } from '@angular/core';

@Component({
  selector: 'app-how-we-buy',
  templateUrl: './how-we-buy.component.html',
  styleUrl: './how-we-buy.component.scss'
})
export class HowWeBuyComponent {
  title = "Як ми закуповуємо?";
  img = "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers2.svg";

  content = [
    {
      alias: "prozorro",
      title: "Prozorro",
      details: "Відкриті торги з Особливостями згідно Постанови Кабінету Міністрів України від 12 жовтня 2022 р. № 1178 (зі змінами).",
      type: "imageButton",
      position: 1,
      img: "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers3.svg",
      actions: [
        {
          link: "https://prozorro.gov.ua/",
          title: "Основні вимоги >"
        }
      ]
    },
    {
      alias: "prozorro-market",
      title: "Prozorro Market",
      details: "Закупівлі здійснюються через інструмент оголошення запиту пропозицій постачальників.",
      type: "imageButton",
      position: 2,
      img: "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers4.svg",
      actions: [
        {
          link: "",
          title: "Про Prozorro Market >"
        }
      ]
    },
    {
      alias: "suppliers-sap-ariba",
      title: "SAP Ariba",
      details: "Використовується для ринкових консультацій, опитувань, укладання договорів, комунікацій з постачальниками тощо.",
      type: "imageButton",
      position: 3,
      img: "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers5.svg",
      actions: [
        {
          link: "https://drive.google.com/drive/folders/1TBdfPT262erFOq0DwwfvRYWvQgoimX95?usp=drive_link",
          title: "Інструкція >"
        },
        {
          link: "https://s1-eu.ariba.com/Sourcing/Main/aw?awh=r&awssk=DdOqZB8mdUZmWEhW&realm=MinistryOfHealthofUkraine&dard=1",
          title: "Реєстрація"
        }
      ]
    }
  ];
}
