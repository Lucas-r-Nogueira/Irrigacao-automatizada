import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-modal-editar-sensor',
  templateUrl: './modal-editar-sensor.component.html',
  styleUrls: ['./modal-editar-sensor.component.scss'],
})
export class ModalEditarSensorComponent implements OnInit {
  @Input() sensorId!: number; // Recebe o ID do sensor via Input
  formSensor: FormGroup;
  sensor: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private sensorService: SensorService,
    private modalController: ModalController
  ) {
    this.formSensor = new FormGroup({});
  }

  ngOnInit() {
    this.formSensor = this.formBuilder.group({
      nome: [null, Validators.required],
      local: [null, Validators.required],
      descricao: [null, Validators.required],
    });

    // Busca informações do sensor
    this.carregarSensor();
  }

  carregarSensor() {
    this.sensorService.PegarSensor(this.sensorId).subscribe(
      (sensor) => {
        this.sensor = sensor;

        // Atualiza o formulário com as informações do sensor
        this.formSensor.patchValue({
          nome: sensor.nome,
          local: sensor.local,
          descricao: sensor.descricao,
        });
      },
      (error) => {
        console.error('Erro ao carregar sensor:', error);
      }
    );
  }
  // Método para salvar as alterações
  salvarSensor() {
    if (this.formSensor.invalid) {
      console.error('Formulário inválido!');
      return;
    }

    const sensorAtualizado = this.formSensor.value;

    this.sensorService.atualizarSensor(this.sensorId, sensorAtualizado).subscribe(
      (response) => {
        console.log('Sensor atualizado com sucesso:', response);

        // Atualiza os dados no componente pai
        this.modalController.dismiss(response);
      },
      (error) => {
        console.error('Erro ao atualizar sensor:', error);
      }
    );
  }
    // Fechar o modal sem salvar alterações
    fecharModal() {
      this.modalController.dismiss();
    }
}
