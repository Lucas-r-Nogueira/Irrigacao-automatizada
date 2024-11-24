import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Para redirecionar após sucesso
import { SensorService } from 'src/app/core/service/sensor.service';
import { ModalController } from '@ionic/angular';  // Importando o ModalController

@Component({
  selector: 'app-modal-sensor',
  templateUrl: './modal-sensor.component.html',
  styleUrls: ['./modal-sensor.component.scss'],
})
export class ModalSensorComponent implements OnInit {
  formSensor: FormGroup;
  @Output() sensorCriado = new EventEmitter<void>(); // Emite um evento quando o sensor for criado com sucesso
  
  // Construindo o forms, configurando a service e o router
  constructor(
    private formBuilder: FormBuilder,
    private sensorService: SensorService, // Serviço para enviar dados à API
    private modalController: ModalController // ModalController para controlar o modal
  ) {
    // Iniciar Forms
    this.formSensor = new FormGroup({});
  }

  ngOnInit() {
    // Inicializando o formulário com validações
    this.formSensor = this.formBuilder.group({
      nome: [null, Validators.required], // Obrigatório 
      local: [null, Validators.required], // Obrigatório
      descricao: [null],
      ultima_leitura:  [0],
    })
  }

  // Método para enviar os dados
   onSubmit() {
    console.log(this.formSensor.value);
    if (this.formSensor.invalid) {
      console.log("Formulário inválido");
      return;
    }

    // Chama a service de criar o sensor
    this.sensorService.criarSensor(this.formSensor.value).subscribe(
      (response) => {
        console.log("Sensor criado com sucesso!", response);
        this.sensorCriado.emit(); // Emite o evento de sucesso
        this.modalController.dismiss();
      },
      (error) => {
        console.error('Erro ao criar sensor', error);
      }
    );
  }
}
