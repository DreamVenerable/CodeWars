function basicOp(o, v1, v2) {
    return Function(`return ${v1} ${o} ${v2}`)();
  }