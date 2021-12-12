import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-programiki',
  templateUrl: './programiki.component.html',
  styleUrls: ['./programiki.component.scss'],
})
export class ProgramikiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //zad 1 Bingo
  zad1Field1: number = 0;
  zad1Text: string = ' ';
  zad1Action() {
    if (this.zad1Field1 < 5) {
      this.zad1Text = 'To za mało!';
    } else if (this.zad1Field1 > 10) {
      this.zad1Text = 'To za dużo!';
    } else {
      this.zad1Text = 'BINGO!!!';
    }
  }
  //---------------------------------------------------------------------
  //zad 2 Max i min z 3 liczb
  zad2Field1: number = 0;
  zad2Field2: number = 0;
  zad2Field3: number = 0;
  zad2Field1Check: boolean = false;
  zad2Field2Check: boolean = false;
  zad2Field3Check: boolean = false;
  zad2Max: number = 0;
  zad2Min: number = 0;

  zad2Action() {
    if (this.zad2Field1 > this.zad2Field2) {
      if (this.zad2Field1 > this.zad2Field3) this.zad2Max = this.zad2Field1;
      if (this.zad2Field2 > this.zad2Field3) {
        this.zad2Min = this.zad2Field3;
      } else {
        this.zad2Min = this.zad2Field2;
      }
    } else if (this.zad2Field2 > this.zad2Field3) {
      this.zad2Max = this.zad2Field2;
      if (this.zad2Field1 > this.zad2Field3) {
        this.zad2Min = this.zad2Field3;
      } else {
        this.zad2Min = this.zad2Field1;
      }
    } else {
      this.zad2Max = this.zad2Field3;
      if (this.zad2Field1 > this.zad2Field2) {
        this.zad2Min = this.zad2Field2;
      } else {
        this.zad2Min = this.zad2Field1;
      }
    }
  }
  //---------------------------------------------------------------------
  //zad 3 Oceny
  zad3Field1: number = 0;
  zad3Result: string = '';

  zad3Table: any[] = [
    {
      val1: 'Punkty:',
      val2: 'Ocena:',
    },
    {
      val1: '0-50',
      val2: 'ndst',
    },
    {
      val1: '51-60',
      val2: 'mrn',
    },
    {
      val1: '61-70',
      val2: 'dst',
    },
    {
      val1: '71-80',
      val2: 'db',
    },
    {
      val1: '81-90',
      val2: 'bdb',
    },
    {
      val1: '91-100',
      val2: 'cel',
    },
  ];

  zad3Action() {
    switch (this.zad3Field1 > 0) {
      case this.zad3Field1 >= 0 && this.zad3Field1 <= 50:
        this.zad3Result = 'ndst';
        break;
      case this.zad3Field1 >= 51 && this.zad3Field1 <= 60:
        this.zad3Result = 'mrn';
        break;
      case this.zad3Field1 >= 61 && this.zad3Field1 <= 70:
        this.zad3Result = 'dst';
        break;
      case this.zad3Field1 >= 71 && this.zad3Field1 <= 80:
        this.zad3Result = 'db';
        break;
      case this.zad3Field1 >= 81 && this.zad3Field1 <= 90:
        this.zad3Result = 'bdb';
        break;
      case this.zad3Field1 >= 91 && this.zad3Field1 <= 100:
        this.zad3Result = 'cel';
        break;
      case this.zad3Field1 > 100:
        this.zad3Result = '(Podana punktacja jes poza skala)';
        break;

      default:
        break;
    }
  }
  //---------------------------------------------------------------------
  //zad 4 WMC
  zad4Field1: number = 0;
  zad4Field2: number = 0;
  zad4Result: number = 0;
  zad4Comment: string = '';
  zad4Table: any[] = [
    {
      val1: 'WMC(BMI):',
      val2: '',
    },
    {
      val1: '<19',
      val2: 'NIEDOWAGA',
    },
    {
      val1: '19-25',
      val2: 'NORMA',
    },
    {
      val1: '25-30',
      val2: 'NADWAGA',
    },
    {
      val1: '>30',
      val2: 'OTYLOSC',
    },
  ];
  wmc(waga: number, wzrost: number) {
    return waga / ((wzrost * wzrost) / 10000);
  }

  zad4Action() {
    let niedowaga = 19;
    let norma = 25;
    let nadwaga = 30;

    this.zad4Result = this.wmc(this.zad4Field1, this.zad4Field2);

    switch (this.zad4Result > 0) {
      case this.zad4Result < niedowaga:
        this.zad4Comment = 'NIEDOWAGA';
        break;
      case this.zad4Result >= niedowaga && this.zad4Result <= norma:
        this.zad4Comment = 'NORMA';
        break;
      case this.zad4Result >= norma && this.zad4Result <= nadwaga:
        this.zad4Comment = 'NADWAGA';
        break;
      case this.zad4Result > nadwaga:
        this.zad4Comment = 'OTYLOSC';
        break;
      default:
        break;
    }
  }
  //---------------------------------------------------------------------
  //zad 5 Funkcja kwadratowa
  zad5Field1: number = 0;

  zad5Action() {}
}
