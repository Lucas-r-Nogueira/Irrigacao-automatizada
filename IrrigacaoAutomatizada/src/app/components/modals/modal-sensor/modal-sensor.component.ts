import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-modal-sensor',
  templateUrl: './modal-sensor.component.html',
  styleUrls: ['./modal-sensor.component.scss'],
})
export class ModalSensorComponent  implements OnInit {
  form: FormGroup;

  // Construindo o forms
  constructor(private formBuilder: FormBuilder) {
    // Iniciar Forms
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null], 
      local: [null],
      descricao: [null],
    })
  }
  // Método para enviar os dados
  onSubmit(){ 
    console.log(this.form.value);
  }

}
