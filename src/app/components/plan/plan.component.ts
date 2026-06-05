import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-plan',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './plan.component.html',
    styleUrl: './plan.component.css'
})

export class PlanComponent {

    @Input() nombre: string = '';
    @Output() continuar = new EventEmitter<string[]>();

    planes = [
        { nombre: 'Tomar una caña/café o similar', marcado: false },
        { nombre: 'Ir al cine',                 marcado: false },
        { nombre: 'Quedar para cenar',          marcado: false },
        { nombre: 'Cuando te vea te lo digo',   marcado: false },
        { nombre: 'Improvisar sobre la marcha', marcado: false },
    ];

    siguiente()
    {
        const planesMarcados = this.planes
            .filter(p => p.marcado)
            .map(p => p.nombre);
        
        this.continuar.emit(planesMarcados);
    }
}
