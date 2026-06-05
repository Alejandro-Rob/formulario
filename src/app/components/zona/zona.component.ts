import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-zona',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './zona.component.html',
    styleUrl: './zona.component.css'
})

export class ZonaComponent
{
    @Input() nombre: string = '';
    @Output() continuar = new EventEmitter<string[]>();

    zonas = [
        { nombre: 'En mi casa (Alejandro te pasa a recoger como un caballero)',  marcado: false },
        { nombre: 'En la tuya (Alejandro es recogido por ti como buen princeso)',  marcado: false },
        { nombre: 'En el sitio del plan', marcado: false },
    ];

    siguiente()
    {
        const zonasMarcadas = this.zonas
            .filter(z => z.marcado)
            .map(z => z.nombre);

        this.continuar.emit(zonasMarcadas);
    }
}
