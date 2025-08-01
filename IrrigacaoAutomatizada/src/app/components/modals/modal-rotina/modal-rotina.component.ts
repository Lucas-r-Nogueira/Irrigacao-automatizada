import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RotinaService } from 'src/app/core/service/rotina.service';
import { ModalController } from '@ionic/angular';  // Importando o ModalController

@Component({
  selector: 'app-modal-rotina',
  templateUrl: './modal-rotina.component.html',
  styleUrls: ['./modal-rotina.component.scss'],
})
export class ModalRotinaComponent implements OnInit {
  formRotina: FormGroup;
  @Input() sensorId!: number;
  @Output() rotinaCriada = new EventEmitter<void>(); // Emite um evento quando o sensor for criado com sucesso

  constructor(
    private formBuilder: FormBuilder,
    private rotinaService: RotinaService,
    private modalController: ModalController // ModalController para controlar o modal
  ) {
    this.formRotina = new FormGroup({});
  }

  ngOnInit() {
    // Validações
    this.formRotina = this.formBuilder.group({
      id_sensor: [this.sensorId, Validators.required],
      nome: [null, Validators.required],
      dias_de_ativacao: [null, Validators.required],
      horario_de_inicio: [null, Validators.required],
      horario_de_termino: [null, Validators.required],
    });    
  }

  // Método para enviar os dados
  onSubmit() {
    console.log(this.formRotina.value);
    if (this.formRotina.invalid) {
      console.log("Formulário Inválido");
      return;
    }

    const formValue = this.formRotina.value;
    let horarioDeInicio = new Date(formValue.horario_de_inicio);
    let horarioDeTermino = new Date(formValue.horario_de_termino);

    // Verificar se os horários são válidos
    if (isNaN(horarioDeInicio.getTime()) || isNaN(horarioDeTermino.getTime())) {
      console.error("Horários inválidos");
      return;
    }

    // Converter os horários para o formato H:i:s
    formValue.horario_de_inicio = horarioDeInicio.toLocaleTimeString('pt-BR', { hour12: false });
    formValue.horario_de_termino = horarioDeTermino.toLocaleTimeString('pt-BR', { hour12: false });

      // Converte os dias selecionados em formato de 0 e 1
  const diasSelecionados = formValue.dias_de_ativacao.map((dia: string) => parseInt(dia, 10));
  formValue.dias_de_ativacao = this.gerarDiasParaFormulario(diasSelecionados);

    // Chama a service de criar o Rotina
    this.rotinaService.criarRotina(formValue).subscribe(
      (response) => {
        this.rotinaCriada.emit(); // Emite o evento de sucesso
        this.modalController.dismiss();
      },
      (error) => {
        console.error("Erro ao criar rotina:", error);
      }
    );
  }

  gerarDiasParaFormulario(diasSelecionados: number[]): string {
    // Inicializa um array de 7 posições com '0'
    const diasDeAtivacao = Array(7).fill('0');
  
    // Marca os dias selecionados com '1'
    diasSelecionados.forEach(dia => {
      if (dia >= 0 && dia < 7) {
        diasDeAtivacao[dia] = '1';
      }
    });
  
    // Retorna a string no formato de 0 e 1
    return diasDeAtivacao.join('');
  }
  
  
}
