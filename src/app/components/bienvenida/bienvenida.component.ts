import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bienvenida',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './bienvenida.component.html',
    styleUrl: './bienvenida.component.css'
})

export class BienvenidaComponent
{
    @Output() continuar = new EventEmitter<string>();

    nombre: string = '';
    errorNombre: boolean = false;

    // Lista de nombres permitidos (ponlos en minúscula para comparar sin distinción)
    nombresPermitidos: string[] = [
        'karima',
        'hefzi'
    ];

    comprobarNombre()
    {
        const nombreMinuscula = this.nombre.trim().toLowerCase();

        if (this.nombresPermitidos.includes(nombreMinuscula))
        {
            this.errorNombre = false;
        
            // Navegamos a la siguiente pantalla mandando el nombre
            this.continuar.emit(this.nombre);
        }
        else
        {
            this.errorNombre = true;
        }
    }
}
