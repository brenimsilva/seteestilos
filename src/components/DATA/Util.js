import React from "react";

export default function convertTypeToID(type) {
  switch (type.toLowerCase()) {
    case "esportivo":
      return 0;
      break;
    case "elegante":
      return 1;
      break;
    case "dramatico":
      return 2;
      break;
    case "sexy":
      return 3;
      break;
    case "romantico":
      return 4;
      break;
    case "criativo":
      return 5;
      break;
    case "tradicional":
      return 6;
      break;
  }
}
