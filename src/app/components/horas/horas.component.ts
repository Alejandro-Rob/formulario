import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-horas',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './horas.component.html',
    styleUrl: './horas.component.css'
})

export class HorasComponent 
{
    @Output() continuar = new EventEmitter<string[]>();
    @Input() nombre: string = '';

    // Lista de franjas horarias con su estado
    horas = [
        { nombre: 'Mediodía',      marcado: false },
        { nombre: 'Tarde temprano', marcado: false },
        { nombre: 'Tarde',          marcado: false },
        { nombre: 'Noche temprano', marcado: false },
    ];

    siguiente() {
        const horasMarcadas = this.horas
            .filter(h => h.marcado)
            .map(h => h.nombre);

        this.continuar.emit(horasMarcadas);
    }
}
