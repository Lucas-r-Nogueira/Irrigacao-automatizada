import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RotinaModule } from 'src/app/models/rotina/rotina.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-rotina',
  templateUrl: './modal-rotina.component.html',
  styleUrls: ['./modal-rotina.component.scss'],
})
export class ModalRotinaComponent  implements OnInit {
  formRotina: FormGroup;

  // Construindo o forms
  constructor(
    private formBuilder: FormBuilder,
    private rotinaService: RotinaModule,
    private router: Router
  ) {
    // Iniciar Forms
    this.formRotina = new FormGroup({});
  }

  ngOnInit() {
    // Validações
    this.formRotina = this.formBuilder.group({
      nome: [null, Validators.required], 
      diaInicio: [null, Validators.required],
      diaFim: [null, Validators.required],
      horarioInicio: [null, Validators.required],
      horarioFim: [null, Validators.required],
    })
  }
  // Método para enviar os dados
  onSubmit(){ 
    console.log(this.formRotina.value);

    if( this.formRotina.invalid){
      console.log("Formulário Inválido");
      return;
    }

    // chama a Service criar
    // ...
  }

}
