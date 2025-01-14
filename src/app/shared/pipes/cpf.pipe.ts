import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform {

    transform(value: any): any {
        const cleanCPF = value.replace(/\D/g, '');
        if (cleanCPF.length !== 11) return value;
        return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    }
}
