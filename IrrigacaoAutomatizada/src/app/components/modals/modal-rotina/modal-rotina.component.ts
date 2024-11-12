import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-rotina',
  templateUrl: './modal-rotina.component.html',
  styleUrls: ['./modal-rotina.component.scss'],
})
export class ModalRotinaComponent  implements OnInit {
  form: FormGroup;

  // Construindo o forms
  constructor(private formBuilder: FormBuilder) {
    // Iniciar Forms
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null], 
      dia: [null],
      horario: [null],
    })
  }
  // Método para enviar os dados
  onSubmit(){ 
    console.log(this.form.value);
  }

}
