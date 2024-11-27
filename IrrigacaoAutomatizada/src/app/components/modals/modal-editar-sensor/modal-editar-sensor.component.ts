import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensorService } from 'src/app/core/service/sensor.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-editar-sensor',
  templateUrl: './modal-editar-sensor.component.html',
  styleUrls: ['./modal-editar-sensor.component.scss'],
})
export class ModalEditarSensorComponent implements OnInit {
  @Input() sensorId!: number; // Receber o id do sensor
  @Input() sensor: any; // Receber as informações do sensor
  formEditarSensor: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sensorService: SensorService,
    private modalController: ModalController
  ) {
    this.formEditarSensor = new FormGroup({});
  }

  ngOnInit() {
    // Inicializando o formulário com validações
    this.formEditarSensor = this.formBuilder.group({
      nome: [this.sensor?.nome, Validators.required], // Pré-preenchido com o nome atual
      local: [this.sensor?.local, Validators.required], // Pré-preenchido com o local atual
      descricao: [this.sensor?.descricao], // Pré-preenchido com a descrição atual
    });
  }

  // Método para enviar os dados e atualizar o sensor
  onSubmit() {
    if (this.formEditarSensor.invalid) {
      console.log("Formulário inválido");
      return;
    }

    // Chama a service para atualizar o sensor
    this.sensorService.atualizarSensor(this.sensorId, this.formEditarSensor.value).subscribe(
      (response) => {
        console.log("Sensor atualizado com sucesso!", response);
        this.modalController.dismiss();
      },
      (error) => {
        console.error("Erro ao atualizar sensor", error);
      }
    );
  }

  // Fechar o modal sem fazer alterações
  closeModal() {
    this.modalController.dismiss();
  }
}
