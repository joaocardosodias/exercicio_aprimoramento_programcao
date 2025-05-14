// Fila de atendimento (FIFO)
let filaAtendimento = [];

// Pilha de prontuários (LIFO)
let pilhaProntuarios = [];

// Adicionando 5 pacientes à fila
filaAtendimento.push("Ana");
filaAtendimento.push("Bruno");
filaAtendimento.push("Carla");
filaAtendimento.push("Daniel");
filaAtendimento.push("Eduarda");

console.log("Fila inicial de atendimento:");
console.log(filaAtendimento.join(", "));

// Ver quem será o próximo a ser atendido
let proximo = filaAtendimento[0];
console.log("\nPróximo paciente a ser atendido:");
console.log(proximo);

// Atender primeiro paciente
let atendido1 = filaAtendimento.shift();
console.log(`\nPaciente atendido: ${atendido1}`);
pilhaProntuarios.push(atendido1);

// Atender segundo paciente
let atendido2 = filaAtendimento.shift();
console.log(`\nPaciente atendido: ${atendido2}`);
pilhaProntuarios.push(atendido2);

// Mostrar fila restante
console.log("\nFila de atendimento restante:");
console.log(filaAtendimento.join(", "));

// Mostrar pilha de prontuários (do topo para a base)
console.log("\nPilha de prontuários:");
console.log([...pilhaProntuarios].reverse().join(", "));

// Extra: buscar prontuário específico
let nomeBuscado = "Ana";
if (pilhaProntuarios.includes(nomeBuscado)) {
    console.log(`\nProntuário de ${nomeBuscado} encontrado na pilha.`);
} else {
    console.log(`\n Prontuário de ${nomeBuscado} não está na pilha.`);
}

// Reiniciar simulação com nova lista
console.log("\nReiniciando simulação com nova fila:");

filaAtendimento = ["Felipe", "Gabriela", "Henrique"];
pilhaProntuarios = [];

console.log("Nova fila de atendimento:");
console.log(filaAtendimento.join(", "));
