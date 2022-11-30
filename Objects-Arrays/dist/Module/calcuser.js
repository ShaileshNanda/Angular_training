"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = __importDefault(require("./calc"));
var calc = new calc_1.default();
console.log(calc.add(2, 3));
console.log(calc.sub(10, 5));
