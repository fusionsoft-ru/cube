
export function decrease() {
  return { type: 'DECREASE' }
}

export function increase() {
  return { type: 'INCREASE' }
}

export function dimensionToggle(id) {
  return { type: 'DIMENSION_TOGGLE', id }
}

export function load() {
  return { type: 'LOAD' }
}
