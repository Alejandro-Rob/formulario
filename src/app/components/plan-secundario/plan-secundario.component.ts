import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-plan-secundario',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './plan-secundario.component.html',
    styleUrl: './plan-secundario.component.css'
})

export class PlanSecundarioComponent
{
    @Input() nombre: string = '';
    @Output() continuar = new EventEmitter<string[]>();

    planes = [
        { nombre: 'Demasiado verte en el mismo día, ya está bien', marcado: false },
        { nombre: 'Tomar un helado',                               marcado: false },
        { nombre: 'Ir al cine',                                    marcado: false },
        { nombre: 'Salir a bailar',                                marcado: false },
        { nombre: 'Cuando te vea te lo digo',                      marcado: false },
        { nombre: 'Improvisar sobre la marcha',                    marcado: false },
    ];

    siguiente() {
        const planesMarcados = this.planes
            .filter(p => p.marcado)
            .map(p => p.nombre);

        this.continuar.emit(planesMarcados);
    }
}
