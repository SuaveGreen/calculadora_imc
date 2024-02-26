// import { Stack, GithubLogo } from "@phosphor-icons/react";
import { Ruler, Weight } from "lucide-react";
import imgPeso from '../assets/imgPesando.jpg'
import { useState } from "react";

export function MainSection() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const calculaImc =  () => {
    const imc = (peso / (altura * altura)).toFixed(1);
    console.log(imc)

    if(imc < 18.5) {
      return(
          <p>
            Seu IMC é: {imc}. Você está abaixo do peso.
          </p>
      )
    } else if (imc >= 18.5 && imc <= 24.9) {
      return (
        <p>
          Seu IMC é: {imc}. Você está na média.
        </p>
      )
    } else if (imc >= 25 && imc <= 29.9) {
      return (
        <p>
          Seu IMC é: {imc}. Você está com sobrepeso.
        </p>
      )
    } else if (imc >= 30 && imc <= 34.9) {
      return (
        <p>
          Seu IMC é: {imc}. Você está com obesidade de grau 1
        </p>
      )
    } else if (imc >= 35 && imc <= 39.9) {
      return (
        <p>
          Seu IMC é: {imc}. Você está com obesidade de grau 2
        </p>
      )
    } else if (imc >= 40) {
      return (
        <p>
          Seu IMC é: {imc}. Você está com obesidade de grau 3
        </p>
      )
    }
  }

  return (
    <main className="flex justify-center w-full">
      <div className="">
        <img src={imgPeso} className="h-72 w-h-72 mb-8" />
        <div className="grid gap-8">
          <div className="grid gap-4 justify-center">
            <div className="flex justify-center">
              <h1 className="text-lg">
              Calcule seu IMC:
              </h1>
            </div>
            <form className="flex gap-2 items-center">
              <Weight className="size-5  "/>
              <h2 className="">
                Peso:
              </h2>
              <input type="number" placeholder="Ex: 82,5" step={0.10} min={0} onChange={evento => setPeso(parseFloat(evento.target.value))} className="bg-slate-300 placeholder-slate-600 rounded-lg outline-none border-b-2 p-2 ml-2.5" />
              <Ruler className="size-5 ml-5" />
              <h2 className="">
                Altura:
              </h2>
              <input type="number" placeholder="Ex: 1,83" min={0} step={0.10} onChange={evento => setAltura(parseFloat(evento.target.value))} className="bg-slate-300 placeholder-slate-600 outline-none p-2 rounded-lg" />
            </form>
              <div className="text-center">
                {calculaImc()}
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}