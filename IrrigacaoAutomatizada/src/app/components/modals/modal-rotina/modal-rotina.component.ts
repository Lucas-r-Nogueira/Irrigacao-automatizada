import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RotinaService } from 'src/app/core/service/rotina.service';
import { ModalController } from '@ionic/angular';  // Importando o ModalController

@Component({
  selector: 'app-modal-rotina',
  templateUrl: './modal-rotina.component.html',
  styleUrls: ['./modal-rotina.component.scss'],
})
export class ModalRotinaComponent  implements OnInit {
  formRotina: FormGroup;
  @Input() sensorId! : number;

  // Construindo o forms
  constructor(
    private formBuilder: FormBuilder,
    private rotinaService: RotinaService,
  ) {
    // Iniciar Forms
    this.formRotina = new FormGroup({});
  }

  ngOnInit() {
    // Validações
    this.formRotina = this.formBuilder.group({
      id_sensor: [this.sensorId, Validators.required],
      nome: [null, Validators.required], 
      diaInicio: [null, Validators.required],
      diaFim: [null, Validators.required],
      horarioInicio: [null], 
      horarioFim: [null],
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
    this.rotinaService.criarRotina(this.formRotina.value).subscribe(
      (response) => {
        console.log("Rotina criada com sucesso!");
      },
      (error) => {
        console.error("Erro ao criar rotina:", error);
      }
    );    
  }

}
