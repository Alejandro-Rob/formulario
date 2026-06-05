import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dias',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './dias.component.html',
    styleUrl: './dias.component.css'
})

export class DiasComponent
{
    @Input() nombre: string = '';

    // Evento para navegar a la pantalla de horas
    @Output() continuar = new EventEmitter<string[]>();

    // Lista de días con su estado (marcado o no)
    dias = [
        { nombre: 'Lunes',     marcado: false },
        { nombre: 'Martes',    marcado: false },
        { nombre: 'Miércoles', marcado: false },
        { nombre: 'Jueves',    marcado: false },
        { nombre: 'Viernes',   marcado: false },
        { nombre: 'Sábado',    marcado: false },
        { nombre: 'Domingo',   marcado: false },
    ];

    siguiente()
    {
        // Filtramos solo los días marcados y enviamos sus nombres
        const diasMarcados = this.dias
            .filter(d => d.marcado)
            .map(d => d.nombre);

        this.continuar.emit(diasMarcados);
    }
}
