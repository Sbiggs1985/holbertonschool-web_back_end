export default function guardrail(mathFunction) {
  try {
    const value = mathFunction();
    return [value, 'Guardrail was processed'];
  } catch (error) {
    return [error.toString(), 'Guardrail was processed'];
  }
}
