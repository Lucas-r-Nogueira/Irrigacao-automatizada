import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensorService } from 'src/app/core/service/sensor.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-editar-sensor',
  templateUrl: './modal-editar-sensor.component.html',
  styleUrls: ['./modal-editar-sensor.component.scss'],
})
export class ModalEditarSensorComponent implements OnInit {
  formEditarSensor: FormGroup;
  @Input() sensorId!: number;
  sensorData: any;
  @Output() sensorEditado = new EventEmitter<void>();

  constructor(
    private Activaterouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sensorService: SensorService,
    private modalController: ModalController
  ) {
    this.formEditarSensor = new FormGroup({});
  }

  ngOnInit(): void {
    // Inicializando o formulário com validações
    this.formEditarSensor = this.formBuilder.group({
      id: [ null, Validators.required],
      nome: ['', Validators.required],
      local: ['', Validators.required],
      descricao: ['', Validators.required],
    });

    // Buscar os dados do sensor pelo ID e preencher o formulário
    this.sensorService.PegarSensor(this.sensorId).subscribe((sensor) => {
      this.sensorData = sensor;
      this.formEditarSensor.patchValue(sensor); // Preencher o formulário com os dados recebidos
    });

  }

  // Método para enviar os dados e atualizar o sensor
  onSubmit(): void{
    console.log(this.formEditarSensor.value);
    console.log('sensorId modalEditar:', this.sensorId);

    if (this.formEditarSensor.invalid) {
      console.error('Formulário inválido');
      return;
    }

    // Chama a service para atualizar o sensor
    this.sensorService.atualizarSensor(this.formEditarSensor.value).subscribe(
      (response) => {
        console.log('Sensor atualizado com sucesso!', response);
        this.sensorEditado.emit();
        this.modalController.dismiss(true); // Fecha o modal e informa que o sensor foi atualizado
      },
      (error) => {
        console.error('Erro ao atualizar sensor', error);
      }
    );
  }

    // Método para fechar o modal
    onClose(): void {
      this.modalController.dismiss(false); // Fecha o modal sem salvar
    }
}
