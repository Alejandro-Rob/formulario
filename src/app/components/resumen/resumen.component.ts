import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-resumen',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './resumen.component.html',
    styleUrl: './resumen.component.css'
})

export class ResumenComponent
{
    @Input() nombre: string = '';
    @Input() dias: string[] = [];
    @Input() horas: string[] = [];
    @Input() plan: string[] = [];
    @Input() planSecundario: string[] = [];
    @Input() zona: string[] = [];

    enviado: boolean = false;
    enviando: boolean = false;

    // URL de tu formulario en Formspree
    formspreeUrl: string = 'https://formspree.io/f/mykazwle';

    async enviar()
    {
        this.enviando = true;

        const datos = {
            nombre: this.nombre ? this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1) : '',
            dias: (this.dias || []).join(', ') || 'Ninguno',
            horas: (this.horas || []).join(', ') || 'Ninguno',
            plan: (this.plan || []).join(', ') || 'Ninguno',
            plan_secundario: (this.planSecundario || []).join(', ') || 'Ninguno',
            zona: (this.zona || []).join(', ') || 'Ninguno',
        };

        try {
            await fetch(this.formspreeUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            this.enviado = true;
        } catch (error) {
            alert('Ha habido un error al enviar. Inténtalo de nuevo.');
        }

        this.enviando = false;
    }

    // Recargamos la página para empezar de cero
    reiniciar() {
        window.location.reload();
    }
}
