import "./styles.css";

let salarioActual: number = Number(
  prompt("Ingrese salario actual del empleado.", "Por ejemplo: 20000.")
);

let sueldoConAumento20: number = salarioActual * 0.2 + salarioActual;
let sueldoConAumento10: number = salarioActual * 0.1 + salarioActual;
let sueldoConAumento5: number = salarioActual * 0.05 + salarioActual;

if (salarioActual <= 15000) {
  alert(
    "Ha recibido un aumento de sueldo del 20%, ahora su sueldo es de $" +
      sueldoConAumento20 +
      "."
  );
} else if (salarioActual <= 20000) {
  alert(
    "Ha recibido un aumento de sueldo del 10%, ahora su sueldo es de $" +
      sueldoConAumento10 +
      "."
  );
} else if (salarioActual <= 25000) {
  alert(
    "Ha recibido un aumento de sueldo del 5%, ahora su sueldo es de $" +
      sueldoConAumento5 +
      "."
  );
} else {
  alert(
    "Usted no ha recibido un aumento de sueldo, su sueldo es de $" +
      salarioActual +
      "."
  );
}
