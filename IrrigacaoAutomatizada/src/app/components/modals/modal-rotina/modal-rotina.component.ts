import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-rotina',
  templateUrl: './modal-rotina.component.html',
  styleUrls: ['./modal-rotina.component.scss'],
})
export class ModalRotinaComponent  implements OnInit {
  formRotina: FormGroup;

  // Construindo o forms
  constructor(private formBuilder: FormBuilder) {
    // Iniciar Forms
    this.formRotina = new FormGroup({});
  }

  ngOnInit() {
    this.formRotina = this.formBuilder.group({
      nome: [null], 
      diaInicio: [null],
      diaFim: [null],
      horarioInicio: [null],
      horarioFim: [null],
    })
  }
  // Método para enviar os dados
  onSubmit(){ 
    console.log(this.formRotina.value);
  }

}
