import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Para redirecionar após sucesso
import { SensorService } from 'src/app/core/service/sensor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-sensor',
  templateUrl: './modal-sensor.component.html',
  styleUrls: ['./modal-sensor.component.scss'],
})
export class ModalSensorComponent implements OnInit {
  formSensor: FormGroup;

  // Construindo o forms, configurando a service e o router
  constructor(
    private formBuilder: FormBuilder,
    private sensorService: SensorService, // Serviço para enviar dados à API
    private router: Router // Roteador para redirecionamento após salvar

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
    })
  }

  // Método para enviar os dados
  onSubmit() {
    // console.log(this.formSensor.value);
    if (this.formSensor.invalid) {
      console.log("Formulário inválido");
      return;
    }

    // Chama a service de criar o sensor
    this.sensorService.criarSensor(this.formSensor.value).subscribe(
      (response) => {
        // Mensagem de Success
        console.log("Sensor criado com sucesso!", response);

        // Router
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erro ao criar sensor', error);
      }
    );
  }
}
