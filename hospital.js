// Classe Fila (FIFO)
class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    desenfileirar() {
        return this.itens.shift();
    }

    espiar() {
        return this.itens[0];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.join(", ");
    }

    limpar() {
        this.itens = [];
    }
}

// Classe Pilha (LIFO)
class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento) {
        this.itens.push(elemento);
    }

    desempilhar() {
        return this.itens.pop();
    }

    espiar() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.slice().reverse().join(", ");
    }

    buscar(nome) {
        return this.itens.includes(nome);
    }

    limpar() {
        this.itens = [];
    }
}

// Função principal da simulação
function simularAtendimento() {
    const filaAtendimento = new Fila();
    const pilhaProntuarios = new Pilha();

    // Adicionando 5 pacientes à fila
    const pacientes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"];
    pacientes.forEach(p => filaAtendimento.enfileirar(p));

    console.log(" Fila inicial de atendimento:");
    console.log(filaAtendimento.imprimir());

    console.log("\n Próximo paciente a ser atendido:");
    console.log(filaAtendimento.espiar());

    // Simulando atendimento de dois pacientes
    for (let i = 0; i < 2; i++) {
        const atendido = filaAtendimento.desenfileirar();
        console.log(`\n Paciente atendido: ${atendido}`);
        pilhaProntuarios.empilhar(atendido);
    }

    console.log("\n Fila de atendimento restante:");
    console.log(filaAtendimento.imprimir());

    console.log("\n Pilha de prontuários (do topo para a base):");
    console.log(pilhaProntuarios.imprimir());

    return { filaAtendimento, pilhaProntuarios };
}

//  Função extra: buscar paciente na pilha de prontuários
function buscarProntuario(pilha, nome) {
    if (pilha.buscar(nome)) {
        console.log(` Prontuário de ${nome} encontrado na pilha.`);
    } else {
        console.log(` Prontuário de ${nome} não está na pilha.`);
    }
}

//  Reiniciar simulação com nova lista
function reiniciarSimulacao(novosPacientes) {
    console.log("\n Reiniciando simulação...");
    const fila = new Fila();
    const pilha = new Pilha();

    novosPacientes.forEach(p => fila.enfileirar(p));

    console.log(" Nova fila de pacientes:");
    console.log(fila.imprimir());
}

// Executando simulação principal
const { pilhaProntuarios } = simularAtendimento();

// Executando busca extra
buscarProntuario(pilhaProntuarios, "Ana");
buscarProntuario(pilhaProntuarios, "Carla");

// Executando reinício (opcional)
reiniciarSimulacao(["Felipe", "Gabriela", "Henrique"]);
