export class Tarefa {
    _id : string | undefined ;
    descricao: string; //atributo
    statusRealizada: boolean; //atributo

    constructor(_descricao: string, _statusRealizada: boolean) {
        // os parametros são armazenados nos atributos da classe
        this.descricao = _descricao;
        this.statusRealizada = _statusRealizada; 
    }
}