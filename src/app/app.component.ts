import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { DiasComponent } from './components/dias/dias.component';
import { HorasComponent } from './components/horas/horas.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlanSecundarioComponent } from './components/plan-secundario/plan-secundario.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { ZonaComponent } from './components/zona/zona.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        BienvenidaComponent, 
        DiasComponent,
        HorasComponent,
        PlanComponent,
        PlanSecundarioComponent,
        ResumenComponent,
        ZonaComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent
{
    nombre: string = '';

    diasSeleccionados: string[] = [];
    horasSeleccionadas: string[] = [];
    planSeleccionado: string[] = [];
    planSecundarioSeleccionado: string[] = [];
    zonaSeleccionada: string[] = [];

    // Controla qué pantalla se muestra: 'bienvenida', 'dias', 'horas'
    pantallaActual: string = 'bienvenida';

    cambiarPantalla(pantalla: string, nombre?: any)
    {
        if (nombre) this.nombre = nombre;
        this.pantallaActual = pantalla;
    }

    guardarDias(dias: string[]) {
        this.diasSeleccionados = dias;
        this.pantallaActual = 'horas';
    }

    guardarHoras(horas: string[]) {
        this.horasSeleccionadas = horas;
        this.pantallaActual = 'plan';
    }

    guardarPlan(plan: string[]) {
        this.planSeleccionado = plan;
        this.pantallaActual = 'plan-secundario';
    }

    guardarPlanSecundario(plan: string[]) {
        this.planSecundarioSeleccionado = plan;
        this.pantallaActual = 'zona';
    }
    
    guardarZona(zona: string[]) {
        this.zonaSeleccionada = zona;
        this.pantallaActual = 'resumen';
    }
}
