
export class BoardQuestions {

    public static instancia: null | BoardQuestions = null;
    private componente: any;
    public $: any;

    constructor($: any) {
        BoardQuestions.instancia = this;
        this.componente = $;
    }
    
    public getQuestions(): string[] {
      
    }
    

  }
  